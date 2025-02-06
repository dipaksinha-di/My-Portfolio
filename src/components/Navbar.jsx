import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="about" // Scroll to the "about" section
          smooth={true}
          duration={500}
          className="title-font font-medium text-white mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Dipak Sinha</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link
            to="projects" // Scroll to the "projects" section
            smooth={true}
            duration={500}
            className="mr-5 hover:text-white"
          >
            Past Work
          </Link>
          <Link
            to="skills" // Scroll to the "skills" section
            smooth={true}
            duration={500}
            className="mr-5 hover:text-white"
          >
            Skills
          </Link>
          <Link
            to="testimonials" // Scroll to the "testimonials" section
            smooth={true}
            duration={500}
            className="mr-5 hover:text-white"
          >
            Testimonials
          </Link>
        </nav>
        <Link
          to="contact" // Scroll to the "contact" section
          smooth={true}
          duration={500}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Hire Me
          <BsArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}
