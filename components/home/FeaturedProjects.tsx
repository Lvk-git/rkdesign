'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/lib/data';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
    const projects = siteData.portfolio.projects.slice(0, 6);
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
                    <div className={styles.headerText}>
                        <span className={styles.preTitle}>Our Portfolio</span>
                        <h2 className={styles.title}>Featured Projects</h2>
                        <p className={styles.subtitle}>
                            Discover our latest architectural masterpieces
                        </p>
                    </div>
                    <Link href="/portfolio" className={styles.viewAllLink}>
                        View All Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {projects.map((project, index) => (
                        <Link
                            href="/portfolio"
                            key={project.id}
                            className={styles.card}
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
                                    <span className={styles.viewProject}>View Project</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.location}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {project.location}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
