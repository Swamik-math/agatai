import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import "./App.css";
import Navbar from './components/Navbar';
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import SoftwareEnquiry from "./pages/SoftwareEnquiry";
import OnlineClasses from "./pages/OnlineClasses";


function App() {
  return (
  
    <div className="app-container">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/enquiry" element={<SoftwareEnquiry />} />
          <Route path="/classes" element={<OnlineClasses />} />

        </Routes>
    </div>
    
  
  );
}

export default App;
