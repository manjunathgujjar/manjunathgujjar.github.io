import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Features } from "./components/sections/Features";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <main className="bg-black min-h-screen text-[#E1E0CC]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Features />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
