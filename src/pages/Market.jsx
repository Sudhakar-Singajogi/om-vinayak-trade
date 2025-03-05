import React from "react";
import "./Market.css";

function Market() {
  return (
    <>
      <div className="market-section">
        <section className="page-title centred">
          <div className="bg-layer"></div>
          <div className="line-box">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
          <div className="auto-container">
            <div className="content-box">
              <h1 className="banner-heading">Economic Calendar </h1>
              <p className="banner-description">
                The economic calendar helps traders stay informed about key
                events that can impact the market,
                <br />
                enabling them to anticipate potential price movements and make
                informed trading decisions.
              </p>
              {/* <ul className="bread-crumb clearfix">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Markets</li>
                <li>Markets</li>
              </ul> */}
            </div>
          </div>
        </section>
        <section className="markets-page-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="markets-block">
                <div className="markets-block-one">
                  <div className="inner-box">
                    <div className="lower-content">
                      <p className="heading">What is an Economic Calendar?</p>
                      <p>
                        An economic calendar highlights major economic events,
                        data releases, and announcements that can influence
                        financial markets and economies. It includes key
                        indicator release dates such as unemployment rates, GDP
                        growth, inflation figures, and central bank interest
                        rate decisions.
                      </p>
                      <p>
                        Traders, investors, and analysts rely on economic
                        calendars to stay updated on upcoming events, helping
                        them assess market trends and anticipate potential price
                        movements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animation">
            <div className="wrap">
              <div></div>
            </div>
          </div>

          <div className="content-box">
            <div className="wrap">
              <figure className="dummy-economic-calendar">
                <img
                  src="assets/images/econimic-calendar.PNG"
                  alt="economic-calendar"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="explore">
          <div className="explore-more-content">
            <div className="inner">
              <div className="title-box">
                <h2
                  className="animates animate__fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-offset="100"
                >
                  Explore <span>More Tools</span>
                </h2>
              </div>
              <div>
                <ul>
                  <li
                    className="animates animate__fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-offset="100"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/icons/analysis-explore-more-iocn-2.webp"
                        alt="Economic Calendar"
                        width="175"
                        height="175"
                        data-lazy-src="/assets/images/icons/analysis-explore-more-iocn-2.webp"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        <img
                          src="/assets/images/icons/analysis-explore-more-iocn-2-new.webp"
                          alt="Economic Calendar"
                          width="175"
                          height="175"
                        />
                      </noscript>
                    </div>
                    <div className="text-box">
                      <div className="text-box-inner">
                        <h3>Market News and Analysis</h3>
                        <p>
                        Stay updated with market analysis, latest news, and key events impacting market movements by opening a live account.
                        </p>
                      </div>
                    </div>
                     
                  </li>

                  <li
                    className="animates animate__fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-offset="100"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/icons/analysis-explore-more-iocn-2-new.webp"
                        alt="Economic Calendar"
                        width="175"
                        height="175"
                        data-lazy-src="/assets/images/icons/analysis-explore-more-iocn-2-new.webp"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        <img
                          src="/assets/images/icons/analysis-explore-more-iocn-2-new.webp"
                          alt="Economic Calendar"
                          width="175"
                          height="175"
                        />
                      </noscript>
                    </div>
                    <div className="text-box">
                      <div className="text-box-inner">
                        <h3>Forex VPS</h3>
                        <p>
                        Get free Forex VPS hosting by depositing a minimum of $1,000 and trading at least $0.5 million in notional value on closed trades each month. Terms and conditions apply
                        </p>
                      </div>
                    </div> 
                  </li>

                  <li
                    className="animates animate__fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-offset="100"
                  >
                    <div className="icon">
                      <img
                        src="/assets/images/icons/analysis-explore-more-iocn-3.webp"
                        alt="Economic Calendar"
                        width="175"
                        height="175"
                        data-lazy-src="/assets/images/icons/analysis-explore-more-iocn-3.webp"
                        data-ll-status="loaded"
                        className="entered lazyloaded"
                      />
                      <noscript>
                        <img
                          src="/assets/images/icons/analysis-explore-more-iocn-3.webp"
                          alt="Economic Calendar"
                          width="175"
                          height="175"
                        />
                      </noscript>
                    </div>
                    <div className="text-box">
                      <div className="text-box-inner">
                        <h3>Trading Signals</h3>
                        <p>
                        Stay ahead of the market with our daily forex trading signals, helping you identify the latest trading opportunities.
                        </p>
                      </div>
                    </div> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Market;
