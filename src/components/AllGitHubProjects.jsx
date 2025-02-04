import { useEffect, useState } from "react";

import axios from "axios";
import Navigation from "./Nav";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const githubUsername = "Mihnevw";

  useEffect(() => {
    // Зареждам публичните репозитории от GitHub.
    // Когато използваме axios няма нужда от res.json() защото axios го прави автоматично
    axios
      .get(`https://api.github.com/users/${githubUsername}/repos`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        alert("Error loading projects from GitHub: " + err);
      });
  }, [githubUsername]);

  const handleProjectClick = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  // Филтрирам проектите по име.
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
              <h3 className="mt-2 text-sm font-medium text-gray-400">
                No projects found!
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or check back later.
              </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProjects;
