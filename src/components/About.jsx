import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function About() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        // triggerOnce: true
    });

    return (
        <section className="bg-slate-900 text-white bg-[url('/images/aboutback.jpg')] bg-fixed bg-center bg-no-repeat bg-cover" id='about'>
            <div className="wave relative bottom-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fillOpacity="1" d="M0,224L480,96L960,192L1440,64L1440,0L960,0L480,0L0,0Z"></path></svg>
            </div>
            <div ref={ref}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
                >
                    <div className="mx-auto max-w-5xl text-center border border-2 border-slate-400 bg-[#0206174f] rounded-full rounded-xl py-6 px-6 backdrop-blur">
                        <h1 className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-shadow text-4xl font-extrabold text-transparent sm:text-6xl animated-gradient mb-8">
                            ABOUT FIESTA
                        </h1>
                        <p className="sm:text-xl text-white  text-justify ">
                            Fiesta is the annual college festival of Asansol Engineering College. It is a 2-3 day extravaganza held every even semester of the academic year. It comprises of the annual technical and cultural fest a.k.a. Infoquest and Leganzza. Annually, Fiesta presents a platform for the students to break free from the monotonous life. The fest has an average footfall of hundreds of students and a lineup of around 30+ engaging events.
                        </p>
                        <div className="mt-8 mb-2 flex flex-wrap justify-center gap-4">
                            <Link
                                className="block w-full rounded border-2 border-slate-400 bg-slate-800 rounded-2xl hover:bg-slate-500 sm:text-l transition-all ease-in-out py-4 px-14 sm:w-auto font-black uppercase tracking-wide"
                                to={'/infoquest'}>
                                Infoquest
                            </Link>
                            <Link
                                className="block w-full rounded border-2 border-slate-400 bg-slate-800 rounded-2xl hover:bg-slate-500 sm:text-l transition-all ease-in-out py-4 px-14 sm:w-auto font-black uppercase tracking-wide"
                                to={'/leganzza'}>
                                Leganzza
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="wave relative bottom-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#020617" fillOpacity="1" d="M0,224L480,96L960,192L1440,64L1440,320L960,320L480,320L0,320Z"></path></svg>
            </div>
        </section>
    );
}

export default About;
