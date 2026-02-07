'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteData } from '@/lib/data';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>RK</span>
                    <span className={styles.logoAccent}>Design</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {siteData.navigation.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                            >
                                {item.name}
                                <span className={styles.linkUnderline}></span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/contact" className={styles.ctaButton}>
                    Get a Quote
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                {/* Mobile Navigation */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <div className={styles.mobileMenuContent}>
                        <ul className={styles.mobileNavLinks}>
                            {siteData.navigation.map((item, index) => (
                                <li key={item.name} style={{ animationDelay: `${index * 0.1}s` }}>
                                    <Link
                                        href={item.href}
                                        className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/contact"
                            className={styles.mobileCta}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
