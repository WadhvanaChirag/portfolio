"use client";

import { useState } from "react";
import { Smartphone, Eye } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import type { Project } from "@/lib/projects";

function isVideo(url: string) {
  return /\.(mp4|webm|mov)$/i.test(url);
}

export function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // We find a front cover image (laptop preferred, then tablet, then mobile)
  const coverAsset = 
    project.assets.laptop[0] || 
    project.assets.tablet[0] || 
    project.assets.mobile[0];

  return (
    <>
      <BentoCard delay={delay} className="group relative overflow-hidden flex flex-col">
        <div className="relative z-10 flex flex-col h-full">
          {!project.logoUrl && !project.hasViewableAssets && (
            <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <Smartphone size={120} />
            </div>
          )}
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {project.logoUrl && (
                <img src={project.logoUrl} alt={`${project.name} logo`} className="w-10 h-10 rounded-xl object-contain bg-white/5 p-1.5 ring-1 ring-white/10" />
              )}
              <h3 className="text-xl font-bold text-white leading-tight">{project.name}</h3>
            </div>
            
            {/* The View Icon (subtle, next to title) */}
            {project.hasViewableAssets && (
              <button 
                onClick={() => setIsGalleryOpen(true)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors flex items-center gap-1 group/btn"
                title="View Gallery"
              >
                <Eye size={18} />
                <span className="text-xs font-medium opacity-0 group-hover/btn:opacity-100 -ml-2 group-hover/btn:ml-0 transition-all overflow-hidden w-0 group-hover/btn:w-auto">View</span>
              </button>
            )}
          </div>
          
          <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </BentoCard>

      {/* Render Gallery portal */}
      {project.hasViewableAssets && (
        <ProjectGallery 
          project={project} 
          isOpen={isGalleryOpen} 
          onClose={() => setIsGalleryOpen(false)} 
        />
      )}
    </>
  );
}
