import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="shop" element={<Shop/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
