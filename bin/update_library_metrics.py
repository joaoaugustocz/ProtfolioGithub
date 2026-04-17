#!/usr/bin/env python3

from __future__ import annotations

import json
import os
import pathlib
import urllib.error
import urllib.request
from datetime import datetime, timezone
from typing import Any

import yaml


ROOT = pathlib.Path(__file__).resolve().parents[1]
LIBRARIES_PATH = ROOT / "_data" / "libraries.yml"
OUTPUT_PATH = ROOT / "_data" / "library_metrics.yml"
API_BASE = "https://api.github.com"


def load_yaml(path: pathlib.Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return yaml.safe_load(handle) or {}


def github_request(path: str, token: str | None = None) -> dict[str, Any] | list[Any]:
    request = urllib.request.Request(
        f"{API_BASE}{path}",
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "al-folio-library-metrics",
            **(
                {"Authorization": f"Bearer {token}"}
                if token
                else {}
            ),
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_repo(owner: str, repo: str, token: str | None) -> dict[str, Any]:
    return github_request(f"/repos/{owner}/{repo}", token if token else None)  # type: ignore[return-value]


def fetch_traffic(owner: str, repo: str, endpoint: str, token: str | None) -> tuple[dict[str, Any] | None, str | None]:
    if not token:
        return None, "token nao configurado"

    try:
        payload = github_request(f"/repos/{owner}/{repo}/traffic/{endpoint}", token)
        return payload, None  # type: ignore[return-value]
    except urllib.error.HTTPError as error:
        try:
            details = json.loads(error.read().decode("utf-8"))
            message = details.get("message")
        except Exception:
            message = None

        if error.code == 403:
            return None, message or "acesso negado ao trafego"
        if error.code == 404:
            return None, message or "endpoint indisponivel"
        return None, message or f"erro HTTP {error.code}"


def build_item(owner: str, config_item: dict[str, Any], token: str | None) -> dict[str, Any]:
    repo_name = config_item["repo"]
    repo_data = fetch_repo(owner, repo_name, token)
    views_data, views_error = fetch_traffic(owner, repo_name, "views", token)
    clones_data, clones_error = fetch_traffic(owner, repo_name, "clones", token)

    traffic_available = views_data is not None and clones_data is not None
    traffic_reason = None
    if not traffic_available:
        traffic_reason = views_error or clones_error or "snapshot nao disponivel"

    return {
        **config_item,
        "repo": repo_name,
        "full_name": repo_data["full_name"],
        "url": repo_data["html_url"],
        "description": repo_data.get("description"),
        "stars": repo_data.get("stargazers_count", 0),
        "forks": repo_data.get("forks_count", 0),
        "primary_language": repo_data.get("language"),
        "pushed_at": repo_data.get("pushed_at"),
        "updated_at": repo_data.get("updated_at"),
        "traffic": {
            "available": traffic_available,
            "reason": traffic_reason,
            "views_count": (views_data or {}).get("count", 0),
            "views_uniques": (views_data or {}).get("uniques", 0),
            "clones_count": (clones_data or {}).get("count", 0),
            "clones_uniques": (clones_data or {}).get("uniques", 0),
        },
    }


def main() -> None:
    config = load_yaml(LIBRARIES_PATH)
    owner = config.get("owner")
    token = os.getenv("GH_TRAFFIC_TOKEN") or os.getenv("GITHUB_TOKEN") or os.getenv("GH_TOKEN")

    if not owner:
        raise SystemExit("owner ausente em _data/libraries.yml")

    items = [build_item(owner, item, token) for item in config.get("items", [])]
    output = {
        "generated_at": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "traffic_window_days": config.get("traffic_window_days", 14),
        "items": items,
    }

    with OUTPUT_PATH.open("w", encoding="utf-8") as handle:
        yaml.safe_dump(output, handle, sort_keys=False, allow_unicode=True)


if __name__ == "__main__":
    main()
