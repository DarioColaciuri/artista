import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const photoRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        if (!photoRef.current || !textRef.current) return;

        gsap.from(photoRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          x: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      mm.add("(max-width: 900px)", () => {
        if (!photoRef.current || !textRef.current) return;

        gsap.from(photoRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      });

      if (linksRef.current?.children) {
        gsap.from(linksRef.current.children, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div id="about" className="about" ref={sectionRef}>
      <img ref={photoRef} className="photo" src="/images/cara.jpg" alt="Dario Colaciuri" />
      <p ref={textRef} className="text">
        My name is <strong>Dario Colaciuri</strong> and I'm a{" "}
        <strong>frontend developer.</strong>
        <br /> Since childhood, I've had an insatiable curiosity for
        computers. Growing up with a computer at home, even one with a
        black-and-white monitor running Windows 3.1, I began exploring early
        web development through Dreamweaver, PHP, and CSS. However, life led
        me down another path: music. I pursued formal studies at the
        "Conservatorio Superior de Música Manuel de Falla" and have dedicated
        over a decade to teaching, researching, and learning with my students,
        discovering a deep passion for pedagogy. Throughout my career in
        music, I never lost touch with technology. I continued to explore and
        work in the field of computing, repairing computers and more recently
        expanding my skills into programming. I've taken on freelance
        development projects and am now seeking a more formal position that
        allows me to fully develop my potential as a programmer, combining my
        creativity, technical skills, and passion for learning.
      </p>
      <ul ref={linksRef} className="links">
        <a
          rel="noopener noreferrer"
          target="_blank"
          title="Email"
          href="mailto:dariocolaciuri@gmail.com"
        >
          <i className="bi bi-envelope-at"></i>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          title="GitHub"
          href="https://github.com/DarioColaciuri"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn"
          href="https://www.linkedin.com/in/dariocolaciuri/"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          title="Resume"
          href="/docs/dariocolaciuri_resume.pdf"
        >
          <i className="bi bi-file-earmark-person"></i>
        </a>
      </ul>
    </div>
  );
};

export default About;
