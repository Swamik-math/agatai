import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import Footer from '../components/Footer'
import videoBg from "../assets/videoplayback.mp4"; 
import PizzaCarousel from "../components/PizzaCarousel";


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

<section className="features">
  <button className="feature-btn">Text to Video</button>
  <button className="feature-btn">AI Editing</button>
  <button className="feature-btn">Fast Generation</button>
  <button className="feature-btn">AI/ML</button>
  <button className="feature-btn">Web Development</button>
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



<section className="services">
  <div className="services-scroll">
    <div className="services-track">
      
      <div className="service-card">
        <h3>🌐 Web Development</h3>
        <p>Modern, scalable websites and web apps.</p>
        <img src="/images/web-dev.png" alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>📱 Mobile App Development</h3>
        <p>Android & iOS apps.</p>
      </div>

      <div className="service-card">
        <h3>🤖 AI & Automation</h3>
        <p>AI tools & smart systems.</p>
      </div>

      <div className="service-card">
        <h3>⚙️ Custom Software</h3>
        <p>Tailored solutions.</p>
      </div>

      <div className="service-card">
        <h3>🛠 Maintenance & Support</h3>
        <p>Ongoing updates.</p>
      </div>

      {/* DUPLICATE for infinite scroll */}
      <div className="service-card">
        <h3>🌐 Web Development</h3>
        <p>Modern, scalable websites and web apps.</p>
      </div>

      <div className="service-card">
        <h3>📱 Mobile App Development</h3>
        <p>Android & iOS apps.</p>
      </div>

    </div>
  </div>
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