import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Footer() {
    const { ref, inView } = useInView({
        threshold: 0.3, // Adjust threshold as needed
        // triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            // Additional logic or animations when footer comes into view
        }
    }, [inView]);

    return (

        <>

            <motion.footer
                ref={ref}
                initial={{ opacity: 1, y: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 1, y: 0 }}
                className="bg-slate-950">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <motion.h1
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-gradient-to-r from-lime-400 via-fuchsia-500 to-red-600 bg-clip-text text-transparent font-extrabold text-transparent sm:text-3xl animated-gradient text-2xl font-black">
                            <Link to={'/'}>AEC-FIESTA</Link>
                        </motion.h1>
                    </div>

                    <ul className="mt-4 flex flex-wrap justify-center gap-6 md:gap-4 lg:gap-4">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'/'} className="text-gray-300 font-black transition hover:opacity-75"> Home </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'/leganzza'} className="text-gray-300 font-black transition hover:opacity-75"> Leganzza </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'/infoquest'} className="text-gray-300 font-black transition hover:opacity-75"> Infoquest </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link to={'http://aecwb.edu.in/'} className="text-gray-300 font-black transition hover:opacity-75"> AEC Officials </Link>
                        </motion.li>
                    </ul>

                    <ul className="mt-4 flex justify-center gap-8 md:gap-12">
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                to={'https://www.instagram.com/aecfiesta_2k24/'}
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-300 transition hover:opacity-75"
                            >
                                <span className="sr-only">Instagram</span>
                                <i className="fa-brands fa-instagram text-2xl"></i>
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                to={'https://www.facebook.com/AEC1998'}
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-300 transition hover:opacity-75"
                            >
                                <span className="sr-only">Facebook</span>
                                <i className="fa-brands fa-facebook text-2xl"></i>
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link
                                to={'https://www.linkedin.com/school/asansol-engineering-college-322/'}
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-300 transition hover:opacity-75"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <i className="fa-brands fa-linkedin text-2xl"></i>
                            </Link>
                        </motion.li>
                    </ul>
                    <div className="mt-4 border-t border-gray-100 pt-8">
                        <p className="text-center text-xs/relaxed text-gray-200">
                            © AEC-FIESTA 2024. All rights reserved.

                            <br />

                            Designed & Developed By &nbsp;
                            
                            <Link to={'https://itsanket.netlify.app'} className="text-purple-700 transition hover:text-purple-700/75"
                            >Sanket Banerjee .</Link>
                        </p>
                    </div>
                </motion.div>
            </motion.footer>

        </>


    )
}

export default Footer
