import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
function Menu() {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const menuItems = [
    { Item: "Home", hasChildren: false, path: "/" },
    { Item: "Calendar", hasChildren: false, path: "/economic-calendar"},
    { Item: "Trading", hasChildren: false, path: "/trading" },
    { Item: "Education", hasChildren: false, path: "/education" },
    { Item: "About", hasChildren: false, path: "/about" },
  ];

  const expandMe = (index) => {
    setSubMenuIndex(index)
    if(subMenuIndex === index) {
      setSubMenuIndex(null);
    }
  }

  const ReturnChildrenMenu = (menuItems, ind) => {
    const display = subMenuIndex === ind ? 'show-subMenuItems': ''
    return (
      <>
        <ul className={display}>
          {
            menuItems.map((child) => (<li key={child.path}>
              <Link to={child.path}>{child.name}</Link>
            </li>))
          }
        </ul>
        <div class={`dropdown-btn d-block d-md-none ${display !=='' && ind === subMenuIndex ? 'open' :''} `} onClick={() => expandMe(ind)}>
          <span class="fas fa-angle-down"></span>
        </div>
      </>
      
    );
  };

  return (
    <>
      <div className="collapse navbar-collapse show clearfix">
        <ul className="navigation clearfix">
          {menuItems.map((item, ind) => (
            <li key={item.Item} className={`${ind === 0 ? 'current' : ''} ${item.hasChildren ? "dropdown" : "no-sublinks"}`}>
              {/* <a href="index-2.html">{item.Item}</a> */}
              <Link to={item.path} >{item.Item}</Link>
              {item.hasChildren ? ReturnChildrenMenu(item.children, ind) : ''}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;
