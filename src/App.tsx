import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Career from "./pages/Career";
import "./App.css";
import Navbar from './components/Navbar';
import Login from "./pages/Login";


function App() {
  return (
  
    <div className="app-container">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />

        </Routes>
    </div>
    
  
  );
}

export default App;
