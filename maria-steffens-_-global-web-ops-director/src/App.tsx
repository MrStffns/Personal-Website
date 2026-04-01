/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ArrowRight, 
  Globe, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  Users, 
  CheckCircle2,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface TimelineItem {
  year: string;
  role: string;
  description: string;
}

interface CaseStudy {
  title: string;
  tag: string;
  description: string;
  metrics: string[];
  icon: React.ReactNode;
}

// --- Data ---
const JOURNEY: TimelineItem[] = [
  { year: "Aug 2024 - now", role: "Director, Global Web Operations", description: "Bentley Systems" },
  { year: "Oct 2022 – Aug 2024", role: "Senior Manager, Web Operations", description: "Bentley Systems" },
  { year: "May 2017 – Oct 2022", role: "Manager Digital Marketing", description: "Bentley Systems" },
  { year: "Jan 2015 – 2017", role: "Web Design Manager", description: "Bentley Systems" },
  { year: "Jan 2010 – Jan 2015", role: "Web and Email Project Coordinator", description: "Bentley Systems" },
  { year: "Mar. 2007 – Jan. 2010", role: "DIRECT Marketing", description: "Bentley Systems" },
  { year: "May 2005 – Mar 2007", role: "Regional Marketing Manager Eastern Europe (EE)", description: "Bentley Systems" },
  { year: "Nov 2003 - May 2005", role: "Marketing Assistant Central Europe (CE)", description: "Bentley Systems" },
];

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "The Global Migration",
    tag: "Infrastructure",
    description: "Migrated Bentley.com from Sitecore to WordPress across 11 languages, establishing full ADA/WCAG compliance.",
    metrics: ["11 Languages", "ADA Compliant", "Zero Downtime"],
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "AI & Workflow Automation",
    tag: "Innovation",
    description: "Developed a custom ClickUp QA agent to automate SEO and grammar checks, saving 40+ hours of manual review weekly.",
    metrics: ["40h/week saved", "100% SEO Accuracy", "Automated QA"],
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Conversion Optimization",
    tag: "Marketing",
    description: "Redesigned global sales funnels and lead capture systems to maximize pipeline efficiency.",
    metrics: ["58% to 22% Dropouts", "Peak Web Vitals", "2.5x Lead Gen"],
    icon: <BarChart3 className="w-6 h-6" />
  }
];

const TECH_STACK = [
  { category: "CMS & Platforms", skills: ["Sitecore", "WordPress", "Adobe Experience Manager", "Shopify"] },
  { category: "Analytics & Data", skills: ["Adobe Analytics", "Google Analytics 4", "Power BI", "Hotjar"] },
  { category: "Ops & Security", skills: ["AWS/Azure", "OneTrust", "CSP Management", "ClickUp Automation"] },
  { category: "Leadership", skills: ["Team Management (20+)", "Global Strategy", "Budgeting", "Vendor Relations"] },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-brand-500 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-zinc-200/10 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl tracking-tighter">
            MARIA<span className="text-brand-500">.STEFFENS</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium opacity-70">
              <a href="#journey" className="hover:opacity-100 transition-opacity">Journey</a>
              <a href="#portfolio" className="hover:opacity-100 transition-opacity">Portfolio</a>
              <a href="#stack" className="hover:opacity-100 transition-opacity">Stack</a>
            </div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold tracking-widest uppercase mb-6">
                Director of Global Web Operations
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
                Orchestrating <br />
                <span className="text-zinc-500 dark:text-zinc-400 italic">Global Digital</span> <br />
                Experiences.
              </h1>
              <p className="text-lg md:text-xl opacity-70 max-w-2xl mb-10 leading-relaxed">
                Blending 20 years of digital marketing strategy with deep technical web infrastructure 
                to drive global transformations for industry leaders.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  View Case Studies <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 rounded-full font-semibold flex items-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trusted By / Logos */}
        <section className="py-12 border-y border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-8">Trusted by Global Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-bold tracking-tighter">BENTLEY SYSTEMS</span>
              <span className="text-2xl font-bold tracking-tighter">BOSCH</span>
              <span className="text-2xl font-bold tracking-tighter">SITECORE</span>
              <span className="text-2xl font-bold tracking-tighter">MICROSOFT</span>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="section-padding overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Ascent.</h2>
              <p className="opacity-70 text-lg">
                A remarkable 20+ year journey of growth, loyalty, and adaptation at Bentley Systems. 
                From a regional assistant to a global director, orchestrating digital transformation at scale.
              </p>
            </div>

            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 dark:before:via-zinc-800 before:to-transparent">
              {JOURNEY.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                >
                  {/* Icon/Dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 dark:bg-zinc-950 dark:border-zinc-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-brand-500">
                     <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-brand-500/50 transition-colors">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-brand-500 font-bold text-sm tracking-tight">{item.year}</span>
                      <h3 className="text-xl font-bold leading-tight">{item.role}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-px w-4 bg-zinc-300 dark:bg-zinc-700" />
                        <p className="opacity-60 text-xs font-bold uppercase tracking-widest">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 max-w-2xl mx-auto">
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Global Leadership</h4>
                  <p className="opacity-60 text-sm leading-relaxed">
                    Currently managing a high-performing cross-functional team of 20+ experts across 
                    SEO, Development, Design, and Analytics, driving Bentley's global digital presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Case Studies */}
        <section id="portfolio" className="section-padding bg-zinc-100 dark:bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">Strategic Wins.</h2>
              <p className="opacity-60">High-performance solutions for complex global challenges.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
                    {study.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500 mb-2 block">{study.tag}</span>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-sm opacity-60 mb-8 leading-relaxed">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium">
                        <CheckCircle2 className="w-3 h-3 text-brand-500" /> {m}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Matrix */}
        <section id="stack" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The Toolkit.</h2>
              <p className="opacity-60">A visual grid of the platforms and skills I command.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden">
              {TECH_STACK.map((group, index) => (
                <div key={index} className="bg-white dark:bg-zinc-950 p-8">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest opacity-40 mb-6">{group.category}</h4>
                  <ul className="space-y-4">
                    {group.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-zinc-900 text-zinc-100 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-px h-full bg-white/20" />
              <div className="absolute top-0 left-2/4 w-px h-full bg-white/20" />
              <div className="absolute top-0 left-3/4 w-px h-full bg-white/20" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Ready to scale your <br /> web operations?</h2>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a 
                href="mailto:maria1steffens@gmail.com" 
                className="px-10 py-5 bg-brand-500 text-white rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform"
              >
                <Mail className="w-5 h-5" /> Get in Touch
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                className="px-10 py-5 border border-white/20 rounded-full font-bold flex items-center gap-3 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono font-bold tracking-tighter opacity-50">
            MARIA.STEFFENS © 2026
          </div>
          <div className="flex gap-8 text-sm font-medium opacity-50">
            <a href="#" className="hover:opacity-100">Privacy</a>
            <a href="#" className="hover:opacity-100">Terms</a>
            <a href="mailto:maria1steffens@gmail.com" className="hover:opacity-100">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
