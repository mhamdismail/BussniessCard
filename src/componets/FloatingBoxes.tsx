"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import {
  SiReact, SiNextdotjs, SiPhp, SiJavascript, SiHtml5, SiCss3, SiGit,
  SiTailwindcss, SiTypescript, SiPython, SiDocker, SiVercel, SiMongodb,
  SiFirebase, SiGithub, SiBootstrap, SiPostgresql, SiSass,
} from "react-icons/si";

const iconComponents = [
  { Icon: SiReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiPhp, name: "PHP" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: SiCss3, name: "CSS3" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiPython, name: "Python" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiFirebase, name: "Firebase" },
  { Icon: SiGithub, name: "GitHub" },
  { Icon: SiBootstrap, name: "Bootstrap" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiSass, name: "SASS" },
];

const generateRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export default function FloatingBoxes() {
  const [mounted, setMounted] = useState(false);
  const [positions, setPositions] = useState(() =>
    iconComponents.map(() => ({
      top: generateRandom(-50, 100),
      left: generateRandom(-50, 100),
    }))
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const icons = gsap.utils.toArray(".floating-icon") as HTMLElement[];
    gsap.killTweensOf(icons); 

    icons.forEach((icon) => {
      const x = generateRandom(-100, 100);
      const y = generateRandom(-100, 100);
      const scale = generateRandom(0.8, 1.2);
      const duration = generateRandom(6, 6);

      gsap.fromTo(
        icon,
        {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0,
          rotate: 0,
        },
        {
          x,
          y,
          opacity: 0.8,
          scale,
          rotate: 360,
          duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1, // keep it floating
        }
      );
    });
  }, [mounted, positions]);

  // Timer-based position updates every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(
        iconComponents.map(() => ({
          top: generateRandom(-50, 100),
          left: generateRandom(-50, 100),
        }))
      );
    }, 12000); 

    return () => clearInterval(interval); // Cleanup
  }, []);

  if (!mounted) return null;

  return (
    <>
      {iconComponents.map(({ Icon, name }, i) => (
        <div
          key={`${i}`}
          className="floating-icon absolute text-white"
          style={{
            top: `${positions[i].top}%`,
            left: `${positions[i].left}%`,
            fontSize: "2rem",
          }}
          title={name}
        >
          <Icon />
        </div>
      ))}
    </>
  );
}
