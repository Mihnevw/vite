import { useParams } from 'react-router-dom';


function MemberDetail() {
  // Извличаме параметъра memberName от URL-а
  const { memberName } = useParams();

  // Фиктивни данни за демонстрация. Може да ги замените с динамични.
  const memberData = {
    Mike: {
      image: '/src/assets/avatar1.jpg',
      bio: "Mike is our experienced manager with over 10 years of industry experience. He coordinates the team and ensures the successful implementation of projects.",
      projects: ["Project Alpha", "Project Beta", "Project Gamma"],
      role: "Manager",
      contact: {
        email: "mike@gmail.com",
        phone: "+359 8734522887"
      }
    },
    Peter: {
      image: '/src/assets/avatar2.jpg',
      bio: "Peter is a talented Back-End developer who takes care of server logic and API integrations.",
      projects: ["Server Redesign", "API Integration", "Database Migration"],
      role: "Back-End Dev",
      contact: {
        email: "peter@gmail.com",
        phone: "+359 885678823"
      }
    },
    Silvester: {
      image: '/src/assets/avatar3.jpg',
      bio: "Silvester is a creative Front-End developer who creates modern and intuitive user interfaces.",
      projects: ["UI Redesign", "React Revamp", "CSS Overhaul"],
      role: "Front-End Dev",
      contact: {
        email: "silvester@gmail.com",
        phone: "+359 889876543"
      }
    },
    John: {
      image: '/src/assets/avatar4.jpg',
      bio: "John is a versatile Full Stack developer who skillfully connects front-end and back-end technologies.",
      projects: ["Full Stack Integration", "New Website Launch", "Performance Optimization"],
      role: "Full Stack Dev",
      contact: {
        email: "john@gmail.com",
        phone: "+359 878765432"
      }
    }
  };

  // Вземаме данните за текущия член. Ако няма данни, използваме fallback.
  const data = memberData[memberName] || {
    image: 'https://via.placeholder.com/150',
    bio: "Няма налична биография за този член.",
    role: "Manager",
    projects: [],
    contact: { email: "N/A", phone: "N/A" }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Горна част с профилната снимка и основна информация */}
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
            {/* Можете да добавите и роля, ако имате такава */}
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
  );
}

export default MemberDetail;
