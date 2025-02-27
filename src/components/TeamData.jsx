import img1 from '../assets/avatar1.jpg';
import img2 from '../assets/avatar2.jpg';
import img3 from '../assets/avatar3.jpg';
import img4 from '../assets/avatar4.jpg';


const teamData = {
    Mike: {
      image: img1,
      bio: "Mike is our experienced manager with over 10 years of industry experience. He coordinates the team and ensures the successful implementation of projects.",
      role: "Manager",
      projects: ["Project Alpha", "Project Beta", "Project Gamma"],
      contact: {
        email: "mike@gmail.com",
        phone: "+359 888123456",
      },
    },
    Peter: {
      image: img2,
      bio: "Peter is a talented Back-End developer who takes care of server logic and API integrations.",
      role: "Back-End Dev",
      projects: ["Server Redesign", "API Integration", "Database Migration"],
      contact: {
        email: "peter@gmail.com",
        phone: "+359 888123456",
      },
    },
    Silvester: {
      image: img3,
      bio: "Silvester is a creative Front-End developer who creates modern and intuitive user interfaces.",
      role: "Front-End Dev",
      projects: ["UI Redesign", "React Revamp", "CSS Overhaul"],
      contact: {
        email: "silvester@gmail.com",
        phone: "+359 888123456",
      },
    },
    John: {
      image: img4,
      bio: "John is a versatile Full Stack developer who skillfully connects front-end and back-end technologies.",
      role: "Full Stack Dev",
      projects: ["Full Stack Integration", "New Website Launch", "Performance Optimization"],
      contact: {
        email: "john@gmail.com",
        phone: "+359 888123456",
      },
    },
  };
  
  export default teamData;
  