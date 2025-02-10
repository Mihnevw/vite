import { Link } from 'react-router-dom';

import B1 from '../assets/avatar1.jpg';
import B2 from '../assets/avatar2.jpg';
import B3 from '../assets/avatar3.jpg';
import B4 from '../assets/avatar4.jpg';

function Testimonial() {
  const teamMembers = [
    { img: B1, name: "Mike", role: "Manager" },
    { img: B2, name: "Peter", role: "Back-End Dev" },
    { img: B3, name: "Silvester", role: "Front-End Dev" },
    { img: B4, name: "John", role: "Full Stack Dev" }
  ];

  return (
    <div className="flex flex-wrap justify-center m-10">
      <div className="w-full text-center mb-6">
        <h1 className="text-3xl text-white font-bold uppercase tracking-wide">Team:</h1>
      </div>

      {teamMembers.map((member, index) => (
        // Обвиваме всеки card в контейнер с клас "group" за да използваме group-hover
        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4 group hover:animate-pulse">
          <Link to={`/member/${member.name}`}>
            <div className="bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col items-center p-6 dark:bg-slate-800 dark:highlight-white/5">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full shadow-lg mb-4"
              />
              <div className="text-center">
                <p className="text-slate-900 font-medium text-lg dark:text-slate-200">{member.name}</p>
                <p className="text-slate-500 font-medium text-sm dark:text-slate-300">{member.role}</p>
              </div>
            </div>
          </Link>

          <div className="mt-2 text-center text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to see information on {member.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonial;
