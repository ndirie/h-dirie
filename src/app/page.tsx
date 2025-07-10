import About from "@/component/sections/about/about";
import Contact from "@/component/sections/contact/contact";
// import Experience from "@/component/sections/experience/Experience";
import Home from "@/component/sections/home/home";
import Projects from "@/component/sections/projects/projects";
import Services from "@/component/sections/services/services";
import Skills from "@/component/sections/skills/skills";
import { Box } from "@mui/material";

export default function PortfolioPage() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Home />
      <About />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Services />
      <Contact />
    </Box>
  );
}