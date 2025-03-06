import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

import Profileimg from "../assets/profile.jpg";

function Hero() {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading}
      <section className="flex flex-col lg:flex-row items-center justify-around p-10 space-y-10 lg:space-y-0 text-white">
        {/* Ляв контейнер с текст */}
        <motion.div
          className="lg:w-1/3 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold text-gray-300">I&apos;m</p>
          <h1 className="text-6xl font-bold text-white">Stilian Mihnev</h1>
          <hr className="my-4 border-indigo-500 w-1/3 mx-auto lg:mx-0" />
          <p className="mt-5 text-gray-300 font-medium">
            I am mainly interested in programming (JavaScript, ReactJs, HTML, CSS) - I am currently studying at Paisiy Hilendarski.
          </p>
        </motion.div>

        {/* Централен контейнер с изображение */}
        <motion.div
          className="lg:w-1/3 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Profileimg}
            alt="Profile"
            className="rounded-full w-80 border-8 dark:text-white-100 shadow-lg"
          />
        </motion.div>

        {/* Десен контейнер "About Me" */}
        <motion.div
          className="lg:w-1/3 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold text-white">About Me</p>
          <p className="text-gray-300 font-medium mt-4">
            Aspiring programmer with experience in JavaScript and related libraries. Skilled in building front-end and back-end web applications, using frameworks like React...
          </p>

          {showMore && (
            <p className="text-gray-300 font-medium mt-3">
              Proficient in integrating RESTful APIs and managing databases with MongoDB. Passionate about writing clean, efficient code and optimizing user experiences.
            </p>
          )}

          <button
            onClick={() => setShowMore(prev => !prev)}
            className="mt-5 px-8 py-2 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
            <Link to="https://www.facebook.com/stilian.mihnev" target="_blank" aria-label="Facebook">
              <BsFacebook size={40} className="dark:text-white-100 text-white hover:text-indigo-700 transition-all" />
            </Link>
            <Link to="https://x.com/home/" target="_blank" aria-label="Twitter">
              <BsTwitter size={40} className="dark:text-white-100 text-white hover:text-indigo-700 transition-all" />
            </Link>
            <Link to="https://www.instagram.com/mihnevw/" target="_blank" aria-label="Instagram">
              <BsInstagram size={40} className="dark:text-white-100 text-white hover:text-indigo-700 transition-all" />
            </Link>
            <Link to="https://github.com/Mihnevw/" target="_blank" aria-label="GitHub">
              <BsGithub size={40} className="dark:text-white-100 text-white hover:text-indigo-700 transition-all" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
