import { 
  easeInOut, 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionValue,
  useVelocity,
  animate
} from "framer-motion";

import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo3 from "../assets/demo3.mp4";
import demo4 from "../assets/demo4.mp4";
import demo5 from "../assets/demo5.mp4";
import "./Hero.css";
import { useRef, useEffect, useState } from "react";

const videos = [
  { src: demo1, x: "100%", y: "-150%", delay: 0, scale: 1 },
  { src: demo2, x: "150%", y: "150%", delay: 0.2, scale: 1 },
  { src: demo3, x: "-160%", y: "-160%", delay: 0.4, scale: 1 },
  { src: demo4, x: "-110%", y: "105%", delay: 0.6, scale: 1 },
  { src: demo5, x: "-90%", y: "-80%", delay: 0.8, scale: 1 },
];

export default function Hero() {
  const { scrollYProgress, scrollY } = useScroll();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const scrollVelocity = useVelocity(scrollY);
  
  // Track animation duration based on scroll velocity
  const [duration, setDuration] = useState(9);

  // Smooth scroll-based opacity
  const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const smoothOpacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 30,
  });

  // Update duration based on scroll velocity
  useEffect(() => {
    const unsubscribe = scrollVelocity.on("change", (latest) => {
      // Convert velocity to speed multiplier
      // Higher velocity = faster animation (lower duration)
      const velocityMagnitude = Math.abs(latest);
      
      // Map velocity to duration: 0 velocity = 3s, high velocity = 0.5s
      const newDuration = Math.max(0.5, 3 - velocityMagnitude * 0.002);
      
      setDuration(newDuration);
    });

    return () => unsubscribe();
  }, [scrollVelocity]);

  // Preload videos
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.load();
        video.play().catch(() => {});
      }
    });
  }, []);

  return (
    <section className="hero">
      {/* VIDEO LAYER */}
      <motion.div 
        className="hero-videos" 
        style={{ opacity: smoothOpacity }}
      >
        {videos.map((video, index) => (
          <motion.video
            key={index}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            className="hero-video"
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            initial={{
              x: "-50%",
              y: "-50%",
              opacity: 0,
              scale: 0.3,
              filter: "blur(10px)",
            }}
            animate={{
              x: ["-50%", video.x, "-50%"], // Loop back to start
              y: ["-50%", video.y, "-50%"],
              opacity: [0, 0.85, 0],
              scale: [0.3, video.scale, 0.3],
              filter: ["blur(10px)", "blur(0px)", "blur(10px)"],
            }}
            transition={{
              duration: duration,
              delay: video.delay,
              ease: easeInOut,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              willChange: "transform, opacity, filter",
              backfaceVisibility: "hidden",
              transform: "translate3d(0, 0, 0)",
            }}
          />
        ))}
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{ opacity: smoothOpacity }}
      >
        <h1>
          We Build Scalable Web &{" "}
          <span>Mobile Solutions for the Future</span>
        </h1>

        <p>Websites • Android • iOS • AI-Powered Software</p>

        <div className="hero-actions">
          <button className="primary">Get a Free Quote</button>
          <button className="secondary">View Our Work</button>
        </div>
      </motion.div>
    </section>
  );
}