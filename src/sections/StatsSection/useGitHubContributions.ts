import { useState, useEffect } from "react";
import type { ContributionWeek } from "./types";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const USERNAME = "SeaumSiddiqui";

const GQL = `
  query($from: DateTime!, $to: DateTime!) {
    user(login: "${USERNAME}") {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }
`;

function splitIntoYearChunks(from: Date, to: Date): { from: Date; to: Date }[] {
  const chunks: { from: Date; to: Date }[] = [];
  let cursor = new Date(from);

  while (cursor < to) {
    const chunkEnd = new Date(cursor);
    chunkEnd.setFullYear(chunkEnd.getFullYear() + 1);
    chunks.push({
      from: new Date(cursor),
      to: chunkEnd > to ? new Date(to) : new Date(chunkEnd),
    });
    cursor = new Date(chunkEnd);
  }

  return chunks;
}

async function fetchChunk(token: string, from: Date, to: Date): Promise<ContributionWeek[]> {
  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: GQL,
      variables: {
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error("GitHub GraphQL errors:", json.errors);
    return [];
  }
  return json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? [];
}

export function useGitHubContributions(from: string | undefined, to: string | undefined) {
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!from || !to) return;

    const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
    if (!token) {
      console.warn("VITE_GITHUB_TOKEN not set");
      return;
    }

    setLoading(true);

    const chunks = splitIntoYearChunks(new Date(from), new Date(to));

    Promise.all(chunks.map((c) => fetchChunk(token, c.from, c.to)))
      .then((results) => setWeeks(results.flat()))
      .finally(() => setLoading(false));
  }, [from, to]);

  return { weeks, loading };
}
