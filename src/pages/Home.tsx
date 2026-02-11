import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Footer from '../components/Footer'
import videoBg from "../assets/videoplayback.mp4"; 
import PizzaCarousel from "../components/PizzaCarousel";

import webDevImg1 from "../assets/feature/source2.jpg";
import webDevImg2 from "../assets/feature/source3.jpg";




export default function Home() {
return (
<>
<Navbar />
<Hero />

{/* NEW HEADLINE SECTION */}
<section className="headline-section">
    <h2>AIGETAI</h2>
    <p> a technology-driven software company delivering high-quality web, mobile, and AI-powered solutions using modern tech stacks.</p>
</section>



{/* ===================== */}

<section className="my-12 carousel-section">
  <PizzaCarousel />
</section>



{/* new headline section */}
<section className="headline-section">
    <h2>Your creative partner for ideation & imagination</h2>
    <p> We design and develop web apps, mobile applications, AI-powered systems, and custom software—delivering scalable, secure, and reliable solutions with ongoing support.</p>
</section>

<section className="services-cta">
  <div className="services-cta-actions">
    <button onClick={() => setActiveService("web")}>Web</button>
    <button onClick={() => setActiveService("app")}>App</button>
    <button onClick={() => setActiveService("ai")}>AI/ML</button>
    <button onClick={() => setActiveService("software")}>Software</button>
    <button onClick={() => setActiveService("support")}>Support</button>
  </div>
</section>


const servicesData = [
  {
    id: 1,
    category: "web",
    title: "Web Development",
    desc: "Modern, scalable websites and web apps.",
    img: webDevImg1,
  },
  {
    id: 2,
    category: "app",
    title: "Mobile App Development",
    desc: "Android & iOS apps.",
    img: webDevImg2,
  },
  {
    id: 3,
    category: "ai",
    title: "AI & Automation",
    desc: "AI tools & smart systems.",
  },
  {
    id: 4,
    category: "software",
    title: "Custom Software",
    desc: "Tailored solutions.",
  },
  {
    id: 5,
    category: "support",
    title: "Maintenance & Support",
    desc: "Ongoing updates.",
  },
];




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
      <h2>Your creative partner for ideation & imagination</h2>
      <p>
        We design and develop web apps, mobile applications, AI-powered systems, 
        and custom software—delivering scalable, secure, and reliable solutions with ongoing support.
      </p>
    </div>
  </div>
</section>




<Footer />
</>
)
}