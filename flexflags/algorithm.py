"""Algorithms for choosing which flag to study next."""

from __future__ import annotations

import random
from typing import Dict

from .data import FLAGS


Stats = Dict[str, Dict[str, int]]


def compute_weights(progress: Stats) -> Dict[str, float]:
    """Return selection weight for each flag based on progress.

    Flags with more wrong answers get higher weights, making them more
    likely to be selected again. Correct answers reduce the weight
    slightly so well‑known flags appear less often.
    """

    weights: Dict[str, float] = {}
    for country in FLAGS:
        stats = progress.get(country, {"correct": 0, "wrong": 0})
        weight = 1 + stats["wrong"] - 0.5 * stats["correct"]
        if weight < 1:
            weight = 1
        weights[country] = weight
    return weights


def choose_next_flag(progress: Stats) -> str:
    """Randomly choose the next flag using weighted probability."""

    weights = compute_weights(progress)
    countries = list(weights.keys())
    weight_values = list(weights.values())
    return random.choices(countries, weights=weight_values, k=1)[0]
