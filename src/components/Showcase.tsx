import { motion } from 'framer-motion';
import demo1 from "../assets/demo1.mp4";
import demo2 from "../assets/demo2.mp4";
import demo3 from "../assets/demo3.mp4";
import demo4 from "../assets/demo4.mp4";
import demo5 from "../assets/demo5.mp4";
import "./Showcase.css";

const showcaseItems = [
  { src: demo1, title: "Cinematic Landscapes", prompt: "A vast mountain range at sunset, 4k, cinematic." },
  { src: demo2, title: "Urban Exploration", prompt: "Cyberpunk city streets with neon lights, raining." },
  { src: demo3, title: "Nature Closeups", prompt: "Macro shot of a butterfly on a flower, shallow depth of field." },
  { src: demo4, title: "Abstract Motion", prompt: "Fluid colors swirling in space, ethereal." },
  { src: demo5, title: "Human Portraits", prompt: "Close up of a person laughing, realistic lighting." },
];

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase-grid">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={index}
            className="showcase-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="video-container">
              <video src={item.src} autoPlay muted loop playsInline />
              <div className="video-overlay">
                <p>"{item.prompt}"</p>
              </div>
            </div>
            <div className="card-info">
              <h3>{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
