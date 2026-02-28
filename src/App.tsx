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
        <Route path = "/Career" element={<Career />} />
      </Routes>
      <Home />
    </div>
  
  );
}

export default App;
