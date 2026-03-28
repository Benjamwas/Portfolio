import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
export function Projects() {
  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/30 border-b border-slate-200 dark:border-navy-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6">
            
            Our Work
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 20
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.1
                }
              }
            }}
            className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            
            Explore our portfolio of scalable digital solutions, business
            systems, and AI platforms.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) =>
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-50px'
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.6
                  }
                }
              }}
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
              
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) =>
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300">
                    
                        {tech}
                      </span>
                  )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-royal dark:group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                    {project.shortDescription}
                  </p>
                  <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-navy-900 dark:text-white font-semibold group/link mt-auto">
                  
                    Read Case Study
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}