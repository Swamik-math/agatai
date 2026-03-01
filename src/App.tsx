import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import "./App.css";
import Navbar from './components/Navbar';


function App() {
  return (
  
    <div className="app-container">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
    </div>
    
  
  );
}

export default App;
