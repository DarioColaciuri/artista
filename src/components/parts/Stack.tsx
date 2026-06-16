import { useRef, useEffect } from "react";
import "../css/stack.css";
import logos from "../../data/logos.json";
import type { Logo } from "../../types";

const Stack = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const logoElements = sectionRef.current?.querySelectorAll<HTMLElement>(".logo");
    if (!logoElements || logoElements.length === 0) return;

    logoElements.forEach((logo, i) => {
      logo.style.setProperty("--delay", `${i * 0.03}s`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    logoElements.forEach((logo) => observer.observe(logo));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="stack" className="stack" ref={sectionRef}>
      {(logos as Logo[]).map((logo) => (
        <img
          key={logo.title}
          title={logo.title}
          className="logo"
          src={logo.src}
          alt=""
        />
      ))}
    </div>
  );
};

export default Stack;
