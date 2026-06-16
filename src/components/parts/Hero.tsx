import { useEffect, useRef } from "react";
import Stars from "./Stars";
import "../css/hero.css";

const Hero = () => {
  useEffect(() => {
    const lights = ["luz1", "luz2", "luz3", "luz4"];

    lights.forEach((light, index) => {
      const element = document.getElementById(light);
      if (!element) return;
      const toggleLight = () => {
        const randomOffTime = Math.floor(Math.random() * 5000) + 1000;
        const randomOnTime = Math.floor(Math.random() * 3000) + 4000;
        setTimeout(() => {
          element.classList.remove("hidden");
          setTimeout(() => {
            element.classList.add("hidden");
            toggleLight();
          }, randomOnTime);
        }, randomOffTime);
      };
      const initialDelay = index * 1000;
      setTimeout(toggleLight, initialDelay);
    });
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playThunder = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/thunder.mp3");
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const handleClick = (event: React.MouseEvent) => {
    const flash = document.getElementById("flashOverlay");
    if (!flash) return;
    flash.classList.remove("active");
    void flash.offsetWidth;
    flash.classList.add("active");
    playThunder();

    const zombie = document.querySelector<HTMLElement>(".zombie");
    const zombieStop = document.querySelector<HTMLElement>(".zombieStop");
    const hand = document.querySelector<HTMLElement>(".hand");
    const puntito = document.querySelector<HTMLElement>(".puntito");

    if (!zombie || !zombieStop || !hand || !puntito) return;

    const x = (event.clientX / window.innerWidth) * 100;
    const y = 70;

    zombie.style.animationPlayState = "paused";
    zombieStop.style.animationPlayState = "paused";
    puntito.style.animationPlayState = "paused";

    hand.style.left = `${x - 8}vw`;
    hand.style.top = `${y - 70}vh`;

    hand.classList.remove("unSmash");
    hand.style.animation = "none";
    void hand.offsetWidth;
    hand.style.animation = "";
    hand.classList.remove("hidden");
    hand.classList.add("smash");
    zombieStop.classList.remove("hidden");
    zombie.classList.add("hidden");
    puntito.classList.add("unClickable");

    setTimeout(() => {
      zombieStop.classList.add("hiddenLight");
    }, 1000);

    setTimeout(() => {
      hand.classList.remove("smash");
      hand.classList.add("unSmash");
      setTimeout(() => {
        hand.classList.add("hidden");
      }, 1300);
    }, 5000);

    setTimeout(() => {
      zombie.classList.remove("hidden");
      zombie.style.animation = "none";
      void zombie.offsetWidth;
      zombie.style.animation = "";
      zombie.style.animationPlayState = "running";

      zombieStop.classList.add("hidden");
      zombieStop.classList.remove("hiddenLight");
      zombieStop.style.animation = "none";
      void zombieStop.offsetWidth;
      zombieStop.style.animation = "";
      zombieStop.style.animationPlayState = "running";

      puntito.classList.remove("unClickable");
      puntito.style.animation = "none";
      void puntito.offsetWidth;
      puntito.style.animation = "";
      puntito.style.animationPlayState = "running";

      hand.classList.remove("unSmash");
      hand.classList.add("hidden");
      hand.style.animation = "";
    }, 15000);
  };

  return (
    <>
      <div id="hero" className="hero">
        <img className="background" src="/images/background.png" alt="background" />
        <Stars />
        <img className="background" src="/images/houses.png" alt="houses" />
        <img className="background" src="/images/luzfija.png" alt="luzfija" />
        <img className="background" src="/images/road.png" alt="road" />

        <img
          id="luz1"
          className="background hidden"
          src="/images/luz1.png"
          alt="luz1"
        />
        <img
          id="luz2"
          className="background hidden"
          src="/images/luz2.png"
          alt="luz2"
        />
        <img
          id="luz3"
          className="background hidden"
          src="/images/luz3.png"
          alt="luz3"
        />
        <img
          id="luz4"
          className="background hidden"
          src="/images/luz4.png"
          alt="luz4"
        />

        <img className="walker" src="/images/walker.gif" alt="walker" />
        <img className="runner" src="/images/runner1.gif" alt="runner" />
        <img className="zombie" src="/images/zombie.gif" alt="walker" />
        <img className="zombieStop hidden" src="/images/zombie1.png" alt="walker" />
        <div className="puntito" onClick={handleClick}></div>
        <img className="hand hidden" src="/images/hand.png" alt="hand" />
        <img className="moto" src="/images/moto.gif" alt="moto" />
        <img className="car" src="/images/car.gif" alt="car" />
        <img className="background" src="/images/front.png" alt="front" />
        <div className="flash-overlay" id="flashOverlay"></div>
      </div>
    </>
  );
};

export default Hero;
