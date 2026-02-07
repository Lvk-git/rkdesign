'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteData } from '@/lib/data';
import styles from './portfolio.module.css';

// Dynamically import CircularGallery to avoid SSR issues with WebGL
const CircularGallery = dynamic(() => import('@/components/ui/CircularGallery'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
    )
});

export default function PortfolioPage() {
    const { portfolio } = siteData;
    const [activeCategory, setActiveCategory] = useState('Elevation');
    const [isVisible, setIsVisible] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);
    const galleryAppRef = useRef<any>(null);

    const filteredProjects = portfolio.projects.filter(p => p.category === activeCategory);

    // Gallery items organized by category
    const galleryData: Record<string, { image: string; text: string }[]> = {
        'Elevation': [
            { image: '/assets/images/portfolio/elevation_modern.webp', text: 'Modern Elevation' },
            { image: '/assets/images/portfolio/elevation_classic.webp', text: 'Classic Design' },
            { image: '/assets/images/portfolio/elevation_commercial.webp', text: 'Commercial Space' },
        ],
        'Architecture': [
            { image: '/assets/images/portfolio/architecture_resort.webp', text: 'Luxury Resort' },
            { image: '/assets/images/portfolio/architecture_campus.webp', text: 'Campus Design' },
            { image: '/assets/images/portfolio/architecture_apartment.webp', text: 'Apartment Complex' },
        ],
        'Interior': [
            { image: '/assets/images/portfolio/interior_living.webp', text: 'Living Room' },
            { image: '/assets/images/portfolio/interior_lobby.webp', text: 'Hotel Lobby' },
            { image: '/assets/images/portfolio/interior_office.webp', text: 'Office Space' },
        ]
    };

    const handlePrevious = () => {
        if (galleryAppRef.current) {
            const width = galleryAppRef.current.medias?.[0]?.width || 0;
            galleryAppRef.current.scroll.target -= width;
        }
    };

    const handleNext = () => {
        if (galleryAppRef.current) {
            const width = galleryAppRef.current.medias?.[0]?.width || 0;
            galleryAppRef.current.scroll.target += width;
        }
    };

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

    const currentGalleryItems = galleryData[activeCategory];
    const showGallery = currentGalleryItems;

    // Filter out 'All' from categories
    const filteredCategories = portfolio.categories.filter(cat => cat !== 'All');

    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <span className={styles.preTitle}>Our Work</span>
                    <h1 className={styles.heroTitle}>Portfolio</h1>
                    <p className={styles.heroDescription}>
                        Explore our collection of architectural masterpieces in an immersive 3D experience.
                    </p>
                </div>
                <div className={styles.heroPattern}></div>
            </section>

            {/* Filter Section with Integrated Gallery */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filterTabs}>
                        {filteredCategories.map((category) => (
                            <button
                                key={category}
                                className={`${styles.filterTab} ${activeCategory === category ? styles.active : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Circular Gallery - Only show for specific categories */}
                    {showGallery && (
                        <div className={styles.galleryWrapper}>
                            <h2 className={styles.galleryTitle}>
                                {activeCategory} Gallery
                            </h2>
                            <p className={styles.gallerySubtitle}>
                                Drag, scroll, or use arrow buttons to explore
                            </p>
                            <div className={styles.galleryWithControls}>
                                <button
                                    className={`${styles.navButton} ${styles.navButtonLeft}`}
                                    onClick={handlePrevious}
                                    aria-label="Previous image"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <div className={styles.galleryContainer}>
                                    <CircularGallery
                                        key={activeCategory}
                                        items={currentGalleryItems}
                                        bend={1.8}
                                        textColor="#1a1a2e"
                                        borderRadius={0.05}
                                        scrollSpeed={2}
                                        scrollEase={0.08}
                                        onAppReady={(app) => { galleryAppRef.current = app; }}
                                    />
                                </div>
                                <button
                                    className={`${styles.navButton} ${styles.navButtonRight}`}
                                    onClick={handleNext}
                                    aria-label="Next image"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    )}
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
