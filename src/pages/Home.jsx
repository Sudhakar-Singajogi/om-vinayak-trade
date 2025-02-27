import React from "react";
import HomeSlider from "../components/HomeSlider"; 
import About from "./HomePages/About";
import AccountSection from "./HomePages/AccountSection";
import TradingSections from "./HomePages/TradingSections";
import Trading from "./HomePages/Trading";
import TradingTools from "./HomePages/TradingTools";
import HowItWorks from "./HomePages/HowItWorks";
import ChooseUs from "./HomePages/ChooseUs";
import FAQs from "./HomePages/FAQs";

function Home() {
  return (
    <>
        <HomeSlider />
        <About />
        <TradingSections />
        <AccountSection />
        <Trading />
        {/* <TradingTools /> */}
        <HowItWorks />
        <ChooseUs />
        <FAQs />
        
    </>
  );
}

export default Home;
