import { useState } from "react";

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
      <div className="flex items-center justify-between p-10 lg:flex-row">
        <div>
          <a href="/" className="text-white font-mono text-3xl 
        tracking-wider flex items-center font-bold"><CgNametag /> Mihnev</a>
        </div>
        <div className="space-x-4">
          <div className="ssm:hidden lg:block space-x-2">
            <a href="/skill" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">Skills</a>
            <a href="/project" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">Project</a>
            <a href="/testimonials" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">Testimonials</a>
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
              <li className="text-white text-x1 mb-2 cursor-pointer">Testimonials</li>
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