import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Navigation from "./Nav";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const githubUsername = "Mihnevw";

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${githubUsername}/repos`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert("Error loading projects from GitHub: " + err);
        setLoading(false);
      });
  }, [githubUsername]);

  const handleProjectClick = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-12 px-6">
        <h1 className="text-4xl font-extrabold text-center text-white uppercase tracking-wider mb-10">
          My GitHub Projects
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search Projects... "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project.html_url)}
                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-transparent bg-white p-6 shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm min-h-[4rem]">
                      {project.description ? project.description : "No description"}
                    </p>
                    <div className="mt-4 flex justify-between text-gray-500 text-sm">
                      <span>⭐ {project.stargazers_count}</span>
                      <span>🍴 {project.forks_count}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-white">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-400">No projects found!</h3>
                <p className="mt-1 text-sm text-gray-500">Try adjusting your search or check back later.</p>
              </div>
            )}
          </div>
        )}
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
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085c.626 1.956 2.444 3.379 4.6 3.419a9.967 9.967 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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
};

export default AllProjects;
