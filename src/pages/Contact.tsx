import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Send } from
'lucide-react';
import { toast } from 'sonner';
export function Contact() {
 const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget; // This "saves" the form reference
  setIsSubmitting(true);

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message')
  };

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      toast.success('Message sent successfully!');
      // FIX HERE: Use the 'form' variable, not 'e.currentTarget'
      form.reset(); 
    } else {
      toast.error('Failed to send message.');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    toast.error('An error occurred.');
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="py-20 bg-slate-50 dark:bg-navy-900/30 border-b border-slate-200 dark:border-navy-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-bold mb-6">
            
            Let's Build Something Impactful
          </motion.h1>
          <motion.p
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
            className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            
            Have a project in mind? Reach out to us and let's discuss how we can
            help your business scale.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="glass-card p-8 md:p-10 rounded-2xl">
              
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-navy-700 focus:ring-2 focus:ring-royal dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                      placeholder="John Doe" />
                    
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-navy-700 focus:ring-2 focus:ring-royal dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                      placeholder="john@company.com" />
                    
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-navy-700 focus:ring-2 focus:ring-royal dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="How can we help?" />
                  
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    
                    Message
                  </label>
                  <textarea
                    id="message"
                    name = "message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200 dark:border-navy-700 focus:ring-2 focus:ring-royal dark:focus:ring-gold-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white resize-none"
                    placeholder="Tell us about your project...">
                  </textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-navy-900 hover:bg-royal dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-900 rounded-lg font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  
                  {isSubmitting ?
                  'Sending...' :

                  <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  }
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="space-y-10">
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  We're currently accepting new projects. Fill out the form or
                  reach out to us directly via email or phone.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-royal/10 dark:bg-gold-500/10 flex items-center justify-center text-royal dark:text-gold-500 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 dark:text-white mb-1">
                        Email Us
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        benjamin@ecotenable.com
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        mwangib297@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-royal/10 dark:bg-gold-500/10 flex items-center justify-center text-royal dark:text-gold-500 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 dark:text-white mb-1">
                        Call Us
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        (+254) 739433017 / (+254) 759998244
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        Mon-Fri, 9am to 6pm EAT
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-royal/10 dark:bg-gold-500/10 flex items-center justify-center text-royal dark:text-gold-500 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 dark:text-white mb-1">
                        Visit Us
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Kahawa West, Nairobi
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-royal hover:text-white dark:hover:bg-gold-500 dark:hover:text-navy-900 transition-all">
                    
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/benjamin-mwangi-a389bb339/"
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-royal hover:text-white dark:hover:bg-gold-500 dark:hover:text-navy-900 transition-all">
                    
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/Benjamwas"
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-royal hover:text-white dark:hover:bg-gold-500 dark:hover:text-navy-900 transition-all">
                    
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-navy-900 dark:bg-navy-800 rounded-xl text-white">
                <h4 className="font-bold mb-2">Book a Consultation</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Schedule a free 30-minute discovery call with our technical
                  team.
                </p>
                <button className="px-6 py-2 bg-white text-navy-900 hover:bg-slate-100 rounded-lg font-semibold text-sm transition-colors w-full">
                  View Calendar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

}