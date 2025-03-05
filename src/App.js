import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "../src/assets/css/style.css";
import "../src/assets/css/font-awesome-all.css";
import "../src/assets/css/flaticon.css"; 
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/jquery.fancybox.min.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/responsive.css";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Market from "./pages/Market";

function App() {
  return (
    <Router>
      <div className="boxed_wrapper">
      <Header />
      <Preloader /> 
      <div style={{'borderTop': '1px solid #f1f1f1'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/economic-calendar" element={<Market />} />
          {/* 404 Route - must be placed at the bottom */}
        <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
        
     
      <Footer />

      </div>
    </Router>
  );
}

export default App;
