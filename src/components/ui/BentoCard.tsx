import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <div className={cn("bento-card", className)}>
      {children}
    </div>
  );
}
