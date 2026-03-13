import { useRef } from "react";

import Hero from '../components/Hero'

import Footer from '../components/Footer'
import videoBg from "../assets/videoplayback.mp4"; 
import PizzaCarousel from "../components/PizzaCarousel";
import CircularGallery from '../pages/CircularGallery';
import OrbitImages from "./OrbitImages";

import Service from "../components/Service";
import webDevImg1 from "../assets/feature/source2.png";
import webDevImg2 from "../assets/feature/source3.png";
import webDevImg3 from "../assets/feature/source4.png";
import webDevImg4 from "../assets/feature/source5.png";
import webDevImg5 from "../assets/feature/source6.png";
import webDevImg6 from "../assets/feature/source7.png";
import webDevImg7 from "../assets/feature/source8.png";



export default function Home() {

 const scrollRef = useRef<HTMLDivElement | null>(null);

const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  const slider = scrollRef.current;
  if (!slider) return;

  let startX = e.pageX - slider.offsetLeft;
  let scrollLeft = slider.scrollLeft;

  const onMouseMove = (e: MouseEvent) => {
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.2;
    slider.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  };

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
};


const orbitImages = [
    "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6"
];

  

return (
<>

<Hero />

{/* NEW HEADLINE SECTION */}
<section className="headline-section">
    <h2>Building Digital Products That Move Businesses Forward</h2>
    <p>
      AIGETAI is a product engineering company focused on web, mobile, AI, and
      custom software solutions for startups and growing enterprises.
    </p>
</section>



{/* ===================== */}

 <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery
                bend={1}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
                />
              </div>


<section className="my-24 carousel-section">
  <Service />
</section>

<hr className="section-divider" />

{/* new headline section */}
<section className="headline-section">
    <h2>From Idea to Launch, We Build with Clarity and Speed</h2>
    <p>
      We combine strategy, design, engineering, and support to deliver secure,
      scalable products with measurable business impact.
    </p>
</section>




{/* orbit images */}
<section className="orbit-section">
  <OrbitImages
    images={orbitImages}
    shape="ellipse"
    radiusX={570}
    radiusY={100}
    rotation={-8}
    duration={65}
    itemSize={140}
    responsive={true}
    radius={160}
    direction="normal"
    fill
    showPath
    paused={false}
  />
</section>

<hr className="section-divider" />


<section className="services">
  <div className="services-scroll" ref = {scrollRef} onMouseDown = {handleMouseDown}>
    <div className="services-track">
      
      <div className="service-card">
        <h3>Web Development</h3>
        <p>Performance-focused websites and platforms</p><p>built for conversion, scale, and reliability.</p>
        <img src={webDevImg1} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>Mobile App Development</h3>
        <p>Native and cross-platform mobile apps</p> <p>with polished UX and stable architecture.</p>
        <img src={webDevImg2} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>AI & Automation</h3>
        <p>AI features and workflow automation</p> <p>that improve decisions and reduce manual work.</p>
        <img src={webDevImg3} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>Custom Software</h3>
        <p>Tailored business software designed</p> <p>for your operations, users, and growth goals.</p>
        <img src={webDevImg4} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>Maintenance & Support</h3>
        <p>Continuous monitoring, proactive updates,</p> <p>and long-term technical partnership.</p>
        <img src={webDevImg5} alt="Web Development" />
      </div>

      {/* DUPLICATE for infinite scroll */}
      <div className="service-card">
        <h3>Cloud & DevOps</h3>
        <p>Cloud-ready deployment pipelines and</p><p>infrastructure practices for faster delivery.</p>
        <img src={webDevImg6} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>Product Consulting</h3>
        <p>Roadmaps, architecture planning, and</p><p>technical guidance for product teams.</p>
        <img src={webDevImg7} alt="Web Development" />
      </div>

    </div>
  </div>
</section>


{/* pizza carousile */}
<section className="my-12 carousel-section">
  <PizzaCarousel />
</section>


{/* Video Background Section */}
<section className="video-section">
  <video
    className="video-bg"
    src={videoBg}  
    autoPlay
    muted
    loop
    playsInline
  />
  <div className="video-overlay">
    <div className="video-content">
      <h2>Your Technology Partner for Sustainable Growth</h2>
      <p>
        At AIGETAI, we help organizations modernize systems, launch digital
        products, and scale engineering with a strong focus on quality,
        security, and business outcomes.
      </p>
    </div>
  </div>
</section>




{/* COMPANY FAQ SECTION */}
<section className="dream-machine-faq">
  <div className="faq-container">
    <h2 className="faq-title">AIGETAI Company FAQs</h2>
    
    <div className="faq-grid">
      <div className="faq-item">
        <h3>What does AIGETAI do?</h3>
        <p>
          AIGETAI designs and develops web platforms, mobile apps, AI-driven
          solutions, and custom enterprise software for businesses across
          multiple industries.
        </p>
      </div>
      
      <div className="faq-item">
        <h3>What industries do you work with?</h3>
        <p>
          We support startups, education, healthcare, retail, finance, and
          service businesses that need reliable digital products and technology
          modernization.
        </p>
      </div>
      
      <div className="faq-item">
        <h3>How do projects usually start?</h3>
        <p>
          Projects typically begin with a discovery call, followed by scope
          planning, timeline definition, and a phased delivery roadmap aligned
          to your priorities.
        </p>
      </div>
      
      <div className="faq-item">
        <h3>Do you provide post-launch support?</h3>
        <p>
          Yes. We offer maintenance, monitoring, optimization, and feature
          enhancement support to ensure long-term product stability and growth.
        </p>
      </div>
    </div>
  </div>
</section>


<Footer />
</>
)
}