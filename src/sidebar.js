import React, { useState } from "react";
import { useDarkMode } from "./Context/DarkModeContext";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const cardStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
  };

  // function greet() {
  //   console.log("god");
  // }
  // console.log(greet.prototype);

  // let nodeList = document.querySelectorAll(".menu-item");
  // console.log(nodeList);
  // let element = Array.from(nodeList);
  // element.map((item) => item.li);
  // console.log(
  //   "element",
  //   element.map((item) => item.className)
  // );

  // toggle

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(true);
  };

  const inputStyles = {
    backgroundColor: isFocused ? "yellow" : "green",
  };

  // let re = /[A-Z]/;
  // // let str = 'hi There! How are you?'
  // let str = "iBabu Bhaiya Ramesh"
  // let index = str.search(re)
  // console.log('index',index);

  // let str = 'finding substring in string';
  // let index = str.indexOf('u')
  // console.log('index', index);

  //   let str = 'You do not know what you do not know until you know.';
  // let substr = 'know';

  // let count = 0;

  // let index = str.indexOf(substr);
  // while(index !== -1) {
  //     count++;
  //     index = str.indexOf(substr, index + 1);
  // }

  // console.log(count);

  let str = "javaScript";
  let index = str.lastIndexOf("a");
  let arr = str.indexOf("j");
  console.log(index, arr);

  return (
    <div
      className={`app ${isSidebarOpen ? "sidebar-open" : ""}`}
      style={cardStyle}
    >
      <div className="sidebar">
        {/* Sidebar content and navigation links */}
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
      </div>
      <button onClick={toggleDarkMode}>{isDarkMode ? "on" : "off"}</button>
      <div className="content">
        <div className="App">
          <ul id="main-menu">
            <li>Home</li>
            <li>About</li>
            <li>
              <ul>
                <li>Nmae</li>
                <li>Nmae</li>
                <li>Nmae</li>
              </ul>
            </li>
            <li>Blog</li>

          </ul>
          <ul id="">
            <li>Item 1</li>
            <li>
              Item 2
              <ul>
                <li>Subitem 1</li>
                <li>Subitem 2</li>
              </ul>
            </li>
            <li>Item 3</li>
          </ul>
        </div>
        <ul>
          <li className="menu-item current">
            <a href="#home">Home</a>
          </li>
          <li className="menu-item">
            <a href="#services">Services</a>
          </li>
          <li className="menu-item">
            <a href="#about">About</a>
          </li>
          <li className="menu-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div id="content">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
