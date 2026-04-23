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
  Quote
} from 'lucide-react';

import { AnimatedCounter } from '../components/AnimatedCounter';
import { BrandTrust } from '../components/BrandTrust';
import { projects } from '../data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function Home() {

  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Custom Web Applications',
      description: 'Modern full-stack systems built for scale and performance.'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Business Systems',
      description: 'Dashboards, booking systems, and enterprise platforms.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automation',
      description: 'Eliminate manual work with smart integrations.'
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: 'AI Solutions',
      description: 'Intelligent systems powered by data and machine learning.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data & Analytics',
      description: 'Transform data into insights and decisions.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Elegant, intuitive, and conversion-driven interfaces.'
    }
  ];

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 bg-burgundy-900">

        {/* Background glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/20 blur-3xl rounded-full animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-burgundy-600/30 blur-3xl rounded-full animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >

            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy-800 border border-burgundy-700 mb-8"
            >
              <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
              <span className="text-sm text-slate-300">
                Premium Digital Engineering
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6"
            >
              Building
              <span className="block bg-gradient-to-r from-gold-400 to-gold-600 text-transparent bg-clip-text">
                Scalable Digital Systems
              </span>
              for Modern Businesses
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-300 max-w-2xl mx-auto mb-10"
            >
              We design and build high-performance platforms, automation systems,
              and AI-powered solutions that drive growth and efficiency.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-burgundy-900 font-semibold rounded-lg shadow-lg transition"
              >
                Start a Project
              </Link>

              <Link
                to="/projects"
                className="px-8 py-4 bg-burgundy-800 border border-burgundy-700 text-white rounded-lg"
              >
                View Work
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-8 mt-20 border-t border-burgundy-700 pt-10"
            >
              <div>
                <div className="text-4xl font-bold text-gold-500">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <p className="text-slate-400 text-sm">Systems Built</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-gold-500">
                  <AnimatedCounter value={100} suffix="k+" />
                </div>
                <p className="text-slate-400 text-sm">Users Impacted</p>
              </div>

              <div>
                <div className="text-4xl font-bold text-gold-500">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <p className="text-slate-400 text-sm">Delivery Rate</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-burgundy-900">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gold-500 mb-6">
            Core Capabilities
          </h2>

          <p className="text-slate-300 mb-16 max-w-2xl mx-auto">
            We don’t just write code — we engineer scalable systems that solve real business problems.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-burgundy-800 p-8 rounded-2xl border border-burgundy-700"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gold-500/10 text-gold-400 rounded-xl mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-300">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-burgundy-800">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between mb-12">
            <h2 className="text-4xl font-bold text-gold-500">Featured Work</h2>

            <Link
              to="/projects"
              className="text-gold-400 flex items-center gap-2"
            >
              View All <ArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="bg-burgundy-900 rounded-2xl overflow-hidden border border-burgundy-700"
              >
                <img src={p.image} className="w-full h-60 object-cover" />

                <div className="p-6">
                  <h3 className="text-2xl text-white font-bold mb-2">
                    {p.title}
                  </h3>

                  <p className="text-slate-300 mb-4">
                    {p.shortDescription}
                  </p>

                  <Link
                    to={`/projects/${p.slug}`}
                    className="text-gold-400 flex items-center gap-2"
                  >
                    Case Study <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-burgundy-900">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl text-gold-500 font-bold mb-16">
            Client Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div
                key={i}
                className="bg-burgundy-800 p-8 rounded-2xl border border-burgundy-700"
              >
                <Quote className="text-gold-400 mb-4" />
                <p className="text-slate-300 italic mb-6">
                  “Exceptional work, scalable systems, and true business impact.”
                </p>
                <h4 className="text-white font-bold">Client Name</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      <BrandTrust />

      {/* CTA */}
      <section className="py-24 bg-burgundy-900 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Build Something Powerful?
        </h2>

        <p className="text-slate-300 mb-8">
          Let’s transform your idea into a scalable digital product.
        </p>

        <Link
          to="/contact"
          className="px-8 py-4 bg-gold-500 text-burgundy-900 font-bold rounded-lg"
        >
          Start a Project
        </Link>
      </section>

    </div>
  );
}