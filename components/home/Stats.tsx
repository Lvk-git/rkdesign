'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Stats.module.css';

interface StatItem {
    number: string;
    label: string;
}

interface StatsProps {
    stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={styles.statItem}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <span className={styles.number}>{stat.number}</span>
                            <span className={styles.label}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
