import { useState, useEffect, useRef } from "react";
import "../css/music.css";
import data from "../../data/tracks.json";
import type { TracksData } from "../../types";

const { tracks, playlistId } = data as TracksData;

const Music = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="music"
      className={`music ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      <h2 className="music-title">Music</h2>

      <div className="marquee">
        <div className="marquee-track">
          {[...tracks, ...tracks].map((track, i) => (
            <div key={`${track.id}-${i}`} className="marquee-item">
              <iframe
                title={track.title}
                src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                allow="encrypted-media"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="playlist">
        <h3 className="playlist-title">Productions & Appearances</h3>
        <div className="playlist-embed">
          <iframe
            title="Playlist de colaboraciones"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="352"
            allow="encrypted-media"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Music;
