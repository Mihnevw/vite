

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mihnevw</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400 transition">Skills</a>
          <a href="#" className="hover:text-gray-400 transition">Project</a>
          <a href="#" className="hover:text-gray-400 transition">Testimonials</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer