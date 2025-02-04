import { useEffect, useState } from "react";

import axios from "axios";
import Navigation from "./Nav";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const githubUsername = "Mihnevw";

  useEffect(() => {
    //Зареждам публичните репозиторита от GitHub 
    //Когато използваме axios няма нужда от res.json() защото axios го прави автоматично
    axios
      .get(`https://api.github.com/users/${githubUsername}/repos`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        alert("Error loading projects from GitHub:", err);
      })
  }, [githubUsername]);

  const handleProjectClick = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-12 px-6">
        <h1 className="text-4xl font-extrabold text-center text-white uppercase tracking-wider mb-10">
          My GitHub Projects
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProjects;
