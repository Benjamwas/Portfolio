import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Code2,
  LayoutDashboard } from
'lucide-react';
import { projects } from '../data/projects';
export function CaseStudy() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);
  if (!project) return null;
  return (
    <div className="pt-20 pb-24 bg-white dark:bg-dark">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-navy-900/30 dark:from-dark dark:via-dark/80 dark:to-dark/30" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors">
            
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            
            {project.title}
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="flex flex-wrap gap-2">
            
            {project.techStack.map((tech) =>
            <span
              key={tech}
              className="text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-slate-200 backdrop-blur-sm border border-white/20">
              
                {tech}
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}>
                
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <LayoutDashboard className="w-6 h-6 text-royal dark:text-gold-500" />{' '}
                  Overview
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.overview}
                </p>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}>
                
                <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
                  The Problem
                </h2>
                <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}>
                
                <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">
                  The Solution
                </h2>
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-xl">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}>
                
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-royal dark:text-gold-500 shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-lg">
                        {feature}
                      </span>
                    </li>
                  )}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="glass-card p-6 rounded-xl">
                
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-royal dark:text-gold-500" />{' '}
                  Results & Impact
                </h3>
                <ul className="space-y-4">
                  {project.impact.map((item, index) =>
                  <li
                    key={index}
                    className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-b border-slate-100 dark:border-navy-700 pb-3 last:border-0 last:pb-0">
                    
                      {item}
                    </li>
                  )}
                </ul>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                className="glass-card p-6 rounded-xl">
                
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-royal dark:text-gold-500" />{' '}
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) =>
                  <span
                    key={tech}
                    className="text-xs font-semibold px-2.5 py-1.5 rounded bg-slate-100 dark:bg-navy-900 text-slate-700 dark:text-slate-300">
                    
                      {tech}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 mt-8 border-t border-slate-200 dark:border-navy-800 bg-slate-50 dark:bg-navy-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a similar solution?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Let's discuss how we can build a custom system to solve your
            business challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 hover:bg-royal dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-900 rounded-lg font-bold transition-all shadow-md hover:shadow-lg">
            
            Let's build your system
          </Link>
        </div>
      </section>
    </div>);

}