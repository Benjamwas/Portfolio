import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
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
export function Testimonials() {
  const testimonials = [
  {
    quote:
    'Apex transformed our manual booking process into a seamless digital experience. Our efficiency went up by 60% almost overnight. The team was professional and understood our business needs perfectly.',
    author: 'Sarah Jenkins',
    role: 'Operations Director',
    company: 'AutoPro Services',
    avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    quote:
    "The AI learning platform they built for us completely changed how our students engage with the material. We've seen a 40% drop in student attrition. Highly recommended.",
    author: 'Dr. Michael Chen',
    role: 'Dean of Innovation',
    company: 'EduTech Institute',
    avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    quote:
    "Professional, scalable, and exactly what we needed. They don't just write code; they solve real business problems. The custom dashboard gives us insights we never had before.",
    author: 'Elena Rodriguez',
    role: 'CEO',
    company: 'Global Consult',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    quote:
    'Working with Apex Systems was a game-changer for our school. The management system they deployed eliminated mountains of paperwork and made parent communication effortless.',
    author: 'James Wilson',
    role: 'Principal',
    company: 'Oakridge Academy',
    avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    quote:
    'Our new corporate website not only looks incredibly premium but has doubled our lead generation in just three months. The UI/UX design is top-notch.',
    author: 'Amanda Foster',
    role: 'Marketing Director',
    company: 'Apex Financial',
    avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    quote:
    "The automated workflows they set up using n8n saved our team over 20 hours a week in manual data entry. It's like having an extra employee working 24/7.",
    author: 'David Kim',
    role: 'Founder',
    company: 'TechFlow Logistics',
    avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
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
            
            Client Success Stories
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
            
            Hear from the businesses we've helped transform through custom
            digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) =>
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
              className="glass-card p-8 rounded-2xl relative flex flex-col h-full">
              
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 dark:text-navy-700" />
                <p className="text-slate-600 dark:text-slate-300 italic relative z-10 flex-grow mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-slate-100 dark:border-navy-700">
                  <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-navy-700 shadow-sm" />
                
                  <div>
                    <h4 className="font-bold text-navy-900 dark:text-white text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

}