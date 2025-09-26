'use client'
import { ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function StudyCaseEcotrail() {
    const router = useRouter()
    
    return (
        <div className="w-full flex flex-col items-center justify-start">
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
            <div className="w-full max-w-5xl flex flex-col py-20 px-4">
                Page Study Case
            </div>
        </div>
    )
}