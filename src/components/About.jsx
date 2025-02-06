import React, { useEffect } from "react";
import heroImg from "../assets/hero.webp";
import { Link } from "react-scroll";
import Aos from "aos";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Dipak.
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <Link
              to="contact" // Scroll to the "about" section
              smooth={true}
              duration={500}
              className="inline-flex text-white bg-green-500 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
            >
              Work With Me
            </Link>

            <Link
              smooth={true}
              duration={500}
              to="projects"
              className="ml-4 inline-flex text-gray-400 cursor-pointer bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            data-aos="zoom-in-up"
            className="object-cover  object-center rounded"
            alt="hero"
            src={heroImg}
          />
        </div>
      </div>
    </section>
  );
}
