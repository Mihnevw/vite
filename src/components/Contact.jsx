import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Nav";

import { GiPlayButton } from "react-icons/gi";
import { RiInputMethodLine } from "react-icons/ri";
import { BsTextareaT } from "react-icons/bs";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone || ""
        }),
      });
  
      const responseText = await response.text();
      
      try {
        const responseData = JSON.parse(responseText);
        
        if (!response.ok) {
          console.error("Server Error:", responseData);
          alert(`Грешка: ${responseData.error || response.statusText}`);
          return;
        }
        
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", phone: "" });
        
      } catch (parseError) {
        console.error("Invalid JSON Response:", {
          responseText,
          error: parseError
        });
        alert("Неочакван отговор от сървъра");
      }
      
    } catch (networkError) {
      console.error("Network Error:", networkError);
      alert("Problem with the connection to the server");
    }
  };

  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full p-6 shadow-lg rounded-2xl bg-white">
          <FaAddressCard className="w-8 h-8 text-gray-800 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
          {submitted ? (
            <div className="text-center">
              <p className="text-green-500">Thank you! Your message has been sent.</p>
              <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Go back to Home</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2">
                <RiInputMethodLine className="w-6 h-6 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2">
                <RiInputMethodLine className="w-6 h-6 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="w-6 h-6 text-gray-500" />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2">
                <BsTextareaT className="w-6 h-6 text-gray-500" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg field-sizing-content"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              >
                <GiPlayButton className="inline-block mr-2" />
                Send
              </button>
            </form>
          )}
          <div className="mt-6 text-center text-gray-600">
            <div className="flex items-center justify-center gap-4">
              <FaPhoneAlt className="w-5 h-5 text-blue-500" /> <span>+359 888 123 456</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <IoIosMail className="w-5 h-5 text-blue-500" /> <span>stilianmihnev@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2">
              <LuMapPin className="w-5 h-5 text-blue-500" /> <span>Plovdiv, Bulgaria</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-100">Mihnev</h3>
              <p className="text-sm text-gray-400">
                Frontend developer with a passion for creating innovative solutions
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/skill" className="hover:text-blue-400 transition-colors">Skills</Link>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                <Link to="/resume" className="hover:text-blue-400 transition-colors">CV</Link>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>✉️ stilianmihnev@gmail.com</p>
                <p>📞 +359 888 123 456</p>
                <p>📍 Plovdiv, Bulgaria</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Social networks</h4>
              <div className="flex space-x-4">
                <Link to="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085c.626 1.956 2.444 3.379 4.6 3.419a9.967 9.967 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mihnevw
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Contact;
