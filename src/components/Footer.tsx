import React from 'react';
import { Link } from 'react-router-dom';
import {
  Hexagon,
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin } from
'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Hexagon className="w-8 h-8 text-royal dark:text-gold-500 fill-royal/20 dark:fill-gold-500/20" />
              <span className="font-bold text-xl tracking-tight text-navy-900 dark:text-white">
                Apex
                <span className="text-royal dark:text-gold-500">Systems</span>
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Transforming Ideas into Scalable Digital Solutions. We design and
              develop high-performance systems, automation tools, and AI-powered
              platforms.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-slate-400 hover:text-royal dark:hover:text-gold-400 transition-colors">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/benjamin-mwangi-a389bb339/"
                className="text-slate-400 hover:text-royal dark:hover:text-gold-400 transition-colors">
                
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Benjamwas"
                className="text-slate-400 hover:text-royal dark:hover:text-gold-400 transition-colors">
                
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-navy-900 dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Testimonials'].map(
                (item) =>
                <li key={item}>
                    <Link
                    to={
                    item === 'Home' ?
                    '/' :
                    `/${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-royal dark:hover:text-gold-400 transition-colors">
                    
                      {item}
                    </Link>
                  </li>

              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-navy-900 dark:text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
              'Custom Web Applications',
              'Business Systems',
              'Automation & Workflows',
              'AI-Powered Solutions',
              'Data Analysis',
              'UI/UX Design'].
              map((item) =>
              <li key={item}>
                  <Link
                  to="/services"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-royal dark:hover:text-gold-400 transition-colors">
                  
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-navy-900 dark:text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-royal dark:text-gold-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Kahawa West
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-royal dark:text-gold-500 shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  (+254)/0739433017 / (+254)/0759998244
                  <br />
                  Mon-Fri, 9am to 6pm EAT
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-royal dark:text-gold-500 shrink-0" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  apex28281@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Apex Systems. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
            <a
              href="#"
              className="hover:text-royal dark:hover:text-gold-400 transition-colors">
              
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-royal dark:hover:text-gold-400 transition-colors">
              
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}