# FlexFlags

FlexFlags is a simple command line tool for learning country flags. It presents
flags one at a time and adapts to your progress, showing you the flags you miss
more frequently.

## Usage

```bash
python -m flexflags
```

Your progress is stored in `progress.json`. Flags that you answer incorrectly
are presented more often while those you get right will appear less frequently.

## Tests

Run the unit tests with:

```bash
pytest
```
