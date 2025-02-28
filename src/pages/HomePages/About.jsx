import React from 'react'
import "./AboutSection.css"

function About() {
  return (
    <>
    <section className="about-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box">
                          <img src="assets/images/resource/about-1.jpg" alt="" />
                          </figure>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <span className="sub-title">About Om Vinayak</span>
                                <h2>In a Fast Moving <br />Market Choose a <span>Stable Broker</span></h2>
                            </div>
                            <div className="inner-box">
                                <p>Minus id quod maxime place at facere possimus, omnis voluptas assu- menda omnis dolors repellendus tempor.</p>
                                <div className="quote-box"><h4>Everything you need to trade Forex in one place</h4></div>
                                <p>Placeat facere possimus omnis voluptas assumenda,</p>
                                <ul className="list-item clearfix">
                                    <li>Scalper</li>
                                    <li>Day Trader</li>
                                    <li>Position Trader</li>
                                    <li>The Swing Trader</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About