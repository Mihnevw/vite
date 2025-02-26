import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

import ProjectImg1 from '../assets/app1.avif';
import ProjectImg2 from '../assets/app2.webp';
import ProjectImg3 from '../assets/app3.png';
import ProjectImg4 from '../assets/app4.png';

function Project() {
  return (
    <div className='bg-indigo-800 m-5 md:m-20 max-w-full p-5 md:p-10'>
      <div className='grid justify-items-center'>
        <h1 className='uppercase tracking-wide text-2xl font-bold text-white mt-5 md:mt-10'>My Projects</h1>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-3 md:p-5 cursor-pointer'>
        {[{
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
        }].map((project, index) => (
          <div key={index} className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
            <div className='md:flex flex-col sm:flex-row'>
              <div className='p-5 flex-shrink-0'>
                <img className='object-contain w-full sm:w-[110px] h-auto sm:h-[110px]' src={project.img} alt={project.title} />
              </div>
              <div className='p-5 flex-grow'>
                <div className='uppercase tracking-wide text-sm text-black font-semibold'>{project.title}</div>
                <p className='text-gray-700 text-base leading-normal'>{project.description}</p>
                <div className='flex justify-end mt-5'>
                  <Link to={project.link} target='_blank' rel='noopener noreferrer'>
                    <BsGithub size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
