import React from 'react'
import { motion } from 'framer-motion';

function Preloader() {
    return (
        <div className="px-4 flex flex-col justify-center items-center h-screen bg-slate-950">
            <motion.h1
                initial={{ opacity: 0, y: 20 }} // Initial animation state
                animate={{ opacity: 1, y: 0 }} // Animation when component mounts
                transition={{ delay: 0.1, duration: 0.5 }} // Delay and duration for the animation
                className="bg-gradient-to-r from-lime-400 via-fuchsia-500 to-red-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-8xl animated-gradient mb-6">
                LOADING..
            </motion.h1>
        </div>
    )
}

export default Preloader
