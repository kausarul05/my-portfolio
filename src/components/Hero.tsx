"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Hero = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const titles = [
        "Web Developer",
        "MERN Stack Developer",
        "Front End Developer",
        "React Developer"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const techIconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 1,
            transition: { delay: 1.5 + (custom * 0.1), type: "spring", stiffness: 260, damping: 20 }
        })
    };

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                ></motion.div>

                {/* Floating shapes in the background */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
                <motion.div
                    className="flex flex-col md:flex-row items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="md:w-1/2 md:pr-12">
                        <motion.span
                            className="mb-4 inline-block px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                            variants={itemVariants}
                        >
                            Professional Developer
                        </motion.span>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
                            variants={itemVariants}
                        >
                            Hi, I am a
                        </motion.h1>

                        <motion.div
                            className="h-16 mb-4"
                            variants={itemVariants}
                        >
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={currentTitleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400"
                                >
                                    {titles[currentTitleIndex]}
                                </motion.h2>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p
                            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                            variants={itemVariants}
                        >
                            I craft responsive, user-friendly applications using modern web technologies. Let&apos;s turn your vision into reality.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/#projects"
                                    className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-8 transition-colors shadow-sm"
                                >
                                    View Projects
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/#contact"
                                    className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-3 md:text-lg md:px-8 transition-colors shadow-sm"
                                >
                                    Contact Me
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            <motion.div
                                className="absolute inset-0 rounded-full bg-blue-600/10"
                                animate={{
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            ></motion.div>

                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/myself.png"
                                    alt="Profile"
                                    fill
                                    className="object-cover rounded-full"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <motion.h2
                        className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        Tech Stack
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {/* MongoDB */}
                        <motion.div
                            className="flex flex-col items-center group"
                            custom={0}
                            variants={techIconVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg transition-transform group-hover:scale-110">M</div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">MongoDB</span>
                        </motion.div>

                        {/* Express.js */}
                        <motion.div
                            className="flex flex-col items-center group"
                            custom={1}
                            variants={techIconVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg transition-transform group-hover:scale-110">E</div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Express</span>
                        </motion.div>

                        {/* React */}
                        <motion.div
                            className="flex flex-col items-center group"
                            custom={2}
                            variants={techIconVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg transition-transform group-hover:scale-110">R</div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">React</span>
                        </motion.div>

                        {/* Node.js */}
                        <motion.div
                            className="flex flex-col items-center group"
                            custom={3}
                            variants={techIconVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg transition-transform group-hover:scale-110">N</div>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Node.js</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}; 