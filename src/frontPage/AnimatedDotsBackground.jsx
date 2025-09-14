import React, { useMemo } from "react";

/**
 * AnimatedDotsBackground
 * - count: number of dots
 * - area: controls spread (0..1) where dots appear relative to container
 * - color: rgba string for dot color
 */
export default function AnimatedDotsBackground({
  count = 12,
  area = 1.0,
  color = "rgba(255, 182, 193, 0.22)", // light pink, low opacity
}) {
  // create deterministic random-ish props using useMemo
  const dots = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const size = Math.round(40 + Math.random() * 120); // px
      const left = Math.round(Math.random() * 100); // %
      const top = Math.round(Math.random() * 100); // %
      const delay = (Math.random() * 6).toFixed(2) + "s"; // stagger
      const duration = (6 + Math.random() * 8).toFixed(2) + "s"; // speed variety
      const opacity = (0.08 + Math.random() * 0.25).toFixed(2);
      arr.push({ id: i, size, left, top, delay, duration, opacity });
    }
    return arr;
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {dots.map((d) => (
        <span
          key={d.id}
          className="animated-dot fixed rounded-full"
          style={{
            left: `${d.left * area}%`,
            top: `${d.top * area}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: color,
            opacity: d.opacity,
            transform: "translate(-50%, -50%)",
            animationDelay: d.delay,
            animationDuration: d.duration,
            filter: "blur(6px)", /* subtle soft blur - optional */
            mixBlendMode: "screen", /* nicer blending on dark backgrounds */
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
