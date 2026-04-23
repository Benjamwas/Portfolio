import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Projects() {
  return (
    <div className="pt-20 pb-24 bg-burgundy-900">

      {/* HEADER */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Our Work
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.1 }
            }
          }}
          className="text-slate-300 text-lg"
        >
          A collection of scalable systems, automation tools, and AI-powered platforms
          designed to solve real business problems.
        </motion.p>

      </section>

      {/* PROJECT GRID */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.08,
                      duration: 0.6
                    }
                  }
                }}
                className="group bg-burgundy-800 border border-burgundy-700 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-burgundy-900/40 group-hover:bg-transparent transition duration-500 z-10" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8 flex flex-col h-full">

                  {/* TECH TAGS */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-burgundy-900 border border-burgundy-700 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-white group-hover:text-gold-400 transition"
                  >
                    {project.title}
                  </a>

                  {/* DESCRIPTION */}
                  <p className="text-slate-300 mt-3 mb-6 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* CTA */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-gold-400 font-semibold mt-auto group/link"
                  >
                    Read Case Study
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </div>
  );
}