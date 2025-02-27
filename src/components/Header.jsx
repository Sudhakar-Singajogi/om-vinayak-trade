import React from "react";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
import Menu from "./Menu";
import './Header.css';

const Header = () => {
  const toggleMenu = () => {
    console.log('className is:', document.body.className)
    if (document.body.className === '') {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  };

  return (
    <>
      {<Preloader />}
      <header className="main-header">
        

        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="menu-area">
                
                <div className="logo-box d-none d-md-block">
                  <div className="logo-title">
                    <span>OM</span>
                    <figure className="logo">
                      <a href="index-2.html">
                        <img
                          className="logo-img"
                          src={`assets/images/om-vinayak.gif`}
                          alt="OMVINAYAK-LOGO"
                        />
                      </a>
                    </figure>
                    <span>Vinayak</span>
                  </div>
                </div>
                <div className="logo-box">
                  <div className="logo-title d-block d-md-none">
                    <span>OM</span>
                    <figure className="logo">
                      <a href="index-2.html">
                        <img
                          className="logo-img"
                          src={`assets/images/om-vinayak.gif`}
                          alt="OMVINAYAK-LOGO"
                        />
                      </a>
                    </figure>
                    <span>Vinayak</span>
                  </div>

                </div>
                  

                <div className="mobile-nav-toggler" onClick={() => toggleMenu()}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <Menu />
                </nav>
              </div>
              
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="outer-container">
            <div className="outer-box">
              
              <div className="menu-area">
              <div className="logo-box">
                  <div className="logo-title">
                    <span>OM</span>
                    <figure className="logo">
                      <a href="index-2.html">
                        <img
                          className="logo-img"
                          src={`assets/images/om-vinayak.gif`}
                          alt="OMVINAYAK-LOGO"
                        />
                      </a>
                    </figure>
                    <span>Vinayak</span>
                  </div>
                </div>

                <nav className="main-menu clearfix">
                  <Menu />
                </nav>
              </div>
              
              
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn" onClick={() => toggleMenu()}>
          
          <i className="fas fa-times"></i>
        </div>

        <nav className="menu-box">
        <div class="nav-logo"></div>
          
          <div className="menu-outer"><Menu /></div>
          
        </nav>
      </div>
    </>
  );
};

export default Header;
