import React from 'react'
import "./TradingSections.css"

function TradingSections() {
  return (
    <>
    <section className="trading-section sec-pad">
            <div className="pattern-layer">
                <div className="pattern-1"></div>
                <div className="pattern-2"></div>
            </div>
            <div className="auto-container">
                <div className="sec-title centred light">
                    <span className="sub-title">OM Vinayak Trading</span>
                    <h2>The Road Map to <br /><span>Trading</span> Excellance</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 trading-block">
                        <div className="trading-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                
                                <div className="icon-box"><img src="assets/images/icons/icon-7.png" alt="" /></div>
                                <div className="text">
                                    <h3><a href="index-2.html">What is forex trading?</a></h3>
                                    <p>Enim velit minima venia quis strum exercit atione in ullam corporis suscipit.</p>
                                </div>
                                <div className="link-box">
                                    {/* <a href="index-2.html"><span>More</span></a> */}
                                    </div>
                                <div className="overlay-icon"><img src="assets/images/icons/icon-8.png" alt="" /></div>
                                <div className="lower-text"><h6><span>*</span> Harum quidem rerum facilis.</h6></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 trading-block">
                        <div className="trading-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-9.png" alt="" /></div>
                                <div className="overlay-icon"><img src="assets/images/icons/icon-10.png" alt="" /></div>
                                <div className="text">
                                    <h3><a href="index-2.html">Why trade in Bullion?</a></h3>
                                    <p>Dolore magnam aliqua nam quaerat voluptate enimto vel minima veniam.</p>
                                </div>
                                <div className="lower-text"><h6><span>*</span> Dolores eos qui ratione.</h6></div>
                                <div className="link-box">
                                    {/* <a href="index-2.html"><span>More</span></a> */}
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 trading-block">
                        <div className="trading-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt="" /></div>
                                <div className="overlay-icon"><img src="assets/images/icons/icon-12.png" alt="" /></div>
                                <div className="text">
                                    <h3><a href="index-2.html">How to trade forex?</a></h3>
                                    <p>Exercitation ullam labori sore ut aliquip vel nisi commonds consequat voluptate. </p>
                                </div>
                                <div className="lower-text"><h6><span>*</span> Fugiat quo voluptas nulla.</h6></div>
                                <div className="link-box">
                                    {/* <a href="index-2.html"><span>More</span></a> */}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TradingSections