import "./Career.css";
import careersBg from "../assets/careers-bg.jpg";

export default function Career() {
    return (
        
        <div className="career-page"
        style={{
    backgroundImage: `url(${careersBg})`,
  }}
  >
            <div className="careers-overlay">
                {/* all page content */}
              </div>


            <section className="career-hero">
                <h1>Build The Future With Us</h1>
                <p>
                    Join our team of developers, designers, and innovators building
                    scalable digital solutions.
                </p>
            </section>

            <section className="career-jobs">
                <h2>Open Positions</h2>
            
            <div className="job-card">
                <div>
                    <h3>Fontend Developer</h3>
                    <p>Full Time • Remote </p>
                </div>
                <button>Apply</button>
            </div>

            <div className="job-card">
                <div>
                    <h3>Backend Developer</h3>
                    <p>Full Time • Remote </p>
                </div>
                <button>Apply</button>
            </div>

            <div className="job-card">
                <div>
                    <h3>UI/UX Designer</h3>
                    <p>Full Time • Remote </p>
                </div>
                <button>Apply</button>
            </div>

                
            </section>


        </div>
    )
}