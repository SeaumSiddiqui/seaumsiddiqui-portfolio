import type { StatCard } from "./types";
import styles from "./StatsSection.module.css";

interface Props {
  cards: StatCard[];
}

export default function StatsCards({ cards }: Props) {
  return (
    <div className={styles.stats__row}>
      <span className={styles.stats__rowLabel} data-reveal="label">
        — Stats
      </span>
      <div className={styles.stats__cards}>
        {cards.map((card, i) => (
          <div key={i} className={styles.stats__card}>
            {card.icon?.asset?.url && (
              <img
                src={card.icon.asset.url}
                className={styles.stats__cardIcon}
                alt=""
                aria-hidden="true"
              />
            )}
            <span className={styles.stats__cardValue} data-reveal="heading">
              {card.value}
            </span>
            <span className={styles.stats__cardLabel} data-reveal="body">
              {card.label + "_"}
            </span>
            <span className={styles.stats__cardSub} data-reveal="sub">
              {card.subLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
