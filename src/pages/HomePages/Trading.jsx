import React from "react";
import "./Trading.css";

function Trading() {
  return (
    <>
      <section className="pricing-section sec-pad">
        <div className="pattern-layer"></div>
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">OM Vinayak Trading</span>
            <h2>
              Top <span>Pricing</span> List in Market
            </h2>
          </div>
          <div className="tabs-box">
            <div className="tab-btn-box">
              <ul className="tab-btns tab-buttons clearfix">
                <li className="tab-btn active-btn" data-tab="#tab-1">
                  <h5>Option 01</h5>
                </li>
                <li className="tab-btn" data-tab="#tab-2">
                  <h5>Option 02</h5>
                </li>
              </ul>
              <div className="search-inner">
                <form
                  action="https://azim.hostlin.com/Bullion/index.html"
                  method="post"
                >
                  <div className="form-group">
                    <input
                      type="search"
                      name="search-field"
                      placeholder="Search the instruments..."
                      required
                    />
                    <button type="submit">
                      <i className="flaticon-loupe"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="tabs-content">
              <div className="tab active-tab" id="tab-1">
                <div className="table-outer">
                  <table className="pricing-table">
                    <thead className="table-header">
                      <tr>
                        <th>Name</th>
                        <th>&nbsp;</th>
                        <th>Sell</th>
                        <th>Buy</th>
                        <th>Spread</th>
                        <th>Chart</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              eur<i className="flaticon-exchange"></i>usd
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$1.06199</td>
                        <td>$1.06185</td>
                        <td>
                          <span className="red">-0.14%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-1.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              usd<i className="flaticon-exchange"></i>jpy
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$1.22195</td>
                        <td>$1.22199</td>
                        <td>
                          <span className="green">+0.04%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-2.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              gbp<i className="flaticon-exchange"></i>usd
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$0.65982</td>
                        <td>$0.65994</td>
                        <td>
                          <span className="green">+0.12%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-3.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              aud<i className="flaticon-exchange"></i>usd
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$0.89652</td>
                        <td>$0.89665</td>
                        <td>
                          <span className="green">+0.13%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-4.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              eur<i className="flaticon-exchange"></i>gbp
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$25.458</td>
                        <td>$22.398</td>
                        <td>
                          <span className="red">-3.06%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-5.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              aud<i className="flaticon-exchange"></i>cad
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$14.785</td>
                        <td>$13.625</td>
                        <td>
                          <span className="red">-1.16%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-6.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab" id="tab-2">
                <div className="table-outer">
                  <table className="pricing-table">
                    <thead className="table-header">
                      <tr>
                        <th>Name</th>
                        <th>&nbsp;</th>
                        <th>Sell</th>
                        <th>Buy</th>
                        <th>Spread</th>
                        <th>Chart</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              eur<i className="flaticon-exchange"></i>usd
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$1.06199</td>
                        <td>$1.06185</td>
                        <td>
                          <span className="red">-0.14%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-1.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              usd<i className="flaticon-exchange"></i>jpy
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$1.22195</td>
                        <td>$1.22199</td>
                        <td>
                          <span className="green">+0.04%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-2.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              gbp<i className="flaticon-exchange"></i>usd
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$0.65982</td>
                        <td>$0.65994</td>
                        <td>
                          <span className="green">+0.12%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-3.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              aud<i className="flaticon-exchange"></i>usd
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$0.89652</td>
                        <td>$0.89665</td>
                        <td>
                          <span className="green">+0.13%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-4.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              eur<i className="flaticon-exchange"></i>gbp
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$25.458</td>
                        <td>$22.398</td>
                        <td>
                          <span className="red">-3.06%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-5.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="name-box">
                            <p>
                              aud<i className="flaticon-exchange"></i>cad
                            </p>
                          </div>
                        </td>
                        <td>&nbsp;</td>
                        <td>$14.785</td>
                        <td>$13.625</td>
                        <td>
                          <span className="red">-1.16%</span>
                        </td>
                        <td>
                          <div className="chart">
                            <img src="assets/images/icons/chart-6.png" alt="" />
                          </div>
                        </td>
                        <td>
                          <a href="index-2.html">
                            <i className="flaticon-right-down"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="link-box centred">
            <a href="index-2.html">
              <span>See More</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trading;
