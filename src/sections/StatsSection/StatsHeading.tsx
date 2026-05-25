import styles from "./StatsSection.module.css";

interface Props {
  heading: string;
  subHeading: string;
}

export default function StatsHeading({ heading, subHeading }: Props) {
  return (
    <div className={styles.stats__row}>
      <span className={styles.stats__rowLabel} data-reveal="label"></span>
      <div className={styles.stats__heading}>
        <h2 className={styles.stats__headingPrimary} data-reveal="heading">
          {heading}
        </h2>
        <h2 className={styles.stats__headingSecondary} data-reveal="heading">
          {subHeading}
        </h2>
      </div>
    </div>
  );
}
