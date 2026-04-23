import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Testimonials() {

  const testimonials = [
    {
      quote:
        'Apex transformed our manual booking process into a seamless digital experience. Our efficiency went up by 60% almost overnight.',
      author: 'Sarah Jenkins',
      role: 'Operations Director',
      company: 'AutoPro Services',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote:
        'The AI learning platform changed how students engage with content. We saw a 40% drop in attrition within months.',
      author: 'Dr. Michael Chen',
      role: 'Dean of Innovation',
      company: 'EduTech Institute',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote:
        'They don’t just build software—they solve business problems with precision and clarity.',
      author: 'Elena Rodriguez',
      role: 'CEO',
      company: 'Global Consult',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote:
        'The school management system eliminated paperwork and completely improved parent communication.',
      author: 'James Wilson',
      role: 'Principal',
      company: 'Oakridge Academy',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote:
        'Our website redesign doubled our leads within 3 months. The UX is world-class.',
      author: 'Amanda Foster',
      role: 'Marketing Director',
      company: 'Apex Financial',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      quote:
        'Automation saved us 20+ hours weekly. It feels like adding a full-time employee.',
      author: 'David Kim',
      role: 'Founder',
      company: 'TechFlow Logistics',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
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
          Client Success Stories
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-slate-300 text-lg"
        >
          Real businesses. Real systems. Real transformation.
        </motion.p>

      </section>

      {/* TESTIMONIAL GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: index * 0.08
                  }
                }
              }}
              className="relative bg-burgundy-800 border border-burgundy-700 rounded-2xl p-8 flex flex-col hover:border-gold-500/30 transition"
            >

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-500/20" />

              {/* Quote */}
              <p className="text-slate-300 italic leading-relaxed flex-grow mb-8">
                “{t.quote}”
              </p>

              {/* AUTHOR */}
              <div className="flex items-center gap-4 pt-6 border-t border-burgundy-700">

                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-gold-500/30"
                />

                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {t.author}
                  </h4>

                  <p className="text-xs text-slate-400">
                    {t.role}, {t.company}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}