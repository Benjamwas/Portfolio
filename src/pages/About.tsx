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
  Server
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function About() {

  const techStack = [
    { name: 'React.js', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
    { name: 'SQLite', icon: <Database className="w-6 h-6" /> },
    { name: 'Socket.IO', icon: <Globe className="w-6 h-6" /> },
    { name: 'REST APIs', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Automation Tools', icon: <Workflow className="w-6 h-6" /> },
    { name: 'Cloud Platforms', icon: <Globe className="w-6 h-6" /> },
    { name: 'AI & Machine Learning', icon: <Cpu className="w-6 h-6" /> },
    { name: 'DevOps & CI/CD', icon: <Server className="w-6 h-6" /> },
    { name: 'Cybersecurity', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Data Analytics', icon: <Database className="w-6 h-6" /> },
    { name: 'Microservices', icon: <Server className="w-6 h-6" /> },
    { name: 'Cloud Infrastructure', icon: <Globe className="w-6 h-6" /> },
    { name: 'AI Solutions', icon: <Cpu className="w-6 h-6" /> },
    { name: 'WordPress', icon: <Workflow className="w-6 h-6" /> },
    { name: 'Design', icon: <Eye className="w-6 h-6" /> }
  ];

  return (
    <div className="pt-20 pb-24 bg-burgundy-900">

      {/* HERO */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          About
          <span className="block text-gold-500">
            Apex Systems
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-300 mb-6"
        >
          We build scalable, intelligent, and high-performance systems
          that help businesses operate efficiently and grow faster.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-slate-400"
        >
          From automation to AI-powered platforms, we transform
          complex challenges into elegant digital solutions.
        </motion.p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-burgundy-800 p-10 rounded-2xl border border-burgundy-700"
          >
            <Target className="w-12 h-12 text-gold-500 mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-slate-300 leading-relaxed">
              To empower businesses through scalable digital systems that eliminate inefficiencies,
              improve decision-making, and drive measurable growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-burgundy-800 p-10 rounded-2xl border border-burgundy-700"
          >
            <Eye className="w-12 h-12 text-gold-500 mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-slate-300 leading-relaxed">
              To become a globally recognized leader in digital systems and AI-driven platforms,
              known for engineering excellence and real business impact.
            </p>
          </motion.div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-burgundy-800">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gold-500 mb-6">
            Technology Stack
          </h2>

          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
            We use modern, reliable technologies to build scalable and secure systems.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: index * 0.04
                    }
                  }
                }}
                className="flex items-center gap-3 px-5 py-3 bg-burgundy-900 border border-burgundy-700 rounded-xl hover:border-gold-500/30 transition"
              >
                <div className="text-gold-400">
                  {tech.icon}
                </div>

                <span className="text-white font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}