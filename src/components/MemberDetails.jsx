import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navigation from './Nav';


function MemberDetail() {
  // Извличаме параметъра memberName от URL-а
  const { memberName } = useParams();

  // Фиктивни данни за демонстрация – заменете с реални данни или логика за зареждане
  const memberData = {
    Mike: {
      image: '/src/assets/avatar1.jpg',
      bio: "Mike е нашият опитен мениджър с над 10 години опит в индустрията. Той координира екипа и осигурява успешното изпълнение на проектите.",
      role: "Manager",
      projects: ["Project Alpha", "Project Beta", "Project Gamma"],
      contact: {
        email: "mike@example.com",
        phone: "+1234567890"
      }
    },
    Peter: {
      image: '/src/assets/avatar2.jpg',
      bio: "Peter е талантлив Back-End разработчик, който се грижи за сървърната логика и API интеграциите.",
      role: "Back-End Dev",
      projects: ["Server Redesign", "API Integration", "Database Migration"],
      contact: {
        email: "peter@example.com",
        phone: "+0987654321"
      }
    },
    Silvester: {
      image: '/src/assets/avatar3.jpg',
      bio: "Silvester е креативен Front-End разработчик, който създава модерни и интуитивни потребителски интерфейси.",
      role: "Front-End Dev",
      projects: ["UI Redesign", "React Revamp", "CSS Overhaul"],
      contact: {
        email: "silvester@example.com",
        phone: "+111222333"
      }
    },
    John: {
      image: '/src/assets/avatar4.jpg',
      bio: "John е универсален Full Stack разработчик, който умело свързва front-end и back-end технологиите.",
      role: "Full Stack Dev",
      projects: ["Full Stack Integration", "New Website Launch", "Performance Optimization"],
      contact: {
        email: "john@example.com",
        phone: "+444555666"
      }
    }
  };

  // Вземаме данните за текущия член или използваме fallback
  const data = memberData[memberName] || {
    image: 'https://via.placeholder.com/150',
    bio: "Няма налична биография за този член.",
    role: "N/A",
    projects: [],
    contact: { email: "N/A", phone: "N/A" }
  };

  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      {/* Основно съдържание с градиентен фон */}
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Заглавие */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 uppercase tracking-wide">
            Информация за {memberName}
          </h2>

          {/* Карта с детайлите */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            {/* Горна част – профилна снимка и основна информация */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0">
                <img
                  src={data.image}
                  alt={memberName}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md"
                />
              </div>
              <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-800">{memberName}</h1>
                <p className="text-xl text-gray-500 mb-4">Роля: {data.role}</p>
                <p className="text-gray-700">{data.bio}</p>
              </div>
            </div>

            {/* Секция за Проекти */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Проекти</h2>
              {data.projects.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700">
                  {data.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Няма налични проекти.</p>
              )}
            </div>

            {/* Секция за Контакт информация */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Контакт информация</h2>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {data.contact.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Телефон:</span> {data.contact.phone}
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-100">Mihnev</h3>
              <p className="text-sm text-gray-400">
                Frontend developer with a passion for creating innovative solutions
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/skill" className="hover:text-blue-400 transition-colors">Skills</Link>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                <Link to="/resume" className="hover:text-blue-400 transition-colors">CV</Link>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>✉️ stilianmihnev@gmail.com</p>
                <p>📞 +359 888 123 456</p>
                <p>📍 Plovdiv, Bulgaria</p>
              </div>
            </div>

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

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mihnevw
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MemberDetail;
