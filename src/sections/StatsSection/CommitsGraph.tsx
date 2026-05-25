import type { ContributionWeek } from "./types";
import styles from "./StatsSection.module.css";

interface Props {
  weeks: ContributionWeek[];
  loading: boolean;
}

// helpers 

function getMonthLabels(weeks: ContributionWeek[]) {
  const labels: { label: string; colIndex: number }[] = [];
  weeks.forEach((week, i) => {
    const first = week.contributionDays[0];
    if (!first) return;
    const month = new Date(first.date).toLocaleString("default", { month: "short" });
    if (i === 0 || month !== labels[labels.length - 1]?.label) {
      labels.push({ label: month, colIndex: i });
    }
  });
  return labels;
}

function getYearLabels(weeks: ContributionWeek[]) {
  const labels: { label: string; colIndex: number }[] = [];
  weeks.forEach((week, i) => {
    const first = week.contributionDays[0];
    if (!first) return;
    const year = new Date(first.date).getFullYear().toString();
    if (i === 0 || year !== labels[labels.length - 1]?.label) {
      labels.push({ label: year, colIndex: i });
    }
  });
  return labels;
}

const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", ""];

// component 

export default function CommitsGraph({ weeks, loading }: Props) {
  const monthLabels = getMonthLabels(weeks);
  const yearLabels = getYearLabels(weeks);
  const colTemplate = `40px repeat(${weeks.length}, 1fr)`;

  const cellBase = styles.stats__graphCell;
  const cellActive = styles.stats__graphCellActive;

  return (
    <div className={styles.stats__row}>
      <span className={styles.stats__rowLabel} data-reveal="label">
        ./been there, did something
      </span>
      <div className={styles.stats__graph}>
        {loading ? (
          <span className={styles.stats__graphLoading}>Loading...</span>
        ) : (
          <div className={styles.stats__graphInner}>
            {/* year row */}
            <div className={styles.stats__graphYears} style={{ gridTemplateColumns: colTemplate }}>
              <span />
              {yearLabels.map(({ label, colIndex }) => (
                <span
                  key={label}
                  className={styles.stats__graphYear}
                  style={{ gridColumn: colIndex + 2 }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* month row */}
            <div className={styles.stats__graphMonths} style={{ gridTemplateColumns: colTemplate }}>
              <span />
              {monthLabels.map(({ label, colIndex }) => (
                <span
                  key={`${label}-${colIndex}`}
                  className={styles.stats__graphMonth}
                  style={{ gridColumn: colIndex + 2 }}
                >
                  {label}
                </span>
              ))}
            </div>

            {/* grid */}
            <div className={styles.stats__graphGrid} style={{ gridTemplateColumns: colTemplate }}>
              {/* day labels */}
              <div className={styles.stats__graphDays}>
                {DAY_LABELS.map((d, i) => (
                  <span key={i} className={styles.stats__graphDay}>
                    {d}
                  </span>
                ))}
              </div>

              {/* weeks */}
              {weeks.map((week, wi) => (
                <div key={wi} className={styles.stats__graphWeek}>
                  {Array.from({ length: 7 }).map((_, di) => {
                    const day = week.contributionDays.find((cd) => cd.weekday === di);
                    const active = (day?.contributionCount ?? 0) > 0;
                    return (
                      <div key={di} className={active ? `${cellBase} ${cellActive}` : cellBase} />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
