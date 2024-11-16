import React from "react";
import church from "../assets/assets/Projects/church.png"
import business from "../assets/assets/Projects/Business.png"
import hospital from "../assets/assets/Projects/Hospital.png"
import sketchUp3D from "../assets/assets/Projects/SketchUpPlaystore..png"

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Project 1 */}
        <div className="border-b border-neutral-900 pb-4">
          <img
            src={business}
            alt="Business website"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Ecotenable solutions</h3>
            <p className="mt-2 text-sm">
              Ecotenable Solutions
            </p>
            <a
              href="https://portfolio.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border-b border-neutral-900 pb-4">
          <img
            src={church}
            alt="Church Website"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Church Website</h3>
            <p className="mt-2 text-sm">
              A church website with a focus on modern UI/UX design.
            </p>
            <a
              href="https://ecommerce.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border-b border-neutral-900 pb-4">
          <img
            src={hospital}
            alt="Hospital website"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Kenyatta Unviversity Teaching Research and Referral Hospital (KUTRRH)</h3>
            <p className="mt-2 text-sm">
              A Health care website
            </p>
            <a
              href="https://taskmanager.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="border-b border-neutral-900 pb-4">
          <img
            src={sketchUp3D}
            alt="SketchUpplaystore"
            className="w-full h-48 object-cover"
            
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">SketchUpPlaystore</h3>
            <p className="mt-2 text-sm">
              A 3D website for interior designers inspo and downloadable files
            </p>
            <a
              href="https://chatapp.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-cyan-400 hover:text-cyan-300 underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
