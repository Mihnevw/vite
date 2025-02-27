import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <>
      <div className="flex items-center justify-between p-6 lg:p-8 lg:flex-row">
        {/* Logo */}
        <div>
          <Link to="/" className="text-white font-mono text-3xl tracking-wider flex items-center font-bold transition-all duration-300 hover:text-indigo-400">
            <CgNametag className="mr-2 text-indigo-400" /> Mihnev
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4">
          {["skill", "project", "resume", "contact", "checkout"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="text-white hover:bg-indigo-800 hover:text-indigo-300 rounded-full px-5 py-2 text-xl font-bold transition-all duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(false)}
              size={30}
              className="text-white cursor-pointer transition-transform transform hover:scale-110"
            />
          ) : (
            <HiMenuAlt1
              onClick={() => setToggle(true)}
              size={30}
              className="text-white cursor-pointer transition-transform transform hover:scale-110"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90"
          >
            <div className="flex justify-end p-6">
              <AiOutlineClose onClick={() => setToggle(false)} size={30} className="text-white cursor-pointer hover:text-red-500 transition-colors duration-300" />
            </div>
            <ul className="flex flex-col items-center justify-center space-y-6 mt-10 text-white text-2xl font-bold">
              {["skill", "project", "resume", "contact", "checkout"].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * ("skill project resume contact checkout".split(" ").indexOf(item) + 1) }}
                >
                  <Link
                    to={`/${item}`}
                    onClick={() => setToggle(false)}
                    className="hover:text-indigo-400 transition-colors duration-300"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
