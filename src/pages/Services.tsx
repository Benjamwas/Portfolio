import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Building2,
  Zap,
  BrainCircuit,
  BarChart3,
  Palette,
  Search,
  PenTool,
  Code,
  Rocket
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Services() {

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Custom Web Development',
      description:
        'High-performance web applications engineered for scalability, security, and business growth.',
      features: [
        'Single Page Applications',
        'Progressive Web Apps',
        'API Development',
        'Cloud Deployment'
      ]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Business Systems',
      description:
        'Replace fragmented tools with unified systems designed to optimize operations and visibility.',
      features: [
        'School Management Systems',
        'Booking Platforms',
        'Inventory Systems',
        'Admin Dashboards'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation & Integration',
      description:
        'Automate workflows and eliminate repetitive tasks through intelligent system connections.',
      features: [
        'API Integrations',
        'Workflow Automation',
        'Smart Triggers',
        'Reporting Systems'
      ]
    },
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: 'AI Solutions',
      description:
        'AI-powered systems that enhance decision-making, personalization, and efficiency.',
      features: [
        'AI Chatbots',
        'Recommendation Engines',
        'Predictive Models',
        'OpenAI Integration'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Intelligence',
      description:
        'Transform raw data into actionable business insights through modern dashboards.',
      features: [
        'Real-time Dashboards',
        'KPI Tracking',
        'Data Visualization',
        'Automated Reports'
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description:
        'Design systems that blend aesthetics with conversion-driven user experience.',
      features: [
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'User Testing'
      ]
    }
  ];

  const processSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Discovery',
      description: 'We analyze your business structure, workflows, and goals.'
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Architecture',
      description: 'We design system blueprints and user experience flows.'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Engineering',
      description: 'We build scalable, production-grade systems.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Launch',
      description: 'We deploy, optimize, and support your platform.'
    }
  ];

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
          Our Services
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-300"
        >
          End-to-end digital solutions engineered for performance, scalability, and impact.
        </motion.p>

      </section>

      {/* SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.08 }
                }
              }}
              className="bg-burgundy-800 border border-burgundy-700 rounded-2xl p-8 hover:border-gold-500/30 transition"
            >

              <div className="w-14 h-14 rounded-xl bg-burgundy-900 border border-burgundy-700 flex items-center justify-center text-gold-400 mb-6">
                {service.icon}
              </div>

              <h2 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h2>

              <p className="text-slate-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-burgundy-800">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gold-500 mb-12">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {processSteps.map((step, index) => (
              <div key={index} className="text-center">

                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-burgundy-900 border border-burgundy-700 flex items-center justify-center text-gold-400">
                  {step.icon}
                </div>

                <h3 className="text-white font-bold mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-300 text-sm">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}