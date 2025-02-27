import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

import ProjectImg1 from '../assets/app1.avif';
import ProjectImg2 from '../assets/app2.webp';
import ProjectImg3 from '../assets/app3.png';
import ProjectImg4 from '../assets/app4.png';

const projects = [
  {
    title: 'Music application',
    description: 'Music app is a web application that allows users to search for albums, add new ones to their library, and remove existing ones.',
    img: ProjectImg1,
    link: 'https://github.com/Mihnevw/Music-App'
  }, {
    title: 'Weather application',
    description: 'Weather app allows users to enter a city name and view the current temperature with real-time weather data.',
    img: ProjectImg2,
    link: 'https://github.com/Mihnevw/Weather-App'
  }, {
    title: 'Restaurant Application',
    description: 'Restaurant is a web application displaying a menu with interactive features, built with Bootstrap and other libraries.',
    img: ProjectImg3,
    link: 'https://github.com/Mihnevw/restaurant'
  }, {
    title: 'Game Application',
    description: 'Game Library allows users to add, delete, and browse games with a comment system for reviews.',
    img: ProjectImg4,
    link: 'https://github.com/Mihnevw/games-react-site'
  }
]

function Project() {
  return (
    <section className='bg-indigo-900 m-5 md:m-20 max-w-full p-5 md:p-10 rounded-lg shadow-lg'>
      <div className='text-center'>
        <motion.h1
          className='uppercase tracking-wide text-3xl font-bold text-white mb-10'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer'>
      {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className='flex flex-col sm:flex-row'>
              <div className='p-5 flex-shrink-0'>
                <img className='object-cover w-full sm:w-32 h-32 rounded-lg' src={project.img} alt={project.title} />
              </div>
              <div className='p-5 flex-grow'>
                <h2 className='uppercase tracking-wide text-lg text-indigo-900 font-semibold'>{project.title}</h2>
                <p className='text-gray-700 text-sm mt-2'>{project.description}</p>
                <div className='flex justify-end mt-5'>
                  <Link to={project.link} target='_blank' rel='noopener noreferrer'>
                    <BsGithub size={40} className='text-indigo-700 hover:text-indigo-900 transition-colors' />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
