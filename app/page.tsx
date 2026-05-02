import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Activities />
        <Skills />
        <Connect />
      </main>
      <footer
        className="text-center py-6 text-xs text-gray-400"
        style={{ backgroundColor: "var(--navy)", color: "rgba(255,255,255,0.3)" }}
      >
        © {new Date().getFullYear()} Marcos Cisneros · Notre Dame &apos;27
      </footer>
    </>
  );
}
