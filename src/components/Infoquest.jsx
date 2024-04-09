import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Infoquest = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0, // Set the threshold for triggering the animation
    });

    // Define animation variants
    const variants = {
        visible: index => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.1, // Adjust delay for stagger effect
            },
        }),
        hidden: { opacity: 0, x: -50 },
    };

    // Sample event data
    const eventData = [
        { id: 1, title: "Infoquest 2K24", image: "/images/events/infoquest.jpg" },
        { id: 2, title: "html", image: "/images/events/html.jpg" },
        { id: 3, title: "Portfolio Design", image: "/images/events/portfolio.jpg" },
        { id: 4, title: "Codiac", image: "/images/events/codiac.jpg" },
        { id: 5, title: "Pathfinder", image: "/images/events/pathfinder.jpg" },
        { id: 6, title: "Rowdies", image: "/images/events/rowdies.jpg" },
        { id: 7, title: "bgmi", image: "/images/events/bgmi.jpg" },
        { id: 8, title: "treasure hunt", image: "/images/events/treasurehunt.jpg" },
        { id: 9, title: "dumb charades", image: "/images/events/dumbcharades.jpg" },
        { id: 10, title: "Autocad", image: "/images/events/autocad.jpg" },
        { id: 11, title: "Carrom", image: "/images/events/carrom.jpg" },
        { id: 12, title: "Quiz-o-mania", image: "/images/events/quizomania.jpg" },
        { id: 13, title: "uno", image: "/images/events/uno.jpg" },
        { id: 14, title: "shark tank", image: "/images/events/sharktank.jpg" },
        { id: 15, title: "chess", image: "/images/events/chess.jpg" },
        // Add more event data as needed
    ];

    return (
        <>
            <section className="bg-slate-950 flex flex-col justify-center items-center min-h-screen overflow-hidden">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 flex flex-col items-center justify-center overflow-hidden gap-12">
                    <header className="flex justify-left items-start w-full pb-8">
                        <Link to={'/'} className='cursor-pointer hover:bg-[#b7b7b729] transition-all ease-in-out border border-2 border-gray-400 bg-[#b7b7b729] rounded-full w-12 h-12 flex place-items-center justify-center'>
                            <i className="fa-solid fa-chevron-left text-sm text-white"></i>
                        </Link>
                    </header>
                    <div className="mx-auto max-w-4xl text-center overflow-hidden">
                        <h1 className="text-center text-5xl sm:text-8xl font-extrabold text-transparent bg-gradient-to-r from-black via-white to-gray-500 bg-clip-text animated-gradient mb-8">
                            INFOQUEST
                        </h1>
                        <p className="bg-[#b7b7b729] px-8 py-4 rounded-xl border-2 border-gray-500 mt-2 text-gray-400 font-medium text-lg text-center text-justify">
                            Infoquest is the annual college techno-managerial fest of Asansol Engineering College, providing a platform to showcase and enhance technical and managerial skills. Events range from electronics & programming to quizzes & creative writing, offering something for everyone.
                        </p>
                    </div>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 overflow-hidden w-full"
                    >
                        {eventData.map((event, index) => (
                            <motion.div
                                key={event.id}
                                custom={index}
                                variants={variants}
                                whileHover={{ scale: 0.9 }}
                                className="h-max rounded-lg border border-2 border-gray-400 bg-[#b7b7b729] rounded-full overflow-hidden p-4"
                            >
                                <a href="#" className="block">
                                    <img
                                        alt=""
                                        src={event.image}
                                        className="h-full max-h-80 w-full object-cover rounded-lg"
                                    />
                                    <h3 className="mt-4 text-lg font-bold text-gray-200 sm:text-xl uppercase">{event.title}</h3>
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Infoquest;
