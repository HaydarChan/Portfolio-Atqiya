'use client'
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import Image from "next/image";
import NotFound from "@/assets/notfound.jpg"
import { motion } from 'framer-motion';
import Link from "next/link";

export default function NotFoundPage() {
    const containerVariants = {
        hidden: { opcaity: 0 },
        visible: {
            opcaity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
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
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="h-screen w-full flex flex-col items-center justify-center px-4 gap-y-8">
            <motion.div variants={profileVariants} className="h-full w-full flex flex-col items-center justify-center px-4 gap-y-8">
                <Image src={NotFound} alt="Not Found Image" className="w-[175px] h-[175px] rounded-full" />
                <div className="flex items-center flex-col w-full gap-y-2 text-center">
                    <h1 className="text-[32px] font-caveat">Sorry!</h1>
                    <p className="text-xl text-gray-400 tracking-[-0.04em] font-sans">I can't find that page. Let's go back home, shall we?</p>
                </div>
                <Link href={"/"}>
                    <Button className="cursor-pointer rounded-full font-sans">
                        <ArrowLeft /> Go Back Home
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    )
}