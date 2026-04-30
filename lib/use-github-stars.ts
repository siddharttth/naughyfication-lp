"use client";

import { useEffect, useState } from "react";

const REPO = "siddharttth/naughyfication";

export function useGitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((r) => r.json())
      .then((d) => setStars(d.stargazers_count ?? 0))
      .catch(() => setStars(0));
  }, []);

  return stars;
}
