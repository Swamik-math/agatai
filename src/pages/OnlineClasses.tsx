import "./OnlineClasses.css";
import heroImg from '../assets/online-class/online-hero.jpg';
import reactImg from '../assets/online-class/React-JSi.jpg';
import uiuxImg from '../assets/online-class/UI-UX-Design.jpg';
import AIImg from '../assets/online-class/Artificial intelligence (AI).jpg';


export default function OnlineClasses() {
  return (
    <div className="classes-page">

      {/* HERO */}
      <section className="classes-hero">
        <h1>Learn Future-Ready Skills</h1>
        <p>
          Join our expert-led online classes and gain practical experience in
          AI, Web Development, and Modern Technologies.
        </p>
        <button>Browse Courses</button>
      </section>

      {/* COURSE GRID */}
      <section className="classes-courses">
        <h2>Popular Courses</h2>

        <div className="course-grid">

          <div className="course-card">
            <img src={reactImg} alt="React Course"/>
            <h3>React Development</h3>
            <p>Build modern web apps using React and TypeScript.</p>
            <button>View Course</button>
          </div>

          <div className="course-card">
            <img src={AIImg} alt="AI Course"/>
            <h3>Artificial Intelligence</h3>
            <p>Learn machine learning and AI fundamentals.</p>
            <button>View Course</button>
          </div>

          <div className="course-card">
            <img src={uiuxImg} alt="UIUX"/>
            <h3>UI/UX Design</h3>
            <p>Design user-friendly and modern interfaces.</p>
            <button>View Course</button>
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="classes-benefits">
        <h2>Why Learn With Us</h2>

        <div className="benefit-grid">
          <div className="benefit">
            <h3>Expert Mentors</h3>
            <p>Learn from industry professionals.</p>
          </div>

          <div className="benefit">
            <h3>Hands-on Projects</h3>
            <p>Work on real-world projects.</p>
          </div>

          <div className="benefit">
            <h3>Flexible Learning</h3>
            <p>Study anytime from anywhere.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="classes-cta">
        <h2>Start Learning Today</h2>
        <p>Upgrade your skills and build your career with us.</p>
        <button>Join Now</button>
      </section>

    </div>
  );
}
