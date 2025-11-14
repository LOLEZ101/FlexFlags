from wsgiref.util import setup_testing_defaults

from flexflags import web


def start_response(status, headers):
    pass


def test_home_page_renders(tmp_path, monkeypatch):
    monkeypatch.setattr(web, "PROGRESS_FILE", str(tmp_path / "progress.json"))
    environ = {}
    setup_testing_defaults(environ)
    environ["PATH_INFO"] = "/"
    result = web.application(environ, start_response)
    body = b"".join(result).decode("utf-8")
    assert "Guess the Country" in body
