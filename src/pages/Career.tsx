import "./Career.css";
import careersBg from "../assets/careers-bg.jpg";

export default function Career() {
    return (
        
        <div className="career-page"
        style={{
    backgroundColor: "#dcdbdb",
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

{/* video section */}
            <section className="career-video">
  <h2>Life at AIGETAI</h2>

  <video
    autoPlay
    loop
    muted
    playsInline
    className="career-video-player"
  >
    <source src="https://static.cdn-luma.com/files/a1ecc8588bca8e63/careers-hero-video.mp4#t=0.001" type="video/mp4" />
  </video>
</section>

            <section className="career-details">
                <h1>We are building a new kind of mind</h1>
                <p>
                    We believe real-world physics is the path to general intelligence.
                    We unite research, product, and go-to-market into one engine.
                </p>
                <button>See open roles</button>
            </section>


                {/* career card section */}
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