'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Stats from '@/components/home/Stats';
import { siteData } from '@/lib/data';
import styles from './about.module.css';

export default function AboutPage() {
    const { about, stats, companyInfo } = siteData;
    const [isVisible, setIsVisible] = useState(false);
    const valuesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (valuesRef.current) {
            observer.observe(valuesRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.preTitle}>Who We Are</span>
                    <h1 className={styles.heroTitle}>About {companyInfo.name}</h1>
                    <p className={styles.heroDescription}>
                        Transforming architectural visions into reality since 2010
                    </p>
                </div>
                <div className={styles.heroPattern}></div>
            </section>

            {/* Story Section */}
            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.storyGrid}>
                        <div className={styles.storyImageWrapper}>
                            <div className={styles.storyImage}>
                                <div className={styles.imagePlaceholder}>
                                    <span className={styles.placeholderIcon}>🏛️</span>
                                    <span className={styles.placeholderText}>Our Studio</span>
                                </div>
                            </div>
                            <div className={styles.experienceBadge}>
                                <span className={styles.badgeNumber}>12+</span>
                                <span className={styles.badgeText}>Years of Excellence</span>
                            </div>
                        </div>
                        <div className={styles.storyContent}>
                            <span className={styles.sectionLabel}>Our Story</span>
                            <h2 className={styles.sectionTitle}>
                                Building Dreams with Passion & Precision
                            </h2>
                            <p className={styles.storyText}>
                                {about.story}
                            </p>
                            <p className={styles.storyText}>
                                Over the years, we have completed more than 150 projects across India,
                                ranging from luxury homes to commercial complexes and institutional buildings.
                                Our team of dedicated architects, designers, and engineers work together
                                to create spaces that are not just functional, but truly inspiring.
                            </p>
                            <p className={styles.storyText}>
                                What sets us apart is our commitment to understanding each client&apos;s unique
                                vision and translating it into architectural excellence. We believe that
                                great design has the power to transform lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className={styles.missionSection}>
                <div className={styles.container}>
                    <div className={styles.missionGrid}>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>🎯</div>
                            <h3 className={styles.missionTitle}>Our Mission</h3>
                            <p className={styles.missionText}>{about.mission}</p>
                        </div>
                        <div className={styles.missionCard}>
                            <div className={styles.missionIcon}>🔭</div>
                            <h3 className={styles.missionTitle}>Our Vision</h3>
                            <p className={styles.missionText}>{about.vision}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <Stats stats={stats} />

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.valuesHeader}>
                        <span className={styles.sectionLabel}>What Drives Us</span>
                        <h2 className={styles.sectionTitle}>Our Core Values</h2>
                    </div>
                    <div
                        ref={valuesRef}
                        className={`${styles.valuesGrid} ${isVisible ? styles.visible : ''}`}
                    >
                        {about.values.map((value, index) => (
                            <div
                                key={index}
                                className={styles.valueCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Let&apos;s Work Together</h2>
                    <p className={styles.ctaDescription}>
                        Ready to start your project? We&apos;d love to hear from you and discuss
                        how we can bring your architectural vision to life.
                    </p>
                    <a href="/contact" className={styles.ctaButton}>
                        Get in Touch
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
