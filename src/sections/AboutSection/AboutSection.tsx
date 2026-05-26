import { useRef } from "react";
import { useAboutDevourEffect } from "../../animations/useAboutDevourEffect";
import LiquidButton from "@/components/LiquidButton/LiquidButton";
import styles from "./AboutSection.module.css";
import { useTextReveal } from "@/animations/useTextReveal";
import { useSanityQuery } from "@/lib/useSanity";
import { ABOUT_QUERY } from "@/lib/queries";

interface AboutData {
  statement: string;
  resume: string;
  experience: {
    company: string;
    location: string;
    period: string;
    role: string;
    brief: string;
  }[];
}

export default function AboutSection() {
  const { data, loading } = useSanityQuery<AboutData>(ABOUT_QUERY);
  const aboutRef = useRef<HTMLElement>(null!);
  useAboutDevourEffect(aboutRef);
  useTextReveal(aboutRef, [data]);

  return (
    <section className={styles.about} data-section="about" ref={aboutRef}>
      {loading ? null : (
        <div className={styles.about__inner}>
          <div className={styles.about__left}>
            <span className={styles.about__expLabel} data-reveal="label">
              — Experience
            </span>
            <div className={styles.about__expList}>
              {data?.experience.map((item) => (
                <div key={item.company} className={styles.about__expRow}>
                  <div className={styles.about__expMeta}>
                    <span className={styles.about__expCompany} data-reveal="sub">
                      {item.company}, {item.location}
                    </span>
                    <span className={styles.about__expPeriod} data-reveal="sub">
                      {item.period}
                    </span>
                    <span className={styles.about__expRole} data-reveal="body">
                      {item.role}
                    </span>
                  </div>
                  <p className={styles.about__expBrief} data-reveal="body">
                    {item.brief}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.about__right}>
            <p className={styles.about__statement} data-reveal="body">
              {data?.statement}
            </p>
            <div data-reveal="action" className={styles.about__action}>
              <LiquidButton href={data?.resume ?? "#"} label="View Resume" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const EXPERIENCE = [
  {
    company: "Aiven",
    location: "Remote",
    period: "2023 to Now — 2 Years",
    role: "Full-Stack Developer",
    brief:
      "Building and maintaining cloud data platform console. Working across the full stack with React, Java and Spring Boot microservices.",
  },
  {
    company: "Freelance",
    location: "Dhaka",
    period: "2021 to 2023 — 2 Years",
    role: "UI/UX Designer & Developer",
    brief:
      "Designed and developed end-to-end digital products for clients across fintech, e-commerce and lifestyle brands.",
  },
  {
    company: "Agency X",
    location: "Dhaka",
    period: "2020 to 2021 — 1 Year",
    role: "Junior Frontend Developer",
    brief:
      "Built responsive interfaces and landing pages. Collaborated closely with designers to deliver pixel-perfect implementations.",
  },
];
