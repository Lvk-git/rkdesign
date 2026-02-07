'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteData } from '@/lib/data';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
    const { portfolio } = siteData;
    const [activeCategory, setActiveCategory] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredProjects = activeCategory === 'All'
        ? portfolio.projects
        : portfolio.projects.filter(p => p.category === activeCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (gridRef.current) {
            observer.observe(gridRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Reset animation when filter changes
    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, [activeCategory]);

    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.preTitle}>Our Work</span>
                    <h1 className={styles.heroTitle}>Portfolio</h1>
                    <p className={styles.heroDescription}>
                        Explore our collection of architectural masterpieces, from stunning
                        elevations to exquisite interiors.
                    </p>
                </div>
                <div className={styles.heroPattern}></div>
            </section>

            {/* Filter Section */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filterTabs}>
                        {portfolio.categories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterTab} ${activeCategory === category ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className={styles.portfolioSection}>
                <div className={styles.container}>
                    <div
                        ref={gridRef}
                        className={`${styles.grid} ${isVisible ? styles.visible : ''}`}
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={styles.projectCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={styles.image}
                                        unoptimized
                                    />
                                    <div className={styles.overlay}>
                                        <div className={styles.overlayContent}>
                                            <span className={styles.projectCategory}>{project.category}</span>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            <div className={styles.projectMeta}>
                                                <span className={styles.location}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                        <circle cx="12" cy="10" r="3" />
                                                    </svg>
                                                    {project.location}
                                                </span>
                                                <span className={styles.year}>{project.year}</span>
                                            </div>
                                            <p className={styles.client}>Client: {project.client}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
                    <p className={styles.ctaDescription}>
                        Let us help you bring your architectural vision to life. Contact us
                        to discuss how we can collaborate on your next project.
                    </p>
                    <a href="/contact" className={styles.ctaButton}>
                        Start Your Project
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
