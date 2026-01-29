import { motion, useScroll, useTransform } from "framer-motion";
import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo3 from "../assets/demo3.mp4";
import demo4 from "../assets/demo4.mp4";
import demo5 from "../assets/demo5.mp4";
import "./Hero.css";

const videos = [
  { src: demo1, x: "-40%", y: "-40%", delay: 0, scale: 1 },   // top-left
  { src: demo2, x: "40%", y: "-40%", delay: 0.2, scale: 1.05 }, // top-right
  { src: demo3, x: "-40%", y: "40%", delay: 0.4, scale: 0.95 }, // bottom-left
  { src: demo4, x: "40%", y: "40%", delay: 0.6, scale: 1 },     // bottom-right
  { src: demo5, x: "0%", y: "-50%", delay: 0.8, scale: 1.1 },   // straight up
];

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -150]);
 const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);


  return (
    <section className="hero">
      {/* Videos starting from center */}
      <motion.div className="hero-videos" style={{ opacity: opacityFade }}>
        {videos.map((video, index) => (
          <motion.video
            key={index}
            className={`hero-video v${index + 1}`}
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            initial={{ 
              x: "0%", // start at center
              y: "0%",
              opacity: 0,
              scale: video.scale * 0.9
            }}
            animate={{ 
              opacity: 0.6,
              scale: video.scale,
              x: video.x,
              y: video.y,
            }}
            style={{ 
              y: index % 2 === 0 ? yParallaxFast : yParallaxSlow 
            }}
            transition={{
              duration: 1.5,
              delay: video.delay,
              ease: [0.23, 1, 0.32, 1]
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
        style={{ opacity: opacityFade }}
      >
        <h1 style={{ fontSize: '4rem', lineHeight: '1.3' }}>
  We Build Scalable Web & <span style={{ fontSize: '4rem', color: '#5865f2' }}>Mobile Solutions for the Future</span>
</h1>
        <p>Websites • Android Apps • iOS Apps • AI-Powered Software</p>
        <div className="hero-actions">
          <button className="primary">Get a Free Quote</button>
          <button className="secondary">View Our Work</button>
        </div>
      </motion.div>
    </section>
  );
}
