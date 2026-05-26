import React, { useRef, useEffect } from "react";
import "../css/stack.css";

const Stack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const logos = sectionRef.current?.querySelectorAll(".logo");
    if (!logos || logos.length === 0) return;

    logos.forEach((logo, i) => {
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

    logos.forEach((logo) => observer.observe(logo));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="stack" className="stack" ref={sectionRef}>
      <img title="React" className="logo" src="logo_react.svg" alt="" />
      <img title="Next" className="logo" src="logo_next.svg" alt="" />
      <img title="JavaScript" className="logo" src="logo_js.svg" alt="" />
      <img title="TypeScript" className="logo" src="logo_ts.svg" alt="" />
      <img title="HTML" className="logo" src="logo_html.svg" alt="" />
      <img title="CSS" className="logo" src="logo_css.svg" alt="" />
      <img title="Node" className="logo" src="logo_node.svg" alt="" />
      <img title="Firebase" className="logo" src="logo_firebase.svg" alt="" />
      <img title="Git" className="logo" src="logo_git.svg" alt="" />
      <img title="Tailwind" className="logo" src="logo_tailwind.svg" alt="" />
      <img title="Bootstrap" className="logo" src="logo_bootstrap.svg" alt="" />
      <img title="Sass" className="logo" src="logo_sass.svg" alt="" />
      <img title="After Effects" className="logo" src="logo_after.svg" alt="" />
      <img
        title="Illustrator"
        className="logo"
        src="logo_illustrator.svg"
        alt=""
      />
      <img title="Photoshop" className="logo" src="logo_ps.svg" alt="" />
      <img
        title="Ableton Live"
        className="logo"
        src="logo_ableton.svg"
        alt=""
      />
    </div>
  );
};

export default Stack;
