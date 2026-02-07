'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { siteData } from '@/lib/data';
import styles from './contact.module.css';
import StaggeredText from '@/components/ui/StaggeredText';
import FluidBackground from '@/components/ui/FluidBackground';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export default function ContactPage() {
    const { companyInfo } = siteData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <main className="overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className={`${styles.hero} relative`}>
                <FluidBackground />
                <div className={styles.heroContent}>
                    <StaggeredText
                        text="Get in Touch"
                        className={styles.preTitle}
                        el="span"
                        delay={0.1}
                    />
                    <div className={styles.heroTitleWrapper}>
                        <StaggeredText
                            text="Contact Us"
                            className={styles.heroTitle}
                            el="h1"
                            delay={0.2}
                        />
                    </div>
                    <motion.p
                        className={styles.heroDescription}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                    >
                        Have a project in mind? We&apos;d love to hear from you. Send us a message
                        and we&apos;ll respond as soon as possible.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.contactGrid}>
                        {/* Contact Form */}
                        <motion.div
                            className={styles.formWrapper}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h2 className={styles.formTitle}>Send us a Message</h2>

                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className={styles.successMessage}
                                    >
                                        <div className={styles.successIcon}>✓</div>
                                        <h3>Thank You!</h3>
                                        <p>Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                                        <button
                                            className={styles.resetButton}
                                            onClick={() => setIsSubmitted(false)}
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className={styles.form}
                                        initial="hidden"
                                        animate="visible"
                                        variants={staggerContainer}
                                    >
                                        <div className={styles.formRow}>
                                            <motion.div className={styles.formGroup} variants={fadeInUp}>
                                                <label htmlFor="name" className={styles.label}>Full Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={styles.input}
                                                    placeholder="John Doe"
                                                />
                                            </motion.div>
                                            <motion.div className={styles.formGroup} variants={fadeInUp}>
                                                <label htmlFor="email" className={styles.label}>Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className={styles.input}
                                                    placeholder="john@example.com"
                                                />
                                            </motion.div>
                                        </div>

                                        <div className={styles.formRow}>
                                            <motion.div className={styles.formGroup} variants={fadeInUp}>
                                                <label htmlFor="phone" className={styles.label}>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="+91 98765 43210"
                                                />
                                            </motion.div>
                                            <motion.div className={styles.formGroup} variants={fadeInUp}>
                                                <label htmlFor="subject" className={styles.label}>Subject *</label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className={styles.select}
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="architecture">Architecture Project</option>
                                                    <option value="interior">Interior Design</option>
                                                    <option value="renovation">Renovation</option>
                                                    <option value="vastu">Vastu Consultation</option>
                                                    <option value="construction">Construction</option>
                                                    <option value="other">Other Inquiry</option>
                                                </select>
                                            </motion.div>
                                        </div>

                                        <motion.div className={styles.formGroup} variants={fadeInUp}>
                                            <label htmlFor="message" className={styles.label}>Message *</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className={styles.textarea}
                                                placeholder="Tell us about your project..."
                                            />
                                        </motion.div>

                                        <motion.button
                                            type="submit"
                                            className={styles.submitButton}
                                            disabled={isSubmitting}
                                            variants={fadeInUp}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className={styles.spinner}></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                                    </svg>
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className={styles.infoWrapper}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <div className={styles.infoCard}>
                                <h3 className={styles.infoTitle}>Contact Information</h3>
                                <p className={styles.infoDescription}>
                                    Reach out to us directly or visit our studio. We&apos;re here to help
                                    bring your architectural vision to life.
                                </p>

                                <div className={styles.infoList}>
                                    {[
                                        {
                                            icon: (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                            ),
                                            title: "Visit Us",
                                            content: companyInfo.contact.address,
                                            link: null
                                        },
                                        {
                                            icon: (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                            ),
                                            title: "Call Us",
                                            content: companyInfo.contact.phone,
                                            link: `tel:${companyInfo.contact.phone}`
                                        },
                                        {
                                            icon: (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                    <polyline points="22,6 12,13 2,6" />
                                                </svg>
                                            ),
                                            title: "Email Us",
                                            content: companyInfo.contact.email,
                                            link: `mailto:${companyInfo.contact.email}`
                                        },
                                        {
                                            icon: (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                            ),
                                            title: "Office Hours",
                                            content: "Mon - Sat: 9:00 AM - 7:00 PM",
                                            link: null
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className={styles.infoItem}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className={styles.infoIcon}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4>{item.title}</h4>
                                                {item.link ? (
                                                    <a href={item.link}>{item.content}</a>
                                                ) : (
                                                    <p>{item.content}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className={styles.socialSection}>
                                    <h4>Follow Us</h4>
                                    <div className={styles.socialLinks}>
                                        <motion.a
                                            href={companyInfo.social.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                            whileHover={{ y: -5, backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a
                                            href={companyInfo.social.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Facebook"
                                            whileHover={{ y: -5, backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a
                                            href={companyInfo.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            whileHover={{ y: -5, backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </motion.a>
                                        <motion.a
                                            href={companyInfo.social.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Twitter"
                                            whileHover={{ y: -5, backgroundColor: "var(--color-accent)", color: "var(--color-primary)" }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className={styles.mapSection}>
                <div className={styles.mapPlaceholder}>
                    <div className={styles.mapContent}>
                        <span className={styles.mapIcon}>📍</span>
                        <h3>Find Us on the Map</h3>
                        <p>{companyInfo.contact.address}</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
