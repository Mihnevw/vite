import { Link } from "react-router-dom";

import Navigation from "./Nav";
import Footer from "./Footer";

const Resume = () => {
  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-4xl font-extrabold text-white text-center uppercase tracking-wider mb-6">
            My CV
          </h2>
          <p className="text-gray-300 text-lg text-center mb-6">
            Click the button below to see my CV.
          </p>
          <div className="flex justify-center">
            <Link
              to="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Download PDF
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resume;
