import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/projects.css";
import Card from "../ui/Card";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".card");
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
        const onMove = (e) => {
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
        card._gsapCleanup = () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        };
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      const cards = sectionRef.current?.querySelectorAll(".card");
      cards?.forEach((card) => card._gsapCleanup?.());
    };
  }, []);

  return (
    <div id="projects" className="projects" ref={sectionRef}>
      <Card
        title="Federico Liberati"
        image="federico.gif"
        information="This project involved creating a website for an architect. The client provided the design, and we collaborated to build it step by step. The previous site, built with different technologies, suffered from very slow load times. To solve this, I decided to rebuild it from the ground up using ASTRO, which is one of the most performance-oriented frameworks for static websites with minimal user interaction."
        preview="https://www.federico-liberati.com/"
        code="https://github.com/DarioColaciuri/federicoliberati"
      />
      <Card
        title="Arpeggio Machine"
        image="arpeggio.gif"
        information="This arpeggio simulator for guitar is built entirely with vanilla JavaScript. It was created to help my students visualize different ways to navigate the guitar fretboard. The simulator includes a note selector and an arpeggio type selector, and by combining both, it displays all possible patterns on the instrument."
        preview="https://dariocolaciuri.github.io/arpeggio-machine/"
        code="https://github.com/DarioColaciuri/arpeggio-machine"
      />
      <Card
        title="Platformer Game"
        image="platformer.gif"
        information="This is a game I built to experiment with the HTML Canvas. It was developed entirely with vanilla JavaScript and includes basic mechanics like walking, jumping, colliding with walls, and entering doors to progress to the next level. Level transitions were created using GSAP, a popular library for animations and transitions."
        preview="https://dariocolaciuri.github.io/platformer-game/"
        code="https://github.com/DarioColaciuri/platformer-game"
      />
      <Card
        title="Ecommerce Backend"
        image="backend.gif"
        information="This project was a practice to learn how to use EXPRESS and MongoDB on the backend. User authentication was implemented along with BCRYPT to encrypt sensitive information. A layered architecture was used for enhanced security. The project also includes an email messaging system using NODEMAILER, file upload functionality with MULTER, and role-based access control. An admin panel was created to manage actions that regular users cannot perform."
        code="https://github.com/DarioColaciuri/backend"
      />
      <Card
        title="Random Book"
        image="randombook.gif"
        information="This was an organizer I created to distribute tasks while we were working on a sheet music book. It was built with React and Firebase. The app includes full CRUD functionality to add, edit, and delete items. I also implemented an action history (tracking only the most relevant actions) and a leaderboard to show who had completed the most tasks."
        preview="https://randombook.vercel.app/"
        code="https://github.com/DarioColaciuri/randombook"
      />
      <Card
        title="Password Changer"
        image="password.gif"
        information="This is a very simple application built solely with JavaScript. One day, I woke up from a dream where I created an app that would take an insecure password and return a more complex one. So, I decided to make it. It's a simple concept, but it works!"
        preview="https://dariocolaciuri.github.io/password-changer/"
        code="https://github.com/DarioColaciuri/password-changer"
      />
      <Card
        title="Liszt"
        image="liszt.gif"
        information="This is a project that is not yet finished. The idea was to create a task manager that allows users to share tasks with one another. I implemented user authentication, task CRUD functionality, and the ability to share tasks with other users. However, as I mentioned, it’s still a work in progress, both in terms of aesthetics and functionality."
        preview="https://liszt-two.vercel.app/"
        code="https://github.com/DarioColaciuri/Liszt"
      />

      <Card
        title="Next Ecommerce"
        image="next.gif"
        information="This is an eCommerce platform built with NEXT.js. Honestly, I didn't focus much on the visual aspects because I was primarily investigating how server-side rendering works and experimenting with Tailwind (CSS library). I also explored creating an API within Next.js, but that portion is commented out in the code since I decided to use Firebase to save time."
        preview="https://next-ecommerce-2g86ccfx4-dariocolaciuris-projects.vercel.app/"
        code="https://github.com/DarioColaciuri/next-ecommerce"
      />
      <Card
        title="Auditroim"
        image="auditroim.gif"
        information="This time, I decided to create an eCommerce platform with React. It features user registration, the ability to add products to a shopping cart, save products as favorites, and complete purchases. After making a purchase, users can review their order history."
        preview="https://auditroim.vercel.app/"
        code="https://github.com/DarioColaciuri/AudiTroim"
      />
      <Card
        title="Audio-max"
        image="audiomax.gif"
        information="This was my first experience with JavaScript. I created a simple eCommerce platform where users can add or remove products from the shopping cart (using localStorage). It’s not very functional, but it holds a special place as a memorable project."
        preview="https://dariocolaciuri.github.io/audio-max/"
        code="https://github.com/DarioColaciuri/audio-max"
      />
      <Card
        title="First Web"
        image="first.gif"
        information="This was my very first website. The design serves as the foundation for the portfolio you are currently exploring. I found it quite poetic to use a similar design to what I created for the first time in the world of HTML and CSS."
        preview="https://dariocolaciuri.github.io/darioColaciuri/"
        code="https://github.com/DarioColaciuri/darioColaciuri"
      />
    </div>
  );
};

export default Projects;
