/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Mail, Download, Smartphone, Server, Wrench, Code2, Linkedin, Layers, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/ui/Section";
import { BentoCard } from "@/components/ui/BentoCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/projects";

const skills = [
  {
    category: "Mobile Development",
    items: "Flutter, Dart, Android (Java/Kotlin), iOS, Cross-platform apps for Android, iOS & Web",
    icon: Smartphone,
  },
  {
    category: "State Management & Architecture",
    items: "Provider, GetX, Clean Architecture, MVVM, Responsive & Adaptive UI",
    icon: Code2,
  },
  {
    category: "Backend & Cloud",
    items: "REST APIs, Firebase Auth, Firestore, FCM Push Notifications, Cloud Functions, Local Databases (Hive, SQLite)",
    icon: Server,
  },
  {
    category: "Tools & Integrations",
    items: "Git, Xcode, In-App Purchases, Google AdMob, QR/Barcode Scanning, Google Maps, App Store & Play Store Publishing",
    icon: Wrench,
  },
];

const experience = [
  {
    role: "Freelance Flutter Developer",
    company: "Self-employed",
    period: "June 2025 – Present",
    desc: "Currently working with the Dr. At Doorstep team to build and maintain healthcare mobile applications. Also built iPrinter (iOS + macOS) from scratch — handling document scanning, AirPrint integration, and in-app subscriptions — and successfully shipped Dorm Hub to the App Store.",
  },
  {
    role: "Flutter Developer",
    company: "Microweb Solutions",
    period: "Feb 2023 – June 2025",
    desc: "Built the Dairy Management System (customer app + delivery driver app) with Firebase notifications and REST API integration. Developed Sampark Setu, a school directory app with multi-filter search. Also maintained a large-scale School Management System — fixed performance issues and added ~10% new features.",
  },
  {
    role: "Flutter Developer",
    company: "Zenzzen Private Limited",
    period: "April 2022 – Oct 2022",
    desc: "Developed a multi-role cosmetic e-commerce system with 4 separate apps (Admin, Salesman, Distributor, Retailer). Built order tracking, credit/debit passbook, and a Points & Rewards app with QR/barcode scanning.",
  },
  {
    role: "Android Developer",
    company: "Shiv Computers",
    period: "June 2020 – March 2022",
    desc: "Built native Android apps in Java — a CCTV shop management system with 3 user interfaces (admin, employee, client), a B2B food ordering platform, and Arch V Money, a SIM recharge app for all telecom networks.",
  },
];

export function PortfolioHome({ projects }: { projects: Project[] }) {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Premium Hero */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-bg-primary pt-24 pb-12 lg:pt-0 lg:pb-0">
        
        {/* Background Gradients & Textures */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          {/* Massive Orange Glow behind left side */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(232,168,56,0.12)_0%,transparent_70%)] blur-[100px] rounded-full"
          />

          {/* Floating Geometric Shapes */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:block absolute top-[25%] right-[20%] w-16 h-16 border border-[#e8a838]/20 rounded-2xl rotate-12 backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:block absolute bottom-[25%] left-[55%] w-10 h-10 border border-[#e8a838]/30 rounded-full backdrop-blur-sm"
          />
        </div>

        <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Profile & Stats */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-12"
            >
              {/* Animated Gradient Ring */}
              <div className="absolute inset-0 -m-[4px] rounded-full bg-gradient-to-tr from-[#e8a838] via-[#f0b95b] to-transparent animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-0 -m-[4px] rounded-full bg-bg-primary" /> {/* Inner mask */}
              
              {/* Profile Image Container */}
              <div className="relative w-48 h-48 lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden border-[4px] border-bg-card shadow-[0_0_40px_rgba(232,168,56,0.15)] bg-bg-card z-10">
                <img 
                  src="/profile.png" 
                  alt="Chirag Wadhvana" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 lg:-bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/90 backdrop-blur-md border border-border shadow-lg whitespace-nowrap"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-text-primary">Available for Freelance</span>
              </motion.div>
            </motion.div>

            {/* Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 lg:gap-10 w-full max-w-[380px] text-center lg:text-right"
            >
              <div>
                <div className="text-3xl lg:text-[34px] leading-tight font-bold text-text-primary mb-1">5+</div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-3xl lg:text-[34px] leading-tight font-bold text-text-primary mb-1">15+</div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-xl lg:text-2xl font-bold text-text-primary mb-1 mt-1 lg:mt-1.5 leading-tight">Android<br className="hidden lg:block"/> & iOS</div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wider mt-1 lg:mt-1.5">Published</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Typography & CTAs */}
          <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="inline-block text-sm font-bold tracking-[0.2em] text-[#e8a838] uppercase mb-6">
                Mobile Engineer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-text-primary leading-[1.1] mb-6">
                Building mobile apps <br className="hidden sm:block" />
                <span className="text-text-muted">that users love.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-[17.5px] lg:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                I help startups and businesses build reliable, high-performance mobile applications from scratch.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12 max-w-2xl"
            >
              {['Clean Architecture', 'Production Ready Apps', 'App Store & Play Store', 'Firebase Integration'].map((highlight) => (
                <span 
                  key={highlight} 
                  className="px-4 py-2 bg-bg-card border border-border text-text-primary text-[14px] font-medium rounded-full hover:scale-105 hover:border-[#e8a838]/50 transition-all cursor-default shadow-sm"
                >
                  {highlight}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-text-primary text-bg-primary rounded-xl font-bold text-[15px] transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
              >
                View Projects
              </a>
              <a
                href={process.env.NODE_ENV === "production" ? "/portfolio/resume.pdf" : "/resume.pdf"}
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-bg-card border border-border text-text-primary rounded-xl font-bold text-[15px] transition-all hover:bg-bg-card-hover hover:scale-[1.02]"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-10 text-text-muted"
            >
              <a href="https://www.linkedin.com/in/chirag-wadhvana-79a417187" target="_blank" className="hover:text-[#e8a838] transition-colors" title="LinkedIn"><Linkedin size={22} /></a>
              <a href="mailto:wadhvana8866@gmail.com" className="hover:text-[#e8a838] transition-colors" title="Email"><Mail size={22} /></a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Premium About Section */}
      <section id="about" className="relative py-20 lg:py-[120px] bg-bg-card overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(232,168,56,0.12)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold tracking-[0.2em] text-[#e8a838] uppercase mb-4 block">
              About
            </span>
            <h2 className="text-[36px] sm:text-[42px] lg:text-[52px] leading-[1.15] font-bold text-text-primary mb-8">
              Engineering with purpose.
            </h2>
            <div className="text-[17.5px] text-text-secondary leading-relaxed space-y-6 max-w-3xl mx-auto text-left sm:text-center">
              <p>
                I help startups, businesses, and individuals build reliable Android and iOS apps using Flutter. Whether it&apos;s a new app, adding features, fixing bugs, or improving an existing project, I enjoy turning ideas into working products.
              </p>
              <p>
                I also use modern AI tools like Cursor, Claude, and Antigravity to work more efficiently. I believe AI is a great development assistant, but I rely on my own experience for architecture, problem-solving, debugging, and final code decisions. My goal is to deliver quality work, not just generate code.
              </p>
              <p>
                I believe in clean code, clear communication, and delivering projects on time. If you&apos;re looking for a developer who can take true ownership of your project, let&apos;s connect.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 mt-12 pt-12 border-t border-border">
              <div>
                <div className="text-[32px] leading-none font-bold text-text-primary mb-2">5+</div>
                <div className="text-[13px] text-text-muted font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-[32px] leading-none font-bold text-text-primary mb-2">15+</div>
                <div className="text-[13px] text-text-muted font-medium uppercase tracking-wider">Projects Built</div>
              </div>
              <div>
                <div className="text-[28px] leading-none font-bold text-text-primary mb-2">Android & iOS</div>
                <div className="text-[13px] text-text-muted font-medium uppercase tracking-wider">Published Apps</div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12">
              <a href="mailto:wadhvana8866@gmail.com" className="group relative inline-flex items-center justify-center gap-3 text-[16px] font-bold text-white bg-gradient-to-r from-[#e8a838] to-[#f0b95b] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_8px_25px_rgba(232,168,56,0.35)] hover:-translate-y-1">
                Let&apos;s Work Together
                <svg className="transition-transform duration-300 group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 lg:py-[120px] bg-bg-primary overflow-hidden border-y border-border/50">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-[0.2em] text-[#e8a838] uppercase mb-4 block">
              Skills
            </span>
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.15] font-bold text-text-primary">
              My Technical Arsenal
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Block 1 */}
            <div className="group transition-all duration-300 hover:-translate-y-2 bg-bg-card p-8 rounded-[24px] border border-border shadow-sm hover:shadow-lg">
              <div className="h-14 w-14 rounded-2xl bg-[#e8a838]/10 text-[#e8a838] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-8 group-hover:shadow-lg group-hover:shadow-[#e8a838]/20">
                <Smartphone size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-3">Mobile</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-6">Native-like performance across all major platforms from a single codebase.</p>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart', 'Android (Java/Kotlin)', 'iOS', 'Web'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-bg-primary text-text-primary text-[14px] rounded-full font-medium border border-border transition-transform duration-300 group-hover:-translate-y-[2px]">{tag}</span>
                ))}
              </div>
            </div>

            {/* Block 2 */}
            <div className="group transition-all duration-300 hover:-translate-y-2 bg-bg-card p-8 rounded-[24px] border border-border shadow-sm hover:shadow-lg">
              <div className="h-14 w-14 rounded-2xl bg-[#e8a838]/10 text-[#e8a838] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-8 group-hover:shadow-lg group-hover:shadow-[#e8a838]/20">
                <Layers size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-3">Architecture</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-6">Scalable, maintainable code structures designed for long-term growth.</p>
              <div className="flex flex-wrap gap-2">
                {['Clean Architecture', 'Provider', 'GetX', 'MVVM'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-bg-primary text-text-primary text-[14px] rounded-full font-medium border border-border transition-transform duration-300 group-hover:-translate-y-[2px]">{tag}</span>
                ))}
              </div>
            </div>

            {/* Block 3 */}
            <div className="group transition-all duration-300 hover:-translate-y-2 bg-bg-card p-8 rounded-[24px] border border-border shadow-sm hover:shadow-lg">
              <div className="h-14 w-14 rounded-2xl bg-[#e8a838]/10 text-[#e8a838] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-8 group-hover:shadow-lg group-hover:shadow-[#e8a838]/20">
                <Server size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-3">Data & APIs</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-6">Seamless integration with external APIs and efficient local data storage.</p>
              <div className="flex flex-wrap gap-2">
                {['REST APIs', 'Firebase', 'SQLite', 'Hive'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-bg-primary text-text-primary text-[14px] rounded-full font-medium border border-border transition-transform duration-300 group-hover:-translate-y-[2px]">{tag}</span>
                ))}
              </div>
            </div>

            {/* Block 4 */}
            <div className="group transition-all duration-300 hover:-translate-y-2 bg-bg-card p-8 rounded-[24px] border border-border shadow-sm hover:shadow-lg">
              <div className="h-14 w-14 rounded-2xl bg-[#e8a838]/10 text-[#e8a838] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-8 group-hover:shadow-lg group-hover:shadow-[#e8a838]/20">
                <Wrench size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] font-bold text-text-primary mb-3">Tools</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-6">Modern toolchain for efficient mobile development and deployment.</p>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Xcode', 'In-App Purchases', 'Google Maps', 'Play Store Publishing'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-bg-primary text-text-primary text-[14px] rounded-full font-medium border border-border transition-transform duration-300 group-hover:-translate-y-[2px]">{tag}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-10 md:space-y-16 pb-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 group"
            >
              <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-bg-card border-2 border-[#e8a838] shadow-[0_0_8px_rgba(232,168,56,0.4)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#e8a838]" />
              <div className="bg-bg-card p-6 md:p-8 rounded-2xl border border-border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:border-[#e8a838]/30">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-3">
                  <h3 className="text-[20px] font-bold text-text-primary">
                    {exp.role} <span className="text-[#e8a838] font-semibold">— {exp.company}</span>
                  </h3>
                  <span className="text-sm text-text-muted font-mono bg-bg-primary px-3 py-1.5 rounded-lg w-fit border border-border shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-text-secondary leading-relaxed text-[15px]">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Real apps, shipped and in production.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} delay={index * 0.1} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-16 border-t border-border bg-bg-card mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <div className="text-center md:text-left max-w-sm">
              <p className="text-text-primary font-bold text-2xl mb-2">Let&apos;s build something great.</p>
              <p className="text-text-secondary text-sm mb-4">Open to exciting freelance opportunities and collaborations.</p>
              <a href="mailto:wadhvana8866@gmail.com" className="inline-flex text-[#e8a838] hover:text-[#f0b95b] font-medium transition-colors text-sm">
                wadhvana8866@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-6 text-text-muted">
              <a href="mailto:wadhvana8866@gmail.com" className="hover:text-[#e8a838] transition-colors hover:scale-110" title="Email"><Mail size={24} /></a>
              <a href="https://www.linkedin.com/in/chirag-wadhvana-79a417187" target="_blank" className="hover:text-[#e8a838] transition-colors hover:scale-110" title="LinkedIn"><Linkedin size={24} /></a>
              <a href={process.env.NODE_ENV === "production" ? "/portfolio/resume.pdf" : "/resume.pdf"} target="_blank" className="hover:text-[#e8a838] transition-colors hover:scale-110" title="Resume"><Download size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
