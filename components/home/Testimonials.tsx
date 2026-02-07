'use client';

import styles from './Testimonials.module.css';

const testimonials = [
    { id: 1, name: 'Rajesh Kumar', role: 'Homeowner', comment: 'RK Design transformed our dream home into reality. Their attention to detail is exceptional!' },
    { id: 2, name: 'Priya Sharma', role: 'Business Owner', comment: 'Outstanding work on our office interiors. Professional, creative, and timely delivery.' },
    { id: 3, name: 'Amit Patel', role: 'Developer', comment: 'Best architectural firm we have worked with. Their elevation designs are truly world-class.' },
    { id: 4, name: 'Sneha Reddy', role: 'Interior Designer', comment: 'Collaboration was seamless. They understood our vision perfectly and exceeded expectations.' },
    { id: 5, name: 'Vikram Singh', role: 'Hotel Owner', comment: 'The resort design they created is breathtaking. Our guests are constantly praising the aesthetics.' },
    { id: 6, name: 'Meera Iyer', role: 'Homeowner', comment: 'From concept to completion, every step was handled with expertise and care. Highly recommended!' },
    { id: 7, name: 'Arjun Verma', role: 'Architect', comment: 'Innovative designs with practical solutions. A benchmark for quality in the industry.' },
];

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.header}>
                <span className={styles.preTitle}>Client Success Stories</span>
                <h2 className={styles.title}>What Our Clients Say</h2>
            </div>

            <div className={styles.scrollContainer}>
                {/* Row 1 - Scrolls Right to Left */}
                <div className={styles.scrollRow}>
                    <div className={styles.track}>
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={`row1-${index}`} className={styles.testimonialCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.clientInfo}>
                                        <div className={styles.avatar}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className={styles.clientName}>{testimonial.name}</h4>
                                            <p className={styles.clientRole}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className={styles.comment}>{testimonial.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scrolls Right to Left (Faster) */}
                <div className={styles.scrollRow}>
                    <div className={`${styles.track} ${styles.trackFast}`}>
                        {[...testimonials.slice(2), ...testimonials.slice(2)].map((testimonial, index) => (
                            <div key={`row2-${index}`} className={styles.testimonialCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.clientInfo}>
                                        <div className={styles.avatar}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className={styles.clientName}>{testimonial.name}</h4>
                                            <p className={styles.clientRole}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className={styles.comment}>{testimonial.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3 - Scrolls Right to Left (Slower) */}
                <div className={styles.scrollRow}>
                    <div className={`${styles.track} ${styles.trackSlow}`}>
                        {[...testimonials.slice(4), ...testimonials.slice(0, 4), ...testimonials.slice(4), ...testimonials.slice(0, 4)].map((testimonial, index) => (
                            <div key={`row3-${index}`} className={styles.testimonialCard}>
                                <div className={styles.cardContent}>
                                    <div className={styles.clientInfo}>
                                        <div className={styles.avatar}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className={styles.clientName}>{testimonial.name}</h4>
                                            <p className={styles.clientRole}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className={styles.comment}>{testimonial.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
