import { useState } from "react";
import { Link } from "react-router-dom";

import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

function Nav() {
  const [toggle, setToggle] = useState(false)

  const openMenu = () => {
    setToggle(true)
  }

  const closeMenu = () => {
    setToggle(false)
  }

  return (
    <>
      <div className="flex items-center justify-between p-8 lg:flex-row">
        <div>
          <Link to="/" className="text-white font-mono text-3xl 
        tracking-wider flex items-center font-bold"><CgNametag /> Mihnev</Link>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <Link to="/skill" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">Skills</Link>
            <Link to="/project" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">Project</Link>
            <Link to="/resume" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">CV</Link>
            <Link to="/contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">Contact</Link>
          </div>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer" />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} className="text-white" />
            )}

          </div>
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-white text-x1 mb-2 cursor-pointer">Skils</li>
              <li className="text-white text-x1 mb-2 cursor-pointer">Project</li>
              <li className="text-white text-x1 mb-2 cursor-pointer">CV</li>
              <li className="text-white text-x1 mb-2 cursor-pointer">Contact</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  )
}

export default Nav