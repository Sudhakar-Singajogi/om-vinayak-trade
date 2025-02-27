import React from "react";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
import Menu from "./Menu";
import './Header.css';

const Header = () => {
  const toggleMenu = () => {
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

                <div className="logo-box d-block d-md-none">
                  <div className="logo-title">
                    {/* <span>OM</span> */}
                    <figure className="logo">
                      <a href="index-2.html">
                        <img
                          className="logo-img"
                          src={`assets/images/om-vinayak.gif`}
                          alt="OMVINAYAK-LOGO"
                        />
                      </a>
                    </figure>
                    {/* <span>Vinayak</span> */}
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
              <div className="menu-right-content">
                <div className="search-box-outer search-toggler">
                  <i className="flaticon-search"></i>
                </div>
                <div className="clients-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-6.png" alt="" />
                  </div>
                  <a href="index-2.html">
                    Client Portal<i className="flaticon-right-down"></i>
                  </a>
                </div>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn btn-one">
                    <span>Open an A/c</span>
                  </a>
                </div>
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
              <div className="menu-right-content">
                <div className="search-box-outer search-toggler">
                  <i className="flaticon-search"></i>
                </div>
                <div className="clients-box">
                  <div className="icon-box">
                    <img src="assets/images/icons/icon-6.png" alt="" />
                  </div>
                  <a href="index-2.html">
                    Client Portal<i className="flaticon-right-down"></i>
                  </a>
                </div>
                <div className="btn-box">
                  <a href="index-2.html" className="theme-btn btn-one">
                    <span>Open an A/c</span>
                  </a>
                </div>
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
          <div className="nav-logo">
            <a href="index-2.html">
              <img src="assets/images/logo-2.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer"><Menu /></div>
          
        </nav>
      </div>
    </>
  );
};

export default Header;
