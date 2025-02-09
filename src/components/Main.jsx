import { Link } from 'react-router-dom';

import Nav from "./Nav";
import Hero from "./Hero";
import Project from "./Project";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <div className="bg-indigo-500 p-6">

        <Nav />
        <Hero />
        <Project />
        <Testimonial />
        <Footer />

        <Link to="/skill" className="text-3xl font-bold underline text-center text-blue-900"></Link>
      </div>
    </>
  );
}

export default Main;
