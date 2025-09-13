'use client'
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import Mock2 from "@/assets/mockup/2.png";
import Mock3 from "@/assets/mockup/3.png";
import Mock4 from "@/assets/mockup/4.png";
import Mock5 from "@/assets/mockup/5.png";
import Mock6 from "@/assets/mockup/6.png";
import Mock7 from "@/assets/mockup/7.png";
import SplitText from '@/components/SplitText';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PortfolioPage() {
    const router = useRouter();
    const [activeProject, setActiveProject] = useState(null);

    const projects = useMemo(() => ([
        {
            id: 1,
            name: "Hentii",
            thumbnail: Mock2,
            images: [Mock2, Mock3, Mock4],
            description: "Mobile Application to Accompany Users in the Process of Quitting Smoking Gradually, Healthily, and Sustainably."
        },
        {
            id: 2,
            name: "Obatku",
            thumbnail: Mock3,
            images: [Mock3, Mock5, Mock6],
            description: "An application that makes it easier for you to manage your medication and provides better self-medication guidance."
        },
        {
            id: 3,
            name: "EcoTrail",
            thumbnail: Mock4,
            images: [Mock4, Mock2, Mock7],
            description: "Green Transportation App and Carbon Emission Tracker"
        },
        {
            id: 4,
            name: "Ainstein",
            thumbnail: Mock5,
            images: [Mock5, Mock6, Mock3],
            description: "An app that can turn any topic into an intelligent learning experience with AI-generated lessons, quizzes, and videos.."
        },
        {
            id: 5,
            name: "Ainstein",
            thumbnail: Mock6,
            images: [Mock6, Mock2, Mock4],
            description: "Spotify clone app Find music that fits your mood, every time."
        },
        {
            id: 6,
            name: "Trackure",
            thumbnail: Mock7,
            images: [Mock7, Mock5, Mock2],
            description: "An application that can Manage, Monitor, and Accelerate the Procurement of Goods & Services with a Transparent Tracking System that makes every process run efficiently."
        },
    ]), []);

    function GalleryParallax({ project, onClose }) {
        const containerRef = useRef(null);
        const { scrollYProgress } = useScroll({ container: containerRef });
        const ySlow = useTransform(scrollYProgress, [0, 1], [0, -40]);
        const yMedium = useTransform(scrollYProgress, [0, 1], [0, -80]);
        const yFast = useTransform(scrollYProgress, [0, 1], [0, -120]);

        return (
            <AnimatePresence>
                <motion.div
                    className="fixed inset-0 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/40"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center p-4"
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.98, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                    >
                        <div className="relative w-full max-w-5xl h-[70vh] rounded-2xl bg-white overflow-hidden">
                            <div ref={containerRef} className="w-full h-full overflow-y-auto">
                                <div className="p-6 flex items-start justify-between sticky top-0 bg-white/80 backdrop-blur-sm z-10 border-b gap-4">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#1c1c1c] truncate">{project.name}</h3>
                                        {project.description && (
                                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                                        )}
                                    </div>
                                    <button onClick={onClose} className="px-3 py-1.5 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-[#1c1c1c]">Close</button>
                                </div>
                                <div className="relative p-6 space-y-6">
                                    {project.images.map((src, idx) => {
                                        const y = idx % 3 === 0 ? ySlow : idx % 3 === 1 ? yMedium : yFast;
                                        return (
                                            <motion.div
                                                key={idx}
                                                style={{ y }}
                                                className="w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50"
                                            >
                                                <img src={src} alt={`preview-${idx}`} className="w-full h-[260px] object-cover" />
                                            </motion.div>
                                        )
                                    })}
                                    <div className="h-2" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    }

    return (
        <div className='text-[#1C1C1C] w-full h-full flex flex-col items-center gap-y-[40px] py-[100px] lg:py-[40px] px-4 relative'>
            <motion.button
                onClick={() => router.push('/')}
                className="fixed top-8 left-8 flex items-center gap-x-[12px] transition-all rounded-full font-medium px-[24px] py-[12px] cursor-pointer rounded-full bg-gray-100 text-[#1c1c1c] text-[20px] z-10"
                whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
            >
                <ArrowLeft size={20} className='text-gray-500' />
                <span className='text-[16px] font-medium text-gray-600'>Back to Home</span>
            </motion.button>
            <div className='text-center text-[#1c1c1c] flex flex-col items-center'>
                <SplitText
                    text="Projects I've Brought to Life"
                    className="text-[36px] font-bold tracking-[-0.04em] [text-shadow:0_0_24px_rgba(0,0,0,0.24)]"
                    delay={28}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
                <motion.p 
                    className='text-[20px] text-gray-400'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.2, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 60,
                      damping: 12
                    }}
                >Every project tells a story. Here are some highlights where design meets functionality</motion.p>
            </div>
            <motion.div 
                className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                initial={{ scale: 0.75, opacity: 0.75 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                {projects.map((project) => (
                    <motion.button
                        key={project.id}
                        onClick={() => setActiveProject(project)}
                        className="group text-left bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer"
                        whileHover={{ y: -4 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    >
                        <div className="relative">
                            <Image src={project.thumbnail} alt={project.name} className="w-full aspect-square object-cover" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="p-4">
                            <h3 className='text-[18px] font-medium tracking-[-0.02em] text-[#1c1c1c]'>{project.name}</h3>
                            {project.description && (
                                <p className='text-[14px] text-gray-500 line-clamp-2'>{project.description}</p>
                            )}
                        </div>
                    </motion.button>
                ))}
            </motion.div>

            <AnimatePresence>
                {activeProject && (
                    <GalleryParallax project={activeProject} onClose={() => setActiveProject(null)} />
                )}
            </AnimatePresence>
        </div>
    )
}