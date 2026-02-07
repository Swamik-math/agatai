import { motion, useScroll, useTransform } from "framer-motion";
import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo3 from "../assets/demo3.mp4";
import demo4 from "../assets/demo4.mp4";
import demo5 from "../assets/demo5.mp4";
import "./Hero.css";

const videos = [
  { src: demo1, x: "-35%", y: "-35%", delay: 0, scale: 1 },
  { src: demo2, x: "35%", y: "-35%", delay: 0.2, scale: 1.05 },
  { src: demo3, x: "-35%", y: "35%", delay: 0.4, scale: 0.95 },
  { src: demo4, x: "35%", y: "35%", delay: 0.6, scale: 1 },
  { src: demo5, x: "0%", y: "-50%", delay: 0.8, scale: 1.1 },
];

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section className="hero">
      {/* VIDEO LAYER */}
      <motion.div className="hero-videos" style={{ opacity: fadeOut }}>
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
              x: "0%",
              y: "0%",
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              x: video.x,
              y: video.y,
              opacity: 0.6,
              scale: video.scale,
            }}
            transition={{
              duration: 1.4,
              delay: video.delay,
              ease: [0.23, 1, 0.32, 1],
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
