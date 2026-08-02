import React, { useRef, useLayoutEffect, useState } from 'react';
import styles from './AboutExpSection.module.css';

export interface ExperienceData {
  id: string;
  index: string; 
  label: string;
  headline: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  reverse?: boolean; 
}

export interface ExpertiseCategory {
  categoryName: string;
  items: string[];
}

export interface ExpertiseData {
  resumeUrl?: string;
  skills?: ExpertiseCategory[];
  certifications?: ExpertiseCategory[];
}

interface AboutExpSectionProps {
  data: ExperienceData;
  expertise?: ExpertiseData;
  reverse?: boolean;
}

const AboutExpSection = React.memo(function AboutExpSection({ data, expertise, reverse = false }: AboutExpSectionProps) {
  const isReverse = reverse || data.reverse;
  const [openSection, setOpenSection] = React.useState<'skills' | 'certs' | null>(null);

  const toggleSection = (sec: 'skills' | 'certs') => {
    setOpenSection(prev => prev === sec ? null : sec);
  };

  const renderNarrative = () => (
    <div className={styles.narrative}>
      <div>
        <div className={styles.meta}>
          <span className={styles.index}>{data.index}</span>
          <span className={styles.slash}>/</span>
          <span className={styles.label}>{data.label}</span>
        </div>
        <h2 className={styles.headline}>{data.headline}</h2>
      </div>
      
      {expertise && (
        <div className={styles.skillsBlock}>
          {expertise.resumeUrl && (
            <a href={expertise.resumeUrl} target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
              VIEW RESUME <span className={styles.arrow}>→</span>
            </a>
          )}
          
          <div className={styles.accordionContainer}>
            {expertise.skills && expertise.skills.length > 0 && (
              <div className={styles.accordion}>
                <div className={styles.accordionHeader} onClick={() => toggleSection('skills')}>
                  <span>EXPERTISE AND SKILLS</span>
                  <span>{openSection === 'skills' ? '-' : '+'}</span>
                </div>
                <div className={`${styles.accordionContent} ${openSection === 'skills' ? styles.open : ''}`}>
                  <div className={styles.accordionInner}>
                    <div className={styles.gridContainer}>
                      {expertise.skills.map((cat, i) => (
                        <div key={i} className={styles.categoryCol}>
                          <h4 className={styles.categoryTitle}>{cat.categoryName}</h4>
                          <div className={styles.categoryItems}>
                            {(cat.items || []).map((item, j) => (
                              <span key={j} className={styles.item}>{item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {expertise.certifications && expertise.certifications.length > 0 && (
              <div className={styles.accordion}>
                <div className={styles.accordionHeader} onClick={() => toggleSection('certs')}>
                  <span>AWARDS AND CERTIFICATIONS</span>
                  <span>{openSection === 'certs' ? '-' : '+'}</span>
                </div>
                <div className={`${styles.accordionContent} ${openSection === 'certs' ? styles.open : ''}`}>
                  <div className={styles.accordionInner}>
                    <div className={styles.gridContainer}>
                      {expertise.certifications.map((cat, i) => (
                        <div key={i} className={styles.categoryCol}>
                          <h4 className={styles.categoryTitle}>{cat.categoryName}</h4>
                          <div className={styles.categoryItems}>
                            {(cat.items || []).map((item, j) => (
                              <span key={j} className={styles.item}>{item}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  const renderDetails = () => (
    <div className={styles.details}>
      <h3 className={styles.company}>{data.company}</h3>
      <div className={styles.role}>
        {data.period} <span className={styles.roleSlash}>/</span> {data.role}
      </div>
      <div className={styles.bullets}>
        {(data.bullets || []).map((bullet, i) => (
          <div key={i} className={styles.bulletItem}>
            <span className={styles.bulletSlash}>/</span>
            <p className={styles.bulletText}>{bullet}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.leftCol} ${isReverse ? styles.detailsCol : styles.narrativeCol}`}>
          {isReverse ? renderDetails() : renderNarrative()}
        </div>
        <div className={`${styles.rightCol} ${isReverse ? styles.narrativeCol : styles.detailsCol}`}>
          {isReverse ? renderNarrative() : renderDetails()}
        </div>
      </div>
    </section>
  );
});

export default AboutExpSection;
