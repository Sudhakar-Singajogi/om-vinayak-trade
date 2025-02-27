import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "../src/assets/css/font-awesome-all.css";
import "../src/assets/css/flaticon.css"; 
import "../src/assets/css/bootstrap.css";
import "../src/assets/css/jquery.fancybox.min.css";
import "../src/assets/css/animate.css";
import "../src/assets/css/style.css";
import "../src/assets/css/responsive.css";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* <Preloader /> Preloader appears first */}
      <div className="boxed_wrapper">
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
     
      <Footer />

      </div>
    </Router>
  );
}

export default App;
