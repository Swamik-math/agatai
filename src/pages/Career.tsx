import "./Career.css";


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


             {/* WHY WORK WITH US */}
      <section className="career-benefits">
        <h2>Why Work With Us</h2>

        <div className="benefit-grid">
          <div className="benefit-card">
            <h3>Innovation</h3>
            <p>
              Work on cutting-edge technologies in AI, machine learning,
              and scalable systems.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Growth</h3>
            <p>
              Continuous learning, mentorship, and opportunities to grow
              your career.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Global Team</h3>
            <p>
              Collaborate with talented developers and designers from
              around the world.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Flexible Work</h3>
            <p>
              Remote-friendly environment with flexible schedules and
              work-life balance.
            </p>
          </div>
        </div>
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

        {/* hiring process */}
        <section className="career-process">
            <h2>Our Hiring Process</h2>

            <div className="process-grid">
                <div className="process-steps">
                    <h3>1.Apply</h3>
                    <p>Submit your application and portfolio.</p>
                </div>

                <div className="process-steps">

                </div>

            </div>

        </section>


        </div>
    )
}