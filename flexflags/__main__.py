"""Command line interface for FlexFlags."""

from __future__ import annotations

import json
import os
from typing import Dict

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


def main() -> None:
    progress = load_progress()
    try:
        while True:
            country = choose_next_flag(progress)
            flag = FLAGS[country]
            answer = input(f"Which country does this flag belong to? {flag} ")
            stats = progress.setdefault(country, {"correct": 0, "wrong": 0})
            if answer.strip().lower() == country.lower():
                print("Correct!\n")
                stats["correct"] += 1
            else:
                print(f"Incorrect. It is {country}.\n")
                stats["wrong"] += 1
            save_progress(progress)
            cont = input("Press Enter to continue or type 'quit' to exit: ")
            if cont.strip().lower() == "quit":
                break
    except KeyboardInterrupt:
        print("\nSession ended.")
    finally:
        save_progress(progress)


if __name__ == "__main__":
    main()
