import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Building2,
  Zap,
  BrainCircuit,
  BarChart3,
  Palette,
  ArrowRight,
  Quote } from
'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { BrandTrust } from '../components/BrandTrust';
import { projects } from '../data/projects';
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
export function Home() {
  const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Custom Web Applications',
    description:
    'Modern full-stack applications using React, Node.js, and scalable architecture.'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Business Systems',
    description:
    'School systems, booking systems, dashboards, and admin platforms.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Automation & Workflows',
    description:
    'Automate repetitive processes using APIs, integrations, and tools like n8n.'
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: 'AI-Powered Solutions',
    description:
    'Personalized learning systems, smart recommendations, and intelligent platforms.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data Analysis & Dashboards',
    description:
    'Transform raw data into actionable insights using dashboards and reporting tools.'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Clean, intuitive, and conversion-focused interfaces.'
  }];

  const testimonials = [
  {
    quote:
    'Nexora transformed our manual booking process into a seamless digital experience. Our efficiency went up by 60% almost overnight.',
    author: 'Sarah Jenkins',
    role: 'Operations Director',
    company: 'AutoPro Services',
    avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    quote:
    'The AI learning platform they built for us completely changed how our students engage with the material. Highly recommended.',
    author: 'Dr. Michael Chen',
    role: 'Dean of Innovation',
    company: 'EduTech Institute',
    avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    quote:
    "Professional, scalable, and exactly what we needed. They don't just write code; they solve real business problems.",
    author: 'Elena Rodriguez',
    role: 'CEO',
    company: 'Global Consult',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-light dark:bg-dark z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl z-0 opacity-30 dark:opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal/40 dark:bg-royal/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/30 dark:bg-gold-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-navy-400/30 dark:bg-navy-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xKSIvPjwvc3ZnPg==')] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto">
            
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700 backdrop-blur-sm mb-8">
              
              <span className="flex h-2 w-2 rounded-full bg-royal dark:bg-gold-500"></span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Transforming Ideas into Scalable Digital Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-navy-900 dark:text-white leading-[1.1]">
              
              Building Scalable <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-blue-500 dark:from-gold-400 dark:to-gold-600">
                Digital Solutions
              </span>
              <br className="hidden md:block" />
              for Modern Businesses
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              
              We design and develop high-performance systems, automation tools,
              and AI-powered platforms that help businesses streamline
              operations, improve decision-making, and scale efficiently.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-navy-900 hover:bg-royal dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-900 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center">
                
                Start a Project
              </Link>
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white hover:bg-slate-50 dark:hover:bg-navy-700 rounded-lg font-semibold transition-all text-center">
                
                View Projects
              </Link>
            </motion.div>

            {/* Trust Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-navy-800">
              
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-navy-900 dark:text-white mb-2">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Systems Developed
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-navy-900 dark:text-white mb-2">
                  <AnimatedCounter value={100} suffix="k+" />
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Users Impacted
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-navy-900 dark:text-white mb-2">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  End-to-End Dev
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Capabilities
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We focus on solving business problems, not just writing code. Our
              expertise spans across the entire modern technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) =>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-50px'
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
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }
              }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-1">
              
                <div className="w-12 h-12 rounded-xl bg-royal/10 dark:bg-gold-500/10 flex items-center justify-center text-royal dark:text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Explore how we've helped businesses transform their operations
                through custom digital solutions.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-royal dark:text-gold-500 font-semibold hover:gap-3 transition-all">
              
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) =>
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
              className="group relative rounded-2xl overflow-hidden bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-xl transition-all duration-500">
              
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) =>
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
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-navy-900 dark:text-white font-semibold group/link">
                  
                    Read Case Study
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 dark:bg-navy-900/30 border-y border-slate-200 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Success Stories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Don't just take our word for it. Here's what our partners have to
              say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) =>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.95
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }
              }}
              className="glass-card p-8 rounded-2xl relative">
              
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 dark:text-navy-700" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-navy-700 shadow-sm" />
                
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic relative z-10">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Brand Trust Section */}
      <BrandTrust />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900 dark:bg-dark z-0" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal/20 to-transparent z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeInUp}>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Have a project or idea? <br />
              <span className="text-gold-400">
                Let's build something impactful.
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need a custom web application, an automated workflow,
              or an AI-powered platform, our team is ready to turn your vision
              into reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>);

}