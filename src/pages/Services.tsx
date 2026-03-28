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
  Rocket } from
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
export function Services() {
  const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Custom Web Development',
    description:
    'We build fast, secure, and scalable web applications tailored to your specific business needs. From customer portals to complex SaaS platforms.',
    features: [
    'Single Page Applications (SPAs)',
    'Progressive Web Apps (PWAs)',
    'API Development & Integration',
    'Cloud Hosting & Deployment']

  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: 'Business System Development',
    description:
    'Replace spreadsheets and disjointed tools with unified, custom-built business systems that streamline your operations.',
    features: [
    'School Management Systems',
    'Booking & Reservation Platforms',
    'Inventory Management',
    'Custom Admin Dashboards']

  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Automation & Workflow Integration',
    description:
    'Eliminate manual data entry and repetitive tasks by connecting your existing tools and automating complex workflows.',
    features: [
    'n8n & Zapier Integrations',
    'Custom API Connectors',
    'Automated Reporting',
    'Trigger-based Actions']

  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: 'AI Solutions',
    description:
    'Leverage the power of Artificial Intelligence to gain a competitive edge, personalize user experiences, and automate decision-making.',
    features: [
    'OpenAI Integration',
    'Personalized Recommendation Engines',
    'Smart Chatbots',
    'Predictive Analytics']

  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Data Analysis & Reporting',
    description:
    'Transform your raw business data into clear, actionable insights with custom dashboards and automated reporting tools.',
    features: [
    'Interactive Dashboards',
    'Real-time Data Visualization',
    'Custom KPI Tracking',
    'Automated Data Export']

  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description:
    'We design intuitive, accessible, and beautiful interfaces that users love and that drive conversions for your business.',
    features: [
    'Wireframing & Prototyping',
    'User Research & Testing',
    'Design Systems',
    'Conversion Rate Optimization']

  }];

  const processSteps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: '1. Discovery',
    description:
    'We dive deep into your business processes to understand your challenges, goals, and requirements.'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: '2. Design',
    description:
    'We create wireframes, prototypes, and system architectures to visualize the solution before writing any code.'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: '3. Development',
    description:
    'Our engineers build your system using modern, scalable technologies with regular progress updates.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: '4. Deployment',
    description:
    'We rigorously test, securely deploy, and provide ongoing support to ensure your system runs flawlessly.'
  }];

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
            
            Our Services
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
            
            Comprehensive digital solutions designed to optimize your
            operations, engage your users, and scale your business.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
              className="glass-card p-8 md:p-10 rounded-2xl">
              
                <div className="w-16 h-16 rounded-2xl bg-royal/10 dark:bg-gold-500/10 flex items-center justify-center text-royal dark:text-gold-500 mb-8">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) =>
                <li
                  key={fIndex}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  
                      <div className="w-1.5 h-1.5 rounded-full bg-royal dark:bg-gold-500" />
                      {feature}
                    </li>
                )}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-navy-900 dark:bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Development Process
            </h2>
            <p className="text-slate-400 text-lg">
              A proven, structured approach to delivering high-quality software
              on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

            {processSteps.map((step, index) =>
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
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.15,
                    duration: 0.5
                  }
                }
              }}
              className="relative z-10 flex flex-col items-center text-center">
              
                <div className="w-16 h-16 rounded-full bg-navy-800 border-4 border-navy-900 dark:border-dark flex items-center justify-center text-gold-500 mb-6 shadow-xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}