'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StaggeredTextProps {
    text: string;
    className?: string;
    once?: boolean;
    delay?: number;
    el?: any;
}

export default function StaggeredText({
    text,
    className = '',
    once = true,
    delay = 0,
    el: Wrapper = 'p'
}: StaggeredTextProps) {
    const textRef = useRef(null);
    const isInView = useInView(textRef, { amount: 0.5, once });

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    return (
        <Wrapper className={className}>
            <span className="sr-only">{text}</span>
            <motion.span
                ref={textRef}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ staggerChildren: 0.05, delayChildren: delay }}
                aria-hidden
            >
                {text.split(' ').map((word, i) => (
                    <span key={i} className="inline-block whitespace-pre">
                        {word.split('').map((char, j) => (
                            <motion.span
                                key={j}
                                className="inline-block"
                                variants={defaultAnimations}
                            >
                                {char}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
}
