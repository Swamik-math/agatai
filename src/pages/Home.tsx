import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import Footer from '../components/Footer'


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
<section className="features">
  <button className="feature-btn">Text to Video</button>
  <button className="feature-btn">AI Editing</button>
  <button className="feature-btn">Fast Generation</button>
  <button className="feature-btn">Fast Generation</button>
  <button className="feature-btn">Fast Generation</button>
</section>
</section>
<Footer />
</>
)
}