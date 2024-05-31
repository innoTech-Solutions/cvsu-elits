"use client"
import { motion, AnimatePresence } from 'framer-motion';
import AuthContainer from '@/components/Form/AuthContainer';

const Form = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <AuthContainer />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Form;
