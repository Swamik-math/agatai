import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Footer from '../components/Footer'
import videoBg from "../assets/videoplayback.mp4"; 
import PizzaCarousel from "../components/PizzaCarousel";
import Service from "../components/Service";
import webDevImg1 from "../assets/feature/source2.png";
import webDevImg2 from "../assets/feature/source3.png";
import webDevImg3 from "../assets/feature/source4.png";
import webDevImg4 from "../assets/feature/source5.png";
import webDevImg5 from "../assets/feature/source6.png";
import webDevImg6 from "../assets/feature/source7.png";
import webDevImg7 from "../assets/feature/source8.png";



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

<section className="my-24 carousel-section">
  <Service />
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
        <h3>Web Development</h3>
        <p>We build fast, secure, and scalable</p><p> websites using modern technologies.</p>
        <img src={webDevImg1} alt="Web Development" />
solutions
      </div>

      <div className="service-card">
        <h3>Mobile App Development</h3>
        <p>We design and develop high-quality</p> <p> Android and iOS applications.</p>
        <img src={webDevImg2} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>AI & Automation</h3>
        <p>We create AI-powered systems to automate </p> <p>workflows and enhance decision-making.</p>
        <img src={webDevImg3} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>Custom Software</h3>
        <p>We develop tailored software   </p> <p> designed around your business needs..</p>
        <img src={webDevImg4} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>Maintenance & Support</h3>
        <p>We provide continuous monitoring, updates,   </p> <p>and technical support.</p>
        <img src={webDevImg5} alt="Web Development" />
      </div>

      {/* DUPLICATE for infinite scroll */}
      <div className="service-card">
        <h3>Web Development</h3>
        <p>Modern, scalable websites and web apps.</p>
        <img src={webDevImg6} alt="Web Development" />
      </div>

      <div className="service-card">
        <h3>Mobile App Development</h3>
        <p>Android & iOS apps.</p>
        <img src={webDevImg7} alt="Web Development" />
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



{/* DREAM MACHINE FAQ SECTION */}
<section className="dream-machine-faq">
  <div className="faq-container">
    <h2 className="faq-title">Dream Machine FAQs</h2>
    
    <div className="faq-grid">
      <div className="faq-item">
        <h3>What is Dream Machine?</h3>
        <p>Dream Machine is a software by Luma AI that lets users create images and videos using natural language in a single, uninterrupted workflow.</p>
      </div>
      
      <div className="faq-item">
        <h3>How does Dream Machine work?</h3>
        <p>Dream Machine allows users to generate images and videos directly from text prompts or images, enabling seamless creative ideation and storytelling.</p>
      </div>
      
      <div className="faq-item">
        <h3>Can I create videos from images using Dream Machine?</h3>
        <p>Yes, Dream Machine supports image-to-video creation, allowing users to animate images into videos in one continuous workflow.</p>
      </div>
      
      <div className="faq-item">
        <h3>Who can use Dream Machine?</h3>
        <p>Dream Machine is designed for creators, marketers, advertisers, filmmakers, and anyone who wants to bring their ideas to life through AI-powered visual content creation.</p>
      </div>
    </div>
  </div>
</section>


<Footer />
</>
)
}

