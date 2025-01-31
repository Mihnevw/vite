import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

import ProjectImg1 from '../assets/app1.avif';
import ProjectImg2 from '../assets/app2.webp';
import ProjectImg3 from '../assets/app3.png';
import ProjectImg4 from '../assets/app4.png';

function Project() {
  return (
    <div className='bg-indigo-800 m-20 max-w-full p-10'>
      <div className='grid justify-items-center'>
        <h1 className='uppercase tracking-wide text-2xl font-bold text-white mt-10'>My Projects</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-5'>
        {/* Project Card */}
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-black font-semibold'>
                Music application
              </div>
              <p className='text-blue-400 hover:underline'>MA</p>
              <p className='text-gray-700 text-base leading-normal'>
                Music app is a web application that allows users to search for albums, add new ones to their library, and remove existing ones. With an easy-to-use interface, the app provides a personalized experience for music enthusiasts.
              </p>
            </div>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[110px] h-[110px]' src={ProjectImg1} alt="Hospital" />
            </div>
            <div className='flex justify-end mt-80'>
              <Link to='https://github.com/Mihnevw/Music-App' target="_blank" rel="noopener noreferrer">
                <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
              </Link>
            </div>
          </div>
        </div>

        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[110px] h-[110px]' src={ProjectImg2} alt="School" />
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-black font-semibold'>
                Weather application
              </div>
              <p className='text-blue-400 hover:underline'>WA</p>
              <p className='text-gray-700 text-base leading-normal'>
                Weather app is a simple web application that allows users to enter a city name and view the current temperature in that city. With real-time weather data integration, it provides quick and accurate temperature information for any location.
              </p>
            </div>
            <div className='flex justify-end mt-80'>
              <Link to='https://github.com/Mihnevw/Weather-App' target="_blank" rel="noopener noreferrer">
                <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className='my-8 border-gray-300' />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-5'>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-black font-semibold'>
                Restaurant Applicattion
              </div>
              <p className='text-blue-400 hover:underline'>RA</p>
              <p className='text-gray-700 text-base leading-normal'>
                Restaurant is a dynamic web application that displays a restaurant menu with interactive features. Built using Bootstrap and other libraries, the application offers a visually appealing and responsive design, allowing users to easily browse the menu and other engaging experiences and explore the restaurant offerings.
              </p>
            </div>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[110px] h-[110px]' src={ProjectImg3} alt="Inventory" />
            </div>
            <div className='flex justify-end mt-93'>
              <Link to='https://github.com/Mihnevw/restaurant' target="_blank" rel="noopener noreferrer">
                <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
              </Link>
            </div>
          </div>
        </div>

        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse transition-transform'>
          <div className='md:flex'>
            <div className='md:shrink-0 p-5'>
              <img className='object-contain w-[110px] h-[110px]' src={ProjectImg4} alt="POS" />
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-sm text-black font-semibold'>
                Game Application
              </div>
              <p className='text-blue-400 hover:underline'>GA</p>
              <p className='text-gray-700 text-base leading-normal'>
                Game Library is a web application that allows users to add, delete, and browse games in a personalized collection. It also features a comment system, enabling users to share their thoughts and reviews on different games.
              </p>
            </div>
            <div className='flex justify-end mt-93'>
              <Link to='https://github.com/Mihnevw/games-react-site' target="_blank" rel="noopener noreferrer">
                <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
