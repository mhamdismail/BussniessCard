"use client"
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
interface Refs {
 
  box?: React.RefObject<HTMLElement|null>;
  image?: React.RefObject<HTMLElement | null>; // ✅ fix here too
}

export const useAnimateScroll = (refs: Refs) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Existing animations...
if (refs.box?.current) {
      gsap.fromTo(
        refs.box.current,
        { rotation: 0 },
        {
          rotation: 720,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "circ.inOut",
        }
      );
    }

    // ✅ Animate Image
    if (refs.image?.current) {
      gsap.fromTo(
        refs.image.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: refs.image.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [refs]);
};
