"""Minimal web interface for FlexFlags."""

from __future__ import annotations

import html
import json
import os
import urllib.parse
from typing import Dict, Iterable

from wsgiref.simple_server import make_server

from .data import FLAGS
from .algorithm import choose_next_flag

PROGRESS_FILE = "progress.json"

Stats = Dict[str, Dict[str, int]]


def load_progress() -> Stats:
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r", encoding="utf-8") as fh:
            return json.load(fh)
    return {}


def save_progress(progress: Stats) -> None:
    with open(PROGRESS_FILE, "w", encoding="utf-8") as fh:
        json.dump(progress, fh, indent=2)


def render_page(flag: str, country: str, message: str | None) -> str:
    msg_html = f"<p>{html.escape(message)}</p>" if message else ""
    return f"""
    <html>
      <head><title>FlexFlags</title></head>
      <body>
        <h1>Guess the Country</h1>
        {msg_html}
        <form method='POST'>
          <div style='font-size:5rem'>{flag}</div>
          <input type='hidden' name='expected' value='{html.escape(country)}'>
          <input name='guess' autofocus>
          <button type='submit'>Submit</button>
        </form>
      </body>
    </html>
    """


def application(environ, start_response) -> Iterable[bytes]:
    progress = load_progress()
    message = None
    if environ.get("REQUEST_METHOD", "GET").upper() == "POST":
        length = int(environ.get("CONTENT_LENGTH", 0) or 0)
        body = environ["wsgi.input"].read(length).decode("utf-8")
        params = urllib.parse.parse_qs(body)
        expected = params.get("expected", [""])[0]
        guess = params.get("guess", [""])[0]
        stats = progress.setdefault(expected, {"correct": 0, "wrong": 0})
        if guess.strip().lower() == expected.lower():
            stats["correct"] += 1
            message = "Correct!"
        else:
            stats["wrong"] += 1
            message = f"Incorrect. It is {expected}."
        save_progress(progress)
    country = choose_next_flag(progress)
    flag = FLAGS[country]
    html_content = render_page(flag, country, message)
    start_response("200 OK", [("Content-Type", "text/html; charset=utf-8")])
    return [html_content.encode("utf-8")]


def main() -> None:
    with make_server("0.0.0.0", 8000, application) as server:
        print("Serving on http://0.0.0.0:8000")
        server.serve_forever()


if __name__ == "__main__":
    main()
