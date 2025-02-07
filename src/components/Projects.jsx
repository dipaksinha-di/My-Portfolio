import React from "react";
import { projects } from "../data";
import { BiCodeCurly } from "react-icons/bi";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BiCodeCurly size={40} className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Web Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have built projects like a news website, e-commerce platform,
            corporate website, and travel blog using React and Tailwind CSS. My
            work involves managing different states, utilizing hooks, animations
            with various libraries, and implementing Context API and Redux
            Toolkit for state management.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 space-y-4 ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative bg-slate-50 rounded-md">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full min-h-[250px] object-contain object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative rounded-md dura h-full min-h-[285px] z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
