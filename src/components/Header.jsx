import React from 'react'
import { Toaster, toast } from "react-hot-toast";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';


function Header() {

    const [refGrid, inViewGrid] = useInView({
        threshold: 0.5 // 50% of the element is visible
    });

    function handleCopyUrl() {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                console.log('URL copied to clipboard:', url);
                toast.success("Link copied to clipboard!", { position: "top-left" });
            })
            .catch((error) => {
                console.error('Error copying URL to clipboard:', error);
                toast.error("Failed to copy link to clipboard.", { position: "top-left" });
            });
    }

    return (
        <>
            <Toaster
                position="top-left"
                reverseOrder={false}
            />

            <motion.section
                key="grid"
                ref={refGrid}
                initial={{ opacity: 1, y: 10 }} // Initial animation state
                animate={inViewGrid ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }} // Animation when component mounts
                transition={{ duration: 0.2 }} // Animation duration
                exit={{ opacity: 0, y: 10 }}
                className='bg-slate-950 text-white'
            >
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen items-center">
                    <motion.i
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="fa-solid fa-arrow-up-from-bracket text-white absolute top-8 right-8 cursor-pointer hover:bg-[#c084fc45] transition-all ease-in-out border border-2 border-purple-400 bg-[#c084fc2b] rounded-full w-12 h-12 flex place-items-center justify-center" onClick={handleCopyUrl}></motion.i>
                    <div className="mx-auto w-full px-8 max-w-3xl flex justify-center flex-col items-center text-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} // Initial animation state
                            animate={inViewGrid ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animation when component mounts
                            transition={{ delay: 0.2, duration: 0.5 }} // Delay and duration for the animation
                            exit={{ opacity: 0, y: 20 }}
                            className='sm:text-3xl font-black uppercase text-sky-300'>Asansol Enginnering College</motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} // Initial animation state
                            animate={inViewGrid ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animation when component mounts
                            transition={{ delay: 0.5, duration: 0.5 }} // Delay and duration for the animation
                            exit={{ opacity: 0, y: 20 }}
                            className='sm:text-xl font-black uppercase mb-4 text-gray-300'>Presenting</motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} // Initial animation state
                            animate={inViewGrid ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animation when component mounts
                            transition={{ delay: 0.8, duration: 0.5 }} // Delay and duration for the animation
                            exit={{ opacity: 0, y: 20 }}
                            className="bg-gradient-to-r from-lime-400 via-fuchsia-500 to-red-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-8xl animated-gradient mb-6">
                            FIESTA 2K24
                        </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }} // Initial animation state
                                animate={inViewGrid ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animation when component mounts
                                transition={{ delay: 1, duration: 0.5 }} // Delay and duration for the animation
                                exit={{ opacity: 0, y: 20 }}
                                className="mt-2 font-bold text-l sm:text-3xl uppercase text-gray-200 hover:bg-[#c084fc45] transition-all ease-in-out animate-bounce border border-2 border-purple-400 bg-[#c084fc2b] rounded-full py-4 px-8 w-max">AEC Cultural Fest</motion.p>
                    </div>
                    <p className="absolute bottom-4 left-1/2 translate-x-[-50%] translate-y-[-50%] mt-2 font-bold text-l sm:text-3xl uppercase text-gray-400">12<sup>th</sup> & 13<sup>th</sup> April</p>
                </div>
            </motion.section>
        </>
    )
}

export default Header
