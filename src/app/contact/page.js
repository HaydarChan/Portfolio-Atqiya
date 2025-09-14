'use client'
import { ArrowLeft, Send, Mail, MessageSquare, User, CheckCircle, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SplitText from '@/components/SplitText';

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ 
                    type: 'success', 
                    message: 'Message sent successfully! I\'ll get back to you soon.' 
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus({ 
                    type: 'error', 
                    message: result.message || 'Failed to send message. Please try again.' 
                });
            }
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: 'Network error. Please check your connection and try again.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12,
                duration: 0.6
            }
        }
    };

    return (
        <div className='text-[#1C1C1C] w-full h-full flex flex-col items-center gap-y-[40px] py-[100px] lg:py-[40px] px-4 relative min-h-screen'>
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

            <motion.div 
                className='w-full max-w-4xl'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <motion.div 
                    className='text-center text-[#1c1c1c] flex flex-col items-center mb-16'
                    variants={itemVariants}
                >
                    <SplitText
                        text="Let's Work Together"
                        className="text-[36px] md:text-[48px] font-bold tracking-[-0.04em] [text-shadow:0_0_24px_rgba(0,0,0,0.24)] mb-4"
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
                        className='text-[18px] md:text-[20px] text-gray-400 max-w-2xl'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            delay: 0.2, 
                            duration: 0.8,
                            type: "spring",
                            stiffness: 60,
                            damping: 12
                        }}
                    >
                        Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
                    </motion.p>
                </motion.div>

                {/* Status Message */}
                <AnimatePresence>
                    {status.message && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className={`w-full max-w-2xl mx-auto mb-8 p-4 rounded-xl border-2 ${
                                status.type === 'success' 
                                    ? 'bg-green-50 border-green-200 text-green-800' 
                                    : 'bg-red-50 border-red-200 text-red-800'
                            }`}
                        >
                            <div className='flex items-center gap-3'>
                                {status.type === 'success' ? (
                                    <CheckCircle size={20} className='text-green-600' />
                                ) : (
                                    <AlertCircle size={20} className='text-red-600' />
                                )}
                                <p className='font-medium'>{status.message}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Contact Form */}
                <motion.div 
                    className='w-full max-w-2xl mx-auto'
                    variants={itemVariants}
                >
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <motion.div 
                                className='space-y-2'
                                variants={itemVariants}
                            >
                                <label htmlFor="name" className='flex items-center gap-2 text-[16px] font-medium text-[#1c1c1c]'>
                                    <User size={18} />
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1c1c1c] focus:outline-none transition-colors bg-white disabled:opacity-50 disabled:cursor-not-allowed'
                                    placeholder='Your name'
                                />
                            </motion.div>
                            <motion.div 
                                className='space-y-2'
                                variants={itemVariants}
                            >
                                <label htmlFor="email" className='flex items-center gap-2 text-[16px] font-medium text-[#1c1c1c]'>
                                    <Mail size={18} />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    disabled={isSubmitting}
                                    className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1c1c1c] focus:outline-none transition-colors bg-white disabled:opacity-50 disabled:cursor-not-allowed'
                                    placeholder='your@email.com'
                                />
                            </motion.div>
                        </div>
                        
                        <motion.div 
                            className='space-y-2'
                            variants={itemVariants}
                        >
                            <label htmlFor="subject" className='flex items-center gap-2 text-[16px] font-medium text-[#1c1c1c]'>
                                <MessageSquare size={18} />
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                disabled={isSubmitting}
                                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1c1c1c] focus:outline-none transition-colors bg-white disabled:opacity-50 disabled:cursor-not-allowed'
                                placeholder='What would you like to discuss?'
                            />
                        </motion.div>

                        <motion.div 
                            className='space-y-2'
                            variants={itemVariants}
                        >
                            <label htmlFor="message" className='flex items-center gap-2 text-[16px] font-medium text-[#1c1c1c]'>
                                <MessageSquare size={18} />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                disabled={isSubmitting}
                                rows={6}
                                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1c1c1c] focus:outline-none transition-colors resize-none bg-white disabled:opacity-50 disabled:cursor-not-allowed'
                                placeholder='Tell me about your project, ideas, or just say hello!'
                            />
                        </motion.div>

                        <motion.div 
                            className='pt-4'
                            variants={itemVariants}
                        >
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1c1c1c] text-white rounded-full font-medium text-[16px] overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                                whileHover={{ 
                                    scale: isSubmitting ? 1 : 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ 
                                    scale: isSubmitting ? 1 : 0.98,
                                    transition: { duration: 0.1 }
                                }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                                    initial={{ x: '-100%' }}
                                    whileHover={isSubmitting ? {} : { x: '0%' }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />
                                <span className="relative z-10">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </span>
                                <motion.div
                                    className="relative z-10"
                                    animate={isSubmitting ? { rotate: 360 } : {}}
                                    transition={isSubmitting ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                                >
                                    <Send size={18} />
                                </motion.div>
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>

                {/* Additional Contact Info */}
                <motion.div 
                    className='text-center mt-16 pt-8 border-t border-gray-100'
                    variants={itemVariants}
                >
                    <p className='text-gray-500 mb-4'>
                        Or reach out directly at
                    </p>
                    <motion.a 
                        href="mailto:your-email@example.com"
                        className='inline-flex items-center gap-2 text-[#1c1c1c] font-medium hover:text-blue-600 transition-colors'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Mail size={18} />
                        your-email@example.com
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
}