import React from "react";
import "./Menu.css";
function Menu() {
return (
    <>
      <div
        className="collapse navbar-collapse show clearfix"
      >
        <ul className="navigation clearfix">
          <li className="current no-sublinks">
            <a href="index-2.html">Home</a>
          </li>
          <li className="dropdown">
            <a href="index-2.html">Markets</a>
            <ul>
              <li>
                <a href="markets.html">Markets</a>
              </li>
              <li>
                <a href="market-details.html">Details Page</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="index-2.html">Trading</a>
            <ul>
              <li>
                <a href="platform.html">Platform</a>
              </li>
              <li>
                <a href="account.html">Our Accounts</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="index-2.html">Education</a>
            <ul>
              <li>
                <a href="education.html">Education</a>
              </li>
              <li>
                <a href="education-details.html">Detail Page</a>
              </li>
            </ul>
          </li>
          <li className="dropdown no-sublinks">
            <a href="index-2.html">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
