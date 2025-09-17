'use client'
import AboutMe from "@/assets/About Me.png"
import { Instagram, Linkedin, ExternalLink, ArrowLeft, Twitter } from 'lucide-react'
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

const WorkExperiences = [
    { id: 1, position: "UI/UX Designer Intern", company: "Datare", year: 2023 },
    { id: 2, position: "Frontend Developer Intern", company: "Purple Foxes Italy", year: 2024 },
    { id: 3, position: "Software Engineering Laboratory Assistant", company: "School of Electrical Engineering and Informatics ITB", year: 2024 },
    { id: 4, position: "Frontend Developer Intern", company: "Sinergi Merah Putih", year: 2025 },
    { id: 5, position: "Lead Product Design", company: "Inkubator IT", year: 2025 },
]

const Certifications = [
    { id: 1, certification: "Google UX Design Specialization", issuer: "Google", url: "https://www.coursera.org/account/accomplishments/specialization/LJ0VBWWO1K1R" },
    { id: 2, certification: "Software Engineering Academy", issuer: "COMPFEST 16", url: "https://asset.compfest.id/certificate/cf-2024-b44224a4-3ced-46d8-85ce-a8d2985086fc/cf-2024-b44224a4-3ced-46d8-85ce-a8d2985086fc.pdf" }
]

export default function AboutMePage() {
    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            }
        }
    }

    const profileVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            scale: 0.4
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    }

    const sectionContainer = {
        hidden: {},
        visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.05 }
        }
    }

    const riseItem = {
        hidden: { opacity: 0, y: 18 },
        visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // easeOutQuint-ish
        }
    }

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className='text-[#1C1C1C] bg-white w-full h-full flex flex-col items-center gap-y-[40px] py-[100px] lg:py-[40px] px-4 relative'>
            <button 
                onClick={() => router.push('/')}
                className="fixed top-4 sm:top-8 left-4 sm:left-8 flex items-center gap-x-[12px] hover:gap-x-[24px] transition-all rounded-full font-medium px-[16px] sm:px-[24px] py-[10px] sm:py-[12px] cursor-pointer rounded-full bg-gray-100 text-[#1c1c1c] text-[16px] sm:text-[20px] z-10"
            >
                <ArrowLeft size={20} className='text-gray-500' />
                <span className='text-[16px] font-medium text-gray-600'>Back to Home</span>
            </button>
            <motion.div variants={profileVariants} className="w-full flex flex-col items-center max-w-3xl gap-8 px-4">
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.3 }
                    }}
                >
                    <Image src={AboutMe} alt="My Photo" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" />
                </motion.div>
                <p className="text-base sm:text-lg leading-relaxed text-gray-500 text-center tracking-[-0.04em] px-2 sm:px-0">
                    <span className="font-caveat text-xl">Hi, </span> 
                    I'm Atqiya Haydar! I'm a final-year Computer Science student at ITB (one of Indonesia's top 3 universities). 
                    I'm passionate about creating beautiful, user-centered digital experiences through product design and front-end engineering. 
                    Beyond that, I’m also deeply interested in <span className="font-semibold text-gray-700">automation testing & QA</span>, 
                    exploring the future of <span className="font-semibold text-gray-700">blockchain & Web3</span>, 
                    and bringing ideas to life through <span className="font-semibold text-gray-700">motion design</span> and <span className="font-semibold text-gray-700">branding</span>.
                </p>
                <div className="flex items-center gap-6">
                    <a 
                        href="https://www.instagram.com/uxqiy/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                    >
                        <Instagram size={24} />
                    </a>
                    <a 
                        href="https://x.com/uxqiy_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                    >
                        <Twitter size={24} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/atqiyahaydar/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-110 transition-all duration-200"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>  
            </motion.div> 
            <motion.div 
                variants={sectionContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }} 
                className="w-full flex flex-col items-center px-4 gap-8 max-w-3xl"
            >
                <motion.h3 variants={riseItem} className="text-[#1c1c1c] font-medium text-xl [text-shadow:0_0_24px_rgba(0,0,0,0.24)] tracking-[-0.04em]">
                    Work Experiences
                </motion.h3>
                <motion.div variants={sectionContainer} className="flex flex-col items-center gap-y-4 w-full">
                    {WorkExperiences.sort((a, b) => b.year - a.year).map((experience) => (
                        <motion.div 
                            key={experience.id}
                            variants={riseItem}
                            className="w-full flex justify-between items-center py-2 border-b border-gray-100"
                        >
                            <div className="flex flex-col">
                                <h4 className="text-base sm:text-lg text-gray-800 font-medium tracking-[-0.04em]">
                                    {experience.position}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    {experience.company}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="text-gray-500 text-xs sm:text-sm font-medium">
                                    {experience.year}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>   
            <motion.div  
                variants={sectionContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="w-full flex flex-col items-center px-4 gap-8 max-w-3xl"
            >
                <motion.h3 variants={riseItem} className="text-[#1c1c1c] font-medium text-xl [text-shadow:0_0_24px_rgba(0,0,0,0.24)] tracking-[-0.04em]">Certifications</motion.h3>
                <motion.div variants={sectionContainer} className="flex flex-col items-center gap-y-4 w-full">
                    {Certifications.map((cert) => (
                        <motion.div 
                            key={cert.id}
                            variants={riseItem}
                            className="w-full flex justify-between items-center py-2 border-b border-gray-100"
                        >
                            <div className="flex flex-col">
                                <h4 className="text-base sm:text-lg text-gray-800 font-medium tracking-[-0.04em]">
                                    {cert.certification}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    {cert.issuer}
                                </p>
                            </div>
                            <a 
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gray-700 p-2"
                                aria-label={`View credential for ${cert.certification}`}
                                title="View credential"
                            >
                                <ExternalLink size={18} />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}