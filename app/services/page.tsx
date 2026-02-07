'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteData } from '@/lib/data';
import styles from './services.module.css';

function ServiceCard({ service, index }: { service: typeof siteData.services[0]; index: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const isEven = index % 2 === 0;

    return (
        <div
            ref={cardRef}
            id={service.id}
            className={`${styles.serviceCard} ${isEven ? styles.even : styles.odd} ${isVisible ? styles.visible : ''}`}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.image}
                    unoptimized
                />
                <div className={styles.imageOverlay}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <span className={styles.serviceNumber}>0{index + 1}</span>
                    <h2 className={styles.serviceTitle}>{service.title}</h2>
                    <p className={styles.serviceDescription}>{service.description}</p>
                    <ul className={styles.featuresList}>
                        {service.features.map((feature, i) => (
                            <li key={i} className={styles.featureItem}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6L9 17l-5-5" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    const { services } = siteData;

    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.preTitle}>What We Offer</span>
                    <h1 className={styles.heroTitle}>Our Services</h1>
                    <p className={styles.heroDescription}>
                        From initial concept to final construction, we provide comprehensive
                        architectural solutions tailored to your unique vision.
                    </p>
                </div>
                <div className={styles.heroPattern}></div>
            </section>

            {/* Services List */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
                    <p className={styles.ctaDescription}>
                        Every project is unique. Let&apos;s discuss how we can tailor our services
                        to meet your specific requirements.
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
