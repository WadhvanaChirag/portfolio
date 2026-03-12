import { getProjectsData } from "@/lib/projects";
import { PortfolioHome } from "@/components/PortfolioHome";

export default function Home() {
  const projects = getProjectsData();
  
  return <PortfolioHome projects={projects} />;
}
