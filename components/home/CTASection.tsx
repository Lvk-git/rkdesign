'use client';

import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Ready to Build Your <span className={styles.accent}>Vision?</span>
                    </h2>
                    <p className={styles.description}>
                        Let&apos;s collaborate to create something extraordinary. Whether you&apos;re planning
                        a new build, renovation, or interior redesign, we&apos;re here to bring your
                        architectural dreams to life.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            Start Your Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/portfolio" className={styles.secondaryBtn}>
                            View Our Work
                        </Link>
                    </div>
                </div>
                <div className={styles.decorativeShape}></div>
            </div>
        </section>
    );
}
