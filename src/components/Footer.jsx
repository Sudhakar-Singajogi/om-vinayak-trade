import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="widget-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Our Community</h3>
                  </div>
                  <div className="widget-content">
                    <p>
                      Here you'll find regular market updates, expert tips &
                      stories.
                    </p>
                    <form
                      action="https://azim.hostlin.com/Bullion/contact.html"
                      method="post"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address..."
                          required
                        />
                        <button type="submit">
                          <img src="assets/images/icons/icon-27.png" alt="" />
                        </button>
                      </div>
                    </form>
                    <h3>Follow us</h3>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="index-2.html">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">
                          <i className="fa-brands fa-square-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">
                          <i className="fa-brands fa-square-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                        <ul className="links-list clearfix">
                          <li>
                            <a href="index-2.html">About Us</a>
                          </li>
                          <li>
                            <a href="index-2.html">Careers</a>
                          </li>
                          <li>
                            <a href="index-2.html">Meet Our Team</a>
                          </li>
                          <li>
                            <a href="index-2.html">Process</a>
                          </li>
                          <li>
                            <a href="index-2.html">Mission & Vision</a>
                          </li>
                          <li>
                            <a href="index-2.html">Faq’s</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                        <ul className="links-list clearfix">
                          <li>
                            <a href="index-2.html">Education</a>
                          </li>
                          <li>
                            <a href="index-2.html">Trading Tools</a>
                          </li>
                          <li>
                            <a href="index-2.html">Pricing List</a>
                          </li>
                          <li>
                            <a href="index-2.html">Accout Types</a>
                          </li>
                          <li>
                            <a href="index-2.html">Legal Notice</a>
                          </li>
                          <li>
                            <a href="index-2.html">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="index-2.html">Conditions</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget assistance-widget">
                  <div className="widget-content">
                    <h3>Need assistance?</h3>
                    <p>
                      Live chat with our service team for information &
                      assistance.
                    </p>
                    <div className="assistance-box">
                      <figure className="assistance-thumb">
                        <img
                          src="assets/images/resource/assistance-1.jpg"
                          alt=""
                        />
                      </figure>
                      <h5>Live Chat With</h5>
                      <div className="link-box">
                        <a href="index-2.html">
                          <span>Expert</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="bottom-inner">
              <div className="copyright">
                <p>
                  &copy;{" "}
                  <span>
                    2025 <a href="index-2.html">OM Vinayak</a>.
                  </span>{" "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
