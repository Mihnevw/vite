import Nav from "./Nav";
import Hero from "./Hero";
import Project from "./Project";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function Main() {
  return (
    <div className="bg-indigo-500 p-4">
      <Nav />
      <Hero />
      <Project />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Main