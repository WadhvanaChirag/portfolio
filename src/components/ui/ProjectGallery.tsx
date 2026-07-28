/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Monitor, Tablet, Smartphone, Play, Pause, Info, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

// Type guard for checking if file is video
function isVideo(url: string) {
  return /\.(mp4|webm|mov)$/i.test(url);
}

function VideoPlayer({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full group cursor-pointer" onClick={togglePlay}>
      <video 
        ref={videoRef}
        src={src} 
        muted 
        loop 
        playsInline
        className="w-full h-auto object-cover" 
      />
      <div className={`absolute inset-0 flex items-center justify-center bg-black/20 dark:bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        <button className="w-16 h-16 rounded-full bg-[#e8a838]/90 flex items-center justify-center text-bg-primary shadow-xl backdrop-blur-md transform transition-transform group-hover:scale-110">
          {isPlaying ? <Pause size={28} /> : <Play size={28} className="translate-x-0.5" />}
        </button>
      </div>
    </div>
  );
}

export function ProjectGallery({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"info" | "mobile" | "tablet" | "laptop" | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-select first available tab
      if (project.details && project.details.length > 0) setActiveTab("info");
      else if (project.assets.laptop.length > 0) setActiveTab("laptop");
      else if (project.assets.tablet.length > 0) setActiveTab("tablet");
      else if (project.assets.mobile.length > 0) setActiveTab("mobile");
    } else {
      document.body.style.overflow = "unset";
      setActiveTab(null);
    }
  }, [isOpen, project]);

  if (!isOpen) return null;

  const tabs = [
    ...(project.details && project.details.length > 0 ? [{ id: "info", label: "Overview", icon: Info }] : []),
    ...(project.assets.laptop.length > 0 ? [{ id: "laptop", label: "Laptop", count: project.assets.laptop.length, icon: Monitor }] : []),
    ...(project.assets.tablet.length > 0 ? [{ id: "tablet", label: "Tablet", count: project.assets.tablet.length, icon: Tablet }] : []),
    ...(project.assets.mobile.length > 0 ? [{ id: "mobile", label: "Mobile", count: project.assets.mobile.length, icon: Smartphone }] : []),
  ] as const;

  const activeAssets = (activeTab && activeTab !== "info") ? project.assets[activeTab] : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/20 dark:bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl max-h-full bg-bg-card border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
            <div className="flex items-center gap-4">
              {project.logoUrl && (
                <img src={project.logoUrl} alt="Logo" className="w-10 h-10 rounded-xl bg-black/5 dark:bg-white/5 p-1 ring-1 ring-black/10 dark:ring-white/10 object-contain" />
              )}
              <div>
                <h3 className="text-xl font-bold text-text-primary">{project.name}</h3>
                <p className="text-sm text-text-secondary">Project Gallery</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-border text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Tabs */}
            <div className="flex justify-center gap-2 p-4 shrink-0 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "info" | "mobile" | "tablet" | "laptop")}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors z-0 ${
                    activeTab === tab.id ? "text-[#0e0e0e]" : "text-text-secondary hover:text-text-primary hover:bg-border"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon size={16} />
                    {tab.label}
                    {tab.count !== undefined && (
                      <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                        activeTab === tab.id ? "bg-black/20 text-[#0e0e0e]" : "bg-border text-text-secondary"
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </span>
                  
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 bg-[#e8a838] rounded-lg z-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            {activeTab === "info" ? (
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 pb-20">
                <div className="max-w-3xl mx-auto space-y-12">
                  <div className="relative">
                    <h4 className="text-2xl font-bold text-text-primary mb-4">Project Overview</h4>
                    <p className="text-lg text-text-secondary leading-relaxed mb-10">{project.desc}</p>
                    
                    <div className="space-y-10">
                      {project.details?.map((section, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                          className="relative"
                        >
                          {section.title && (
                            <h5 className="text-[1.05rem] font-semibold text-[#e8a838] mb-4">{section.title}</h5>
                          )}
                          <ul className="space-y-4">
                            {section.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-4 text-text-secondary leading-relaxed group">
                                <ArrowRight size={18} className="mt-0.5 text-text-muted group-hover:text-[#e8a838] transition-colors shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 pb-20">
                <div className={`grid gap-6 ${
                  activeTab === "mobile" 
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
                    : "grid-cols-1 md:grid-cols-2"
                }`}>
                {activeAssets.map((assetUrl, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group rounded-xl overflow-hidden border border-border bg-bg-primary aspect-auto"
                  >
                    {isVideo(assetUrl) ? (
                      <VideoPlayer src={assetUrl} />
                    ) : (
                      <img 
                        src={assetUrl} 
                        alt={`${project.name} ${activeTab} screenshot ${i + 1}`} 
                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
