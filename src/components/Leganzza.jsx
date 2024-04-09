import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Leganzza() {

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
    { id: 1, title: "Leganzza 2K24", image: "/images/events/leganzza.jpg" },
    { id: 2, title: "fiesta moments", image: "/images/events/fiestamoments.jpg" },
    { id: 3, title: "Open mic", image: "/images/events/openmic.jpg" },
    { id: 4, title: "face painting", image: "/images/events/facepainting.jpg" },
    { id: 5, title: "foot loose", image: "/images/events/footloose.jpg" },
    { id: 6, title: "string symphony", image: "/images/events/stringsymphony.jpg" },
    { id: 7, title: "rang manch", image: "/images/events/rangmanch.jpg" },
    { id: 8, title: "Face of aec", image: "/images/events/faceofaec.jpg" },
    { id: 9, title: "aec got talent", image: "/images/events/aecgottalent.jpg" },
    { id: 10, title: "mr. & ms. aec", image: "/images/events/mrandmrsaec.jpg" },
    { id: 11, title: "sur sangam", image: "/images/events/sursangam.jpg" },
    { id: 12, title: "band of aec", image: "/images/events/bandofaec.jpg" },
    { id: 13, title: "art gallery", image: "/images/events/artgallery.jpg" },
    { id: 14, title: "paper dress", image: "/images/events/paperdress.jpg" },
    // Add more event data as needed
  ];

  return (
    <>
      <section className="bg-slate-950 flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 flex flex-col items-center justify-center overflow-hidden gap-12">
          <header className="flex justify-left items-start w-full pb-8">
            <Link to={'/'} className='cursor-pointer hover:bg-[#ffa7d229] transition-all ease-in-out border border-2 border-pink-400 bg-[#ffa7d229] rounded-full w-12 h-12 flex place-items-center justify-center'>
              <i className="fa-solid fa-chevron-left text-sm text-white"></i>
            </Link>
          </header>
          <div className="mx-auto max-w-4xl text-center overflow-hidden">
            <h1 className="text-center text-5xl font-extrabold text-transparent bg-gradient-to-r from-pink-700 via-white to-pink-500 bg-clip-text sm:text-8xl animated-gradient mb-6">
              LEGANZZA
            </h1>
            <p className="bg-[#ffa7d229] px-8 py-4 rounded-xl border-2 border-pink-300 mt-2 text-gray-200 font-medium text-lg text-center text-justify">
              Leganzza is the annual college cultural festival of Asansol Engineering College. It is an attempt to showcase the talents of students in AEC through an array of events & competitions. Being the annual cultural festival, the fun and frolic is obviously associated. Leganzza leaves no stone unturned in exploring the hidden talents of new students joining AEC each year. The events organised under Leganzza are Face painting, human pyramid, Dance, singing, Fashion show DJ night and many more.
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
                className="h-max rounded-lg border border-2 border-2 border-pink-300 bg-[#ffa7d229] rounded-full overflow-hidden p-4"
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
  )
}

export default Leganzza
