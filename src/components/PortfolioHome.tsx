"use client";

import { motion } from "framer-motion";
import { Mail, Download, Smartphone, LayoutTemplate, Database, Code2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/projects";

const skills = [
  { category: "Mobile Development", items: "Flutter (Android, iOS & web)", icon: Smartphone },
  { category: "State Management", items: "Provider, GetX", icon: LayoutTemplate },
  { category: "Backend & Cloud", items: "Firebase (Notification, Auth)", icon: Database },
  { category: "Tools & Integrations", items: "Git, Xcode, In-App Purchases, AdMob, QR/Barcode", icon: Code2 },
];

const experience = [
  {
    role: "Freelance Flutter Developer",
    company: "Freelancing",
    period: "June 2025 – Present",
    desc: "Cross-platform developer specializing in iOS and macOS. From building the iPrinter ecosystem to managing Dorm Hub’s Apple deployment, I bridge the gap between code and the App Store"
  },
  {
    role: "Flutter Developer",
    company: "Microweb Solutions",
    period: "Feb 2023 – June 2025",
    desc: "Developed the Dairy Management System and Sampark Setu directory apps. Additionally, managed and optimized a large-scale School Management System, improving performance and integrating new features into the existing codebase."
  },
  {
    role: "Flutter Developer",
    company: "Zenzzen Private Limited",
    period: "April 2022 – Oct 2022",
    desc: "Developed e-commerce apps with order processing and Points & Reward Management Systems."
  },
  {
    role: "Android Developer",
    company: "Shiv Computers",
    period: "June 2020 – March 2022",
    desc: "Led development of a multi-role e-commerce app and SIM recharge platforms."
  }
];

export function PortfolioHome({ projects }: { projects: Project[] }) {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Using a radial gradient instead of a huge CSS blur for smooth 60fps performance */}
        <div className="absolute inset-x-0 inset-y-[-50%] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_60%)] -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Freelance Projects
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Transforming ideas into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              seamless mobile
            </span>{" "}
            experiences.
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm Chirag Wadhvana, a Results-driven Flutter Developer with 5+ years of experience building cross-platform apps for Android and iOS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full px-4 sm:px-0">
            <a href={process.env.NODE_ENV === 'production' ? "/portfolio/resume.pdf" : "/resume.pdf"} target="_blank" className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors">
              <Download size={18} />
              Download Resume
            </a>
            <a href="#projects" className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-colors">
              View Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 text-slate-400">
            <a href="mailto:wadhvana8866@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>
      </section>

      {/* Skills Bento Grid */}
      <Section id="skills" title="Technical Arsenal" subtitle="The tools and technologies I use to build scalable mobile applications.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <BentoCard key={skill.category} delay={index * 0.1} className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                <skill.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.category}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{skill.items}</p>
              </div>
            </BentoCard>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience" subtitle="A timeline of my professional journey in mobile development.">
        <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12 pb-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-white">{exp.role} <span className="text-blue-400">— {exp.company}</span></h3>
                <span className="text-sm text-slate-500 font-mono bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-2xl">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Bento Grid */}
      <Section id="projects" title="Project Portfolio" subtitle="A comprehensive collection of my professional apps and tools across all platforms.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} delay={index * 0.1} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 mt-20 text-center text-slate-500 text-sm">
        <p>© 2026 Chirag Wadhvana. All rights reserved.</p>
      </footer>
    </main>
  );
}
