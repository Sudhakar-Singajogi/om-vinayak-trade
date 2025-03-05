import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./style.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const gifLogo = process.env.PUBLIC_URL + "/assets/images/om-vinayak.gif";
  const location = useLocation(); // Detects route changes


  useEffect(() => {
    setLoading(true); // Show loader on route change

    // Simulate loading delay, then hide the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    loading && (
        <div className="loader-wrap">
          <div className="preloader">

            {/* <div className="preloader-close">x</div> */}
            <div id="handle-preloader" className="handle-preloader">
              <div className="animation-preloader">

                {/* <div className="spinner" /> */}
                <div className="gif-loading">
                  <img src={gifLogo} alt="OM Vinayak Loading" />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  );
};

export default Preloader;
