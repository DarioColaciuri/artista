import { useEffect, useState, lazy, Suspense } from "react";
import Hero from "./components/parts/Hero";
import Navbar from "./components/ui/Navbar";

const Projects = lazy(() => import("./components/parts/Projects"));
const Stack = lazy(() => import("./components/parts/Stack"));
const Music = lazy(() => import("./components/parts/Music"));
const About = lazy(() => import("./components/parts/About"));

const SectionFallback = () => (
  <div style={{ height: "60vh" }} />
);

function App() {
  const [isBackdrop, setIsBackdrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsBackdrop(scrollPosition >= window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isBackdrop={isBackdrop} />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Stack />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Music />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
    </>
  );
}

export default App;
