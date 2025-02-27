import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./Nav";
import teamData from "./TeamData";

function MemberDetail() {
  const { memberName } = useParams();
  const data = teamData[memberName];

  return (
    <>
      <div className="bg-gray-800 p-6">
        <Navigation />
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 uppercase tracking-wide">
            {data ? `Information for ${memberName}` : "Member Not Found"}
          </h2>

          {data ? (
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={data.image}
                  alt={memberName}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md"
                />
                <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800">{memberName}</h1>
                  <p className="text-xl text-gray-500 mb-4">Role: {data.role}</p>
                  <p className="text-gray-700">{data.bio}</p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
                {data.projects.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-700">
                    {data.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No projects available.</p>
                )}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {data.contact.email}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> {data.contact.phone}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">Sorry, this member does not exist.</p>
          )}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12 ">
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
                <Link to="/skill" className="hover:text-blue-400 transition-colors">
                  Skills
                </Link>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </Link>
                <Link to="/resume" className="hover:text-blue-400 transition-colors">
                  CV
                </Link>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
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
                  GitHub
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default MemberDetail;
