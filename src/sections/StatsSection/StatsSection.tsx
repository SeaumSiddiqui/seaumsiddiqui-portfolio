import { useRef } from "react";
import { useSanityQuery } from "@/lib/useSanity";
import { STATS_QUERY } from "@/lib/queries";
import { useTextReveal } from "@/animations/useTextReveal";
import { useGitHubContributions } from "./useGitHubContributions";
import StatsHeading from "./StatsHeading";
import StatsCards from "./StatsCards";
import CommitsGraph from "./CommitsGraph";
import type { StatsData } from "./types";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { data, loading } = useSanityQuery<StatsData>(STATS_QUERY);

  const { weeks, loading: githubLoading } = useGitHubContributions(
    data?.commitsFrom,
    data?.commitsTo,
  );

  useTextReveal(sectionRef, [data]);

  return (
    <section ref={sectionRef} className={styles.stats} data-section="stats">
      {loading ? null : (
        <>
          <StatsHeading heading={data?.heading ?? ""} subHeading={data?.subHeading ?? ""} />
          <StatsCards cards={data?.statCards ?? []} />
          <CommitsGraph weeks={weeks} loading={githubLoading} />
        </>
      )}
    </section>
  );
}
