import { useMemo } from "react";
import "../css/stars.css";

interface StarsProps {
  count?: number;
  topRange?: number;
}

const Stars = ({ count = 70, topRange = 55 }: StarsProps) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 17) % 100}%`,
        top: `${(i * 23 + 7) % topRange}%`,
        size: `${(i * 13 + 5) % 3 + 1}px`,
        delay: `${(i * 0.37) % 4}s`,
        duration: `${((i * 0.5) % 3) + 2}s`,
        opacity: ((i * 0.19) % 0.4) + 0.3,
      })),
    [count, topRange]
  );

  return (
    <div className="stars-layer">
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
