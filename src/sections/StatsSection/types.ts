export interface StatCard {
  icon: { asset: { url: string } };
  value: string;
  label: string;
  subLabel: string;
}

export interface StatsData {
  heading: string;
  subHeading: string;
  statCards: StatCard[];
  commitsFrom: string;
  commitsTo: string;
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
  weekday: number;
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}
