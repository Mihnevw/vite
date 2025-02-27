import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <div className="flex flex-wrap justify-center m-10 p-5">
      <motion.div
        className="w-full text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-white font-bold uppercase tracking-wide">Meet Our Team</h1>
      </motion.div>

      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/4 p-4 group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
        >
          {/* Важно: премахнах Link от обвиващия елемент и го преместих вътре */}
          <div className="relative">
            <Link to={`/member/${member.name}`} className="block">
              <div className="bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex flex-col items-center p-6 dark:bg-slate-800 dark:highlight-white/5 transition-transform duration-300 group-hover:scale-105">
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

            {/* Hover текстът вече е част от group и ще се появява правилно */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-3rem] text-center text-xs sm:text-sm text-white bg-gradient-to-r from-black/80 to-gray-800/80 px-2 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg backdrop-blur-md">
            Click on {member.name} to see more about {member.name}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Testimonial;
