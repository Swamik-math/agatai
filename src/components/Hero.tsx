import { easeOut, motion, useScroll, useTransform } from "framer-motion";

import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo3 from "../assets/demo3.mp4";
import demo4 from "../assets/demo4.mp4";
import demo5 from "../assets/demo5.mp4";
import "./Hero.css";
import { useState } from "react";
import { useVelocity } from "framer-motion";
// import { useMotionValueEvent } from "framer-motion";
// import { useSpring } from "framer-motion";
const videos = [
  { src: demo1, x: "100%", y: "-150%",ix : "0%" , iy : "0%", delay: 0, scale: 1 },
  { src: demo2, x: "150%", y: "150%",ix : "5%" , iy : "00%", delay: 1, scale: 1 },
  { src: demo3, x: "-160%", y: "-160%",ix : "7%" , iy : "4%", delay: 1.5, scale: 1 },
  { src: demo4, x: "-110%", y: "105%",ix : "9%" , iy : "6%", delay: 1.8, scale: 1 },
  { src: demo5, x: "-90%", y: "-80%",ix : "5%" , iy : "0%", delay: 2, scale: 1},
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [scrollvalue, setScrollvalue] = useState(5);
  const {scrollY} = useScroll();
  const velocity = useVelocity(scrollY)
  const fadeOut = useTransform(velocity, [0, 0.5], [1, 0]);
  return (
    <section className="hero">
      {/* VIDEO LAYER */}
      <motion.div className="hero-videos" style={{ opacity: fadeOut}}  >
        {videos.map((video, index) => (
          <motion.video
            key={index}
            className="hero-video"
          
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            initial={{
              x: "-70%",
              y: 0,
              opacity: 0,
              scale: 0.01,
              filter : "blur(7px)"
            }}
            animate={{
              x: video.x,
              y: video.y,
              opacity: 0.8,
              scale: video.scale,
              filter : "blur(0px)"
            }}
            transition={{
              duration: 4,
              delay: video.delay ,
              ease: [easeOut],
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ opacity: fadeOut }}
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
