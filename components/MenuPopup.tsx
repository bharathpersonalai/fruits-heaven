import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MenuPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup on component mount (which is every reload on homepage)
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 800); // Slight delay for better UX

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => setIsOpen(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl glass-card border border-white/20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col md:flex-row h-full">
                            {/* Image Section */}
                            <div className="w-full max-h-[85vh] overflow-y-auto overflow-x-hidden">
                                <img
                                    src="/menu.jpg"
                                    alt="Our Fresh Menu"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>


                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MenuPopup;
