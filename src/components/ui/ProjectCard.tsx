/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);



  return (
    <>
      <BentoCard delay={delay} className="group relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#e8a838]/30">
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              {project.logoUrl && (
                <img src={project.logoUrl} alt={`${project.name} logo`} className="w-9 h-9 rounded-lg object-contain bg-bg-primary p-1 ring-1 ring-border" />
              )}
              <h3 className="text-xl font-bold text-text-primary leading-tight">{project.name}</h3>
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed grow mb-5">{project.desc}</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-[#e8a838] bg-[#e8a838]/10 rounded-full border border-[#e8a838]/20">
                  {tag}
                </span>
              ))}
            </div>

            <button 
              onClick={() => project.hasViewableAssets ? setIsGalleryOpen(true) : null}
              className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all duration-300 border ${project.hasViewableAssets ? 'bg-bg-primary text-text-primary border-border hover:bg-[#e8a838] hover:text-white hover:border-[#e8a838]' : 'bg-bg-primary text-text-muted border-border opacity-50 cursor-not-allowed'}`}
            >
              {project.hasViewableAssets ? (
                <>
                  <Eye size={16} />
                  View Details
                </>
              ) : (
                'Details Unavailable'
              )}
            </button>
          </div>
        </div>
      </BentoCard>

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
