import { Link } from 'react-router-dom';

import Navigation from './Nav.jsx';

const skills = [
  {
    name: 'HTML5',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png', // Смени с истинска снимка за HTML5
    color: 'text-orange-400',
    proficiency: 90,
    level: 'Професионалист',
    description:
      'HTML5 is a basic language for creating web pages. With it, I create a semantic and well-structured content structure.',
    bgColor: 'bg-orange-900/30',
    borderColor: 'border-orange-500',
    hoverBorderColor: 'hover:border-orange-400',
  },
  {
    name: 'JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    color: 'text-yellow-400',
    proficiency: 85,
    level: 'Напреднал',
    description:
      'JavaScript is a powerful programming language that I use to add interactivity and dynamic behavior to web pages.',
    bgColor: 'bg-yellow-900/30',
    borderColor: 'border-yellow-500',
    hoverBorderColor: 'hover:border-yellow-400',
  },
  {
    name: 'React',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', // Смени с истинска снимка за React
    color: 'text-cyan-400',
    proficiency: 80,
    level: 'Комфортен',
    description:
      'React is a library for building user interfaces. I use it to create reusable components and manage state.',
    bgColor: 'bg-cyan-900/30',
    borderColor: 'border-cyan-500',
    hoverBorderColor: 'hover:border-cyan-400',
  },
  {
    name: 'Node.js',
    image: 'https://www.mindrops.com/images/nodejs-image.webp', // Смени с истинска снимка за Node.js
    color: 'text-green-400',
    proficiency: 75,
    level: 'Средно ниво',
    description:
      'Node.js is a JavaScript runtime environment outside the browser. I use it to build server-side applications and RESTful APIs.',
    bgColor: 'bg-green-900/30',
    borderColor: 'border-green-500',
    hoverBorderColor: 'hover:border-green-400',
  },
];

const MySkills = () => {
  return (
    <>
      {/* Навигация с тъмен фон */}
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      {/* Фонов градиент за страницата */}
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 uppercase tracking-wide">
            My skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group ${skill.bgColor} backdrop-blur-sm rounded-xl p-6 border-2 ${skill.borderColor} ${skill.hoverBorderColor} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                {/* Responsive оформление: вертикално на мобилни, хоризонтално на по-големи екрани */}
                <div className="flex flex-col md:flex-row items-center">
                  {/* Секция за изображението */}
                  <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className={`rounded-lg ${skill.name === 'React' ? 'object-contain w-32 h-32' : 'object-cover w-32 h-32'}`}
                    />
                  </div>
                  {/* Секция за текстовото съдържание */}
                  <div className="w-full md:w-2/3 md:pl-6">
                    <h3 className="text-2xl font-bold text-gray-100 mb-2">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {skill.description}
                    </p>
                    {/* Лента за напредък */}
                    <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${skill.proficiency >= 80
                            ? 'bg-green-500'
                            : skill.proficiency >= 50
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          }`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between w-full mt-4">
                      <span className="text-sm text-gray-300">
                        {skill.level}
                      </span>
                      <span className={`text-sm font-bold ${skill.color}`}>
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-12 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-100">Mihnevw</h3>
              <p className="text-sm text-gray-400">
                Frontend developer with a passion for creating innovative solutions
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/skill" className="hover:text-blue-400 transition-colors">Skills</Link>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>✉️ stilianmihnev@gmail.com</p>
                <p>📞 +359 888 123 456</p>
                <p>📍 Plovdiv, Bulgaria</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Social networks</h4>
              <div className="flex space-x-4">
                <Link to="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085c.626 1.956 2.444 3.379 4.6 3.419a9.967 9.967 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mihnevw
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MySkills;
