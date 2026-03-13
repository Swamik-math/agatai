import "./Career.css";
import BlurText from "../pages/BlurText";
import CircularGallery from '../pages/CircularGallery';


export default function Career() {
    return (
        <div className="careers-page">
            <BlurText
                text="Build The Future Of Imagination"
                delay={150}
                animateBy="letters"
                direction="top"
                className="hero-title"
            />
            

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

<hr className="section-divider" />

            <section className="career-details">
            <div className="career-title-row">
                <div>
                    <h1>We are building a new kind of mind</h1>
                    <p>
                        We believe real-world physics is the path to general intelligence.
                        We unite research, product, and go-to-market into one engine.
                    </p>
                </div>
                <button className="career-btn">Join Our Team</button>
            </div>
            </section>

{/* description */}
            <section className="career-life">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="career-life-player"
              >
                <source src="https://videos.pexels.com/video-files/25744121/11904048_2560_1440_25fps.mp4" type="video/mp4" />
              </video>
            </section>

{/* details of the company */}
<section className="career-comp">

            <div className="process-comp">
                <div className="comp-step">
                   <h2>Team Members</h2>
                    <h3>150+</h3>
                </div>

                <div className="comp-step">
                    <h2>Headquarters</h2>
                    <h3>Palo Alto, CA</h3>
                </div>

                <div className="comp-step">
                    <h2>Users worldwide</h2>
                    <h3>30K+</h3>
                </div>

                <div className="comp-step">
                    <h2>Total Funding</h2>
                    <h3>$3M+</h3>
                </div>
            </div>
        </section>

        <hr className="section-divider" />


             {/* WHY WORK WITH US */}
      <section className="blog-content">
        <h2>Why Work with Us</h2>

        {/* LEFT BLOG GRID */}
        <div className="blog-grid">

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" />
            <div className="blog-overlay">
              <span className="blog-category">AI Innovation</span>
              <h3>he Future of Artificial Intelligence in Product Development</h3>
              <p>
                Artificial Intelligence is transforming how modern applications are built.
                 
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" />
            <div className="blog-overlay">
              <span className="blog-category">Machine Learning</span>
              <h3>Building Scalable Machine Learning Systems </h3>
              <p>
                Machine learning models are powerful, 
                but deploying them efficiently is the real challenge.
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
            <div className="blog-overlay">
              <span className="blog-category">Data Science</span>
              <h3>Turning Data Into Business Intelligence</h3>
              <p>
                Organizations generate massive amounts of data every day
              </p>
            </div>
          </div>


          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" />
            <div className="blog-overlay">
              <span className="blog-category">Cloud Technology</span>
              <h3>Cloud Infrastructure for Modern AI Applications</h3>
              <p>
                Cloud platforms allow developers to build scalable and reliable AI applications.
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f" />
            <div className="blog-overlay">
              <span className="blog-category">Software Development</span>
              <h3>Building Scalable Applications for the Future</h3>
              <p>
                Modern software development focuses on scalability, performance, and user experience.
              </p>
            </div>
          </div>

          <div className="blog-card">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3" />
            <div className="blog-overlay">
              <span className="blog-category">Cybersecurity</span>
              <h3>Securing AI Systems in the Digital Era</h3>
              <p>
                As AI systems become more powerful, cybersecurity becomes critical.
              </p>
            </div>
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
                <div className="process-step">
                    <h3>1.Apply</h3>
                    <p>Submit your application and portfolio.</p>
                </div>

                <div className="process-step">
                    <h3>2. Screening</h3>
                    <p>Our team reviews your experience and skills.</p>
                </div>

                <div className="process-step">
                    <h3>3. Interview</h3>
                    <p>Technical and interviews with our team.</p>
                </div>

                <div className="process-step">
                    <h3>4. Offer</h3>
                    <p>If selected, we send an offer and welcome you onboard.</p>
                </div>
            </div>
        </section>


         {/* circular gallery */}
      <div style={{ height: '600px', position: 'relative' }}>
              <CircularGallery
                bend={1}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
                />
              </div>


        {/* final cta */}
        <section className="career-cta">
            <h2>Ready to Join Us?</h2>
            <p>
                Explore exiciting opportunities and become part of a team building
                the future of AI-driven Innovation.
            </p>
            <button>View Open Positions</button>
        </section>


        </div>
    )
}