'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { siteData } from '@/lib/data';
import styles from './ServicesPreview.module.css';

export default function ServicesPreview() {
    const { services } = siteData;
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>What We Do</span>
                    <h2 className={styles.title}>Our Services</h2>
                    <p className={styles.subtitle}>
                        Comprehensive architectural solutions from concept to completion
                    </p>
                </div>

                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {services.map((service, index) => (
                        <Link
                            href={`/services#${service.id}`}
                            key={service.id}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.cardIcon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.shortDescription}</p>
                            <span className={styles.cardLink}>
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <Link href="/services" className={styles.ctaButton}>
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
}
