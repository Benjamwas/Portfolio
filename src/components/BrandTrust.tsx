import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import vendraminiimg from '../assets/images/IMG-20250131-WA0025.jpg';
import oasisimg from '../assets/images/OASIS-LOGO-1024x1024.png';
import kutrrhimg from '../assets/images/kutrrh_logoAsset-8@4x-1-e1646987889806.png';


interface Brand {
  name: string;
  logo: string;
  website: string;
}

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export function BrandTrust() {
  const brands: Brand[] = [
    {
      name: 'Vendramini School',
      logo: vendraminiimg,
      website: 'https://vendraminischool.sc.ke'
    },
    {
      name: 'KUTRRH',
      logo: kutrrhimg,
      website: 'https://kutrrh.go.ke'
    },
    {
      name: 'Vendramini CTC',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200&h=100',
      website: 'https://vendraminictc.org'
    },
    {
      name: 'Ecotenable',
      logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200&h=100',
      website: 'https://ecotenable.com'
    },
    {
      name: 'Oasis of Life',
      logo: oasisimg,
      website: 'https://oasisoflifecentres.org'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      text: '"The team transformed our administrative processes completely. What took hours now takes minutes. Highly recommend!"',
      author: 'Vendramini administration',
      role: 'Administrator',
      company: 'Vendramini School',
      rating: 5
    },
    {
      text: '"Their expertise in healthcare systems is unmatched. Patient satisfaction has never been higher."',
      author: 'Prof. Kiula',
      role: 'Hospital Director of Technology',
      company: 'KUTRRH',
      rating: 5
    },
    {
      text: '"A fantastic platform for technical education. Our students are getting hired immediately after completion."',
      author: 'Sr. Martha',
      role: 'Administrator',
      company: 'Vendramini CTC',
      rating: 5
    },
    {
      text: '"Professional, responsive, and results-driven. Our lead generation has tripled since launch."',
      author: 'Ms. Emily Thompson',
      role: 'Marketing Director',
      company: 'Ecotenable',
      rating: 5
    },
    {
      text: '"The platform streamlined our operations across all centers. Patient retention improved significantly."',
      author: 'Dr. David Kiplagat',
      role: 'Wellness Coordinator',
      company: 'Oasis of Life',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-900/50 dark:to-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
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
                duration: 0.6
              }
            }
          }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We've partnered with organizations across education, healthcare, and
            environmental sectors to deliver transformative solutions
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              onClick={() => window.open(brand.website, '_blank')}
              className="group relative p-6 rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 hover:border-blue-400 dark:hover:border-blue-400 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[140px] cursor-pointer overflow-hidden"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <p className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center absolute">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-navy-800 rounded-xl p-8 border border-slate-200 dark:border-navy-700 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({
                    length: testimonial.rating
                  }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-slate-200 dark:border-navy-700"
        >
          {[
            {
              number: '5+',
              label: 'Enterprise Clients'
            },
            {
              number: '50K+',
              label: 'Users Served'
            },
            {
              number: '95%',
              label: 'Client Satisfaction'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
