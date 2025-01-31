import { useState } from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import Profileimg from "../assets/portfolio.jpg";


function Hero() {
    const [showMore, setShowMore] = useState(false);

    const handleButton = () => {
        setShowMore(!showMore); //Всеки път превключва от true на false и обратно
    }

    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-salte-300">I`m</p>
                <h1 className="text-6xl">Stilian Mihnev</h1>
                <hr />
                <p className="mt-10 text-slate-300 font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, doloribus.
                </p>
            </div>
            <div className="w-1/3 items-center ssm:w-fit">
                <img src={Profileimg} alt="hero" width={250} height={259} className="rounded-full w-full border-7 border-white" />
            </div>
            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4">About me</p>
                <p className="text-slate-300">
                    Aspiring programmer with experience in JavaScript and related libraries. Skilled in building front-end and back-end web applications,
                </p>

                {
                    showMore && (
                        <p className="text-slate-300">
                            using frameworks like React and tools like Bootstrap.
                        </p>
                    )
                }

                <button onClick={handleButton} className="bg-white text-indigo-500 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">
                    {
                        showMore ? "Show Less" : "Show more"
                    }
                </button>

                <div className="flex mt-5 space-x-4 cursor-pointer">
                    <BsFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full" />
                    <BsTwitter size={40} className="border-4 hover:border-indigo-800 rounded-full" />
                    <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full" />
                </div>
            </div>
        </section>
    )
}

export default Hero