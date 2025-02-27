import React, { useState } from "react";
import "./Menu.css";
function Menu() {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const menuItems = [
    {
      Item: "Home",
      hasChildren: false,
    },
    {
      Item: "Markets",
      hasChildren: true,
      children: ["Markets", "Details"],
    },
    {
      Item: "Trading",
      hasChildren: true,
      children: ["Trading", "Details"],
    },
    {
      Item: "Education",
      hasChildren: true,
      children: ["Education", "Details"],
    },

    {
      Item: "About",
      hasChildren: false,
    },
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
            menuItems.map((item) => (<li><a href="markets.html">{item}</a></li>))
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
              <a href="index-2.html">{item.Item}</a>
              {item.hasChildren ? ReturnChildrenMenu(item.children, ind) : ''}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Menu;
