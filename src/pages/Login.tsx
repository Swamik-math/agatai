import "./Login.css";
// import loginImage from "../assets/login-image.jpg"; // use your image

export default function Login() {
  return (
    <div className="login-container">

      {/* LEFT SIDE IMAGE */}
      <div className="login-left">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="login-video"
        >
          <source 
            src="https://static.cdn-luma.com/files/ca675f0291a223d0/Ray3Research.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="login-right">
        <div className="login-content">
          <h1>Power Your Ideas with AIGETAI</h1>
          <p>
             Advanced AI, scalable systems, and data-driven innovation for the next generation.
          </p>

          <button className="google-btn">Sign in with Google</button>
          <button className="apple-btn">Sign in with Apple</button>
          <button className="enterprise-btn">Enterprise Sign In</button>

          <small>
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </small>
        </div>
      </div>

    </div>
  );
}