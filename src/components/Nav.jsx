import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";

function Nav() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Restore on unmount
    };
  }, [toggle]);

  return (
    <>
      <div className="flex items-center justify-between p-6 lg:p-8 lg:flex-row">
        {/* Logo */}
        <div>
          <Link to="/" className="text-white font-mono text-3xl tracking-wider flex items-center font-bold">
            <CgNametag /> Mihnev
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/skill" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">
            Skills
          </Link>
          <Link to="/project" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">
            Projects
          </Link>
          <Link to="/resume" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">
            CV
          </Link>
          <Link to="/contact" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">
            Contact
          </Link>
          <Link to="/checkout" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl font-bold">
            Price
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(false)}
              size={30}
              className="text-white cursor-pointer"
              aria-label="Close menu"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setToggle(true)}
              size={30}
              className="text-white cursor-pointer"
              aria-label="Open menu"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${toggle ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <AiOutlineClose onClick={() => setToggle(false)} size={30} className="text-white cursor-pointer" />
        </div>
        <ul className="flex flex-col items-center justify-center space-y-6 mt-10 text-white text-2xl font-bold">
          <li><Link to="/skill" onClick={() => setToggle(false)}>Skills</Link></li>
          <li><Link to="/project" onClick={() => setToggle(false)}>Projects</Link></li>
          <li><Link to="/resume" onClick={() => setToggle(false)}>CV</Link></li>
          <li><Link to="/contact" onClick={() => setToggle(false)}>Contact</Link></li>
          <li><Link to="/checkout" onClick={() => setToggle(false)}>Price</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Nav;