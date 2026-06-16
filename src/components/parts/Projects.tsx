import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/projects.css";
import Card from "../ui/Card";
import projects from "../../data/projects.json";
import type { Project } from "../../types";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current!.querySelectorAll<HTMLElement>(".card");
      if (cards.length === 0) return;

      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });

      cards.forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          gsap.to(card, {
            rotateX: (y - 0.5) * -12,
            rotateY: (x - 0.5) * 12,
            transformPerspective: 800,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        (card as HTMLElement & { _gsapCleanup?: () => void })._gsapCleanup = () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        };
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      const section = sectionRef.current;
      const cards = section?.querySelectorAll<HTMLElement & { _gsapCleanup?: () => void }>(".card");
      cards?.forEach((card) => card._gsapCleanup?.());
    };
  }, []);

  return (
    <div id="projects" className="projects" ref={sectionRef}>
      {(projects as Project[]).map((project) => (
        <Card
          key={project.title}
          title={project.title}
          image={project.image}
          information={project.information}
          preview={project.preview}
          code={project.code}
        />
      ))}
    </div>
  );
};

export default Projects;
