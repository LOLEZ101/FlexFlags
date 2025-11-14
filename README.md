# FlexFlags

FlexFlags is a simple web app for learning country flags. It presents
flags one at a time and adapts to your progress, showing you the flags you miss
more frequently.

## Running

Start the built-in web server:

```bash
python -m flexflags.web
```

Then visit <http://localhost:8000> in your browser. Your progress is stored in
`progress.json`. Flags that you answer incorrectly are presented more often
while those you get right will appear less frequently.

## Tests

Run the unit tests with:

```bash
pytest
```
