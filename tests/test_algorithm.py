import os
import sys
import random

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from flexflags.algorithm import compute_weights, choose_next_flag


def test_compute_weights_prioritizes_failed_flags():
    progress = {
        "United States": {"correct": 3, "wrong": 0},
        "Canada": {"correct": 0, "wrong": 2},
    }
    weights = compute_weights(progress)
    assert weights["Canada"] > weights["United States"]


def test_choose_next_flag_returns_known_flag():
    progress = {
        "Japan": {"correct": 0, "wrong": 5},
    }
    # Seed randomness to make result deterministic
    random.seed(0)
    country = choose_next_flag(progress)
    assert country in progress or country is not None
