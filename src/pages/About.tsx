import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Code2,
  Database,
  Globe,
  Cpu,
  Workflow,
  Server } from
'lucide-react';
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
export function About() {
  const techStack = [
  {
    name: 'React.js',
    icon: <Code2 className="w-6 h-6" />
  },
  {
    name: 'Node.js',
    icon: <Server className="w-6 h-6" />
  },
  {
    name: 'MySQL',
    icon: <Database className="w-6 h-6" />
  },
  {
    name: 'SQLite',
    icon: <Database className="w-6 h-6" />
  },
  {
    name: 'Socket.IO',
    icon: <Globe className="w-6 h-6" />
  },
  {
    name: 'REST APIs',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    name: 'Automation Tools',
    icon: <Workflow className="w-6 h-6" />
  },
   {
    name: 'Cloud Platforms',
    icon: <Globe className="w-6 h-6" />
  },
   {
    name: 'AI & Machine Learning',
    icon: <Cpu className="w-6 h-6" />
  },
   {
    name: 'DevOps & CI/CD',
    icon: <Server className="w-6 h-6" />
  },
   {
    name: 'Cybersecurity',
    icon: <Code2 className="w-6 h-6" />
  },
   {
    name: 'Data Analytics',
    icon: <Database className="w-6 h-6" />
  },
   {
    name: 'Microservices Architecture',
    icon: <Server className="w-6 h-6" />
  },
   {
    name: 'Scalable Cloud Infrastructure',
    icon: <Globe className="w-6 h-6" />
  },
   {
    name: 'AI-Powered Solutions',
    icon: <Cpu className="w-6 h-6" />
  },
{    name: 'WordPress Development', 
    icon: <Workflow className="w-6 h-6" />
 },
 {
   name: 'Graphic Design',
   icon: <Eye className="w-6 h-6" />
 }

];

  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/30 border-b border-slate-200 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Apex Systems
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Apex Systems is a premium digital solutions company focused on
              building scalable, efficient, and intelligent software systems for
              modern businesses.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              We specialize in transforming complex business challenges into
              streamlined digital solutions, combining expert software
              engineering, workflow automation, and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={fadeInUp}
              className="glass-card p-10 rounded-2xl relative overflow-hidden group">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-royal/5 dark:bg-gold-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <Target className="w-12 h-12 text-royal dark:text-gold-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                To empower businesses through reliable and scalable digital
                systems. We build technology that works for you, eliminating
                inefficiencies and driving growth.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
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
                    delay: 0.2
                  }
                }
              }}
              className="glass-card p-10 rounded-2xl relative overflow-hidden group">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-royal/5 dark:bg-gold-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <Eye className="w-12 h-12 text-royal dark:text-gold-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                To become a leading global provider of business systems and
                AI-driven platforms, recognized for our engineering excellence
                and measurable business impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-50 dark:bg-navy-900/30 border-y border-slate-200 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We use modern, battle-tested technologies to ensure your systems
              are fast, secure, and scalable.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {techStack.map((tech, index) =>
            <motion.div
              key={tech.name}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.9
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: index * 0.05,
                    duration: 0.4
                  }
                }
              }}
              className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-xl shadow-sm hover:shadow-md hover:border-royal/30 dark:hover:border-gold-500/30 transition-all cursor-default">
              
                <div className="text-slate-500 dark:text-slate-400">
                  {tech.icon}
                </div>
                <span className="font-semibold text-navy-900 dark:text-white">
                  {tech.name}
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}