import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-16 md:mb-20">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-text-secondary max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
