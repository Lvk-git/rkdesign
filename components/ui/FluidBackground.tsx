'use client';
import { motion } from 'framer-motion';

export default function FluidBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
            />

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-5%] w-[50vh] h-[50vh] rounded-full bg-orange-100/40 blur-[80px]"
            />

            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-10%] right-[-5%] w-[60vh] h-[60vh] rounded-full bg-blue-50/40 blur-[80px]"
            />

            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, 40, 0],
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute top-[40%] right-[30%] w-[40vh] h-[40vh] rounded-full bg-purple-50/30 blur-[60px]"
            />
        </div>
    );
}
