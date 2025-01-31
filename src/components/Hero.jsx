import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

import Profileimg from "../assets/portfolio.jpg";

function Hero() {
  const [showMore, setShowMore] = useState(false);

  const handleButton = () => {
    setShowMore(!showMore); //Всеки път превключва от true на false и обратно
  }

  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
      <div className="lg:w-1/3 ssm:w-fit">
        <p className="text-4xl mb-5 text-salte-300 font-bold">I`m</p>
        <h1 className="text-6xl font-bold">Stilian Mihnev</h1>
        <hr />
        <p className="mt-10 text-slate-300 font-sans font-bold">
          I am mainly interested in programming (JavaScript, ReactJs, HTML, CSS) - I am currently studying at Paisiy Hilendarski.
        </p>
      </div>
      <div className="w-1/3 items-center ssm:w-fit">
        <img src={Profileimg} alt="hero" width={250} height={259} className="rounded-full w-full border-7 border-white" />
      </div>
      <div className="w-1/3 ssm:w-fit">
        <p className="text-4xl mb-4 font-bold">About me</p>
        <p className="text-slate-300 font-bold">
          Aspiring programmer with experience in JavaScript and related libraries. Skilled in building front-end and back-end web applications, using frameworks like React and tools like Bootstrap.
        </p>

        {
          showMore && (
            <p className="text-slate-300 font-bold">
              Proficient in integrating RESTful APIs and managing databases with MongoDB. Passionate about writing clean, efficient code and optimizing user experiences. Continuously exploring new technologies and improving problem-solving skills to stay updated in the fast-paced tech world.
            </p>
          )
        }

        <button onClick={handleButton} className="bg-white text-indigo-500 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white cursor-pointer">
          {
            showMore ? "Show Less" : "Show more"
          }
        </button>

        <div className="flex mt-5 space-x-4 cursor-pointer">
          <Link to='https://www.facebook.com/stilian.mihnev' target="_blank" rel="noopener noreferrer">
            <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </Link>
          <Link to='https://x.com/home/' target="_blank" rel="noopener noreferrer">
            <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </Link>
          <Link to='https://www.instagram.com/mihnevw/' target="_blank" rel="noopener noreferrer">
            <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </Link>
          <Link to='https://github.com/Mihnevw/' target="_blank" rel="noopener noreferrer">
            <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero