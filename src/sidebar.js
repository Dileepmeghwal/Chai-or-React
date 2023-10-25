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
  const [isChecked, setIsChecked] = useState(false);

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

  // let str = "javaScript";
  // let index = str.lastIndexOf("a");
  // let arr = str.indexOf("j");
  // console.log(index, arr);

  let rivers = ["Nile", "ganges", "yanges"];
  let moreRiver = ["danube", "Amazon"];

  [].push.apply(rivers, moreRiver);
  // console.log(rivers);

  // const onCheckHandler = (e) => {
  //   if (isChecked) {
  //     console.log("Good Morning");
  //   } else {
  //     console.log("Good Night");
  //   }
  //   setIsChecked(e.target.checked);
  // };

  let numbers = [2, 4, 5];
  // let result = numbers.every((e) => e >= 2);
  // console.log("res", result);

  //some in js
  let marks = [4, 5, 7, 9, 10, 3];

  // let lessthanFive = false;

  // for (let index = 0; index < marks.length; i++) {
  //   if (marks[index] < 5) {
  //     lessthanFive = true;
  //     break;
  //   }
  // }
  // console.log(lessthanFive);s

  let num = [0, 1, 2, 3, 10, 20, 30];
  num.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  // console.log("sort", num);

  // let animals = ["cat", "dog", "elephant", "bee", "ant"];
  // animals.sort();
  // console.log("string sort", animals);

  let employees = [
    { name: "John", salary: 90000, hireDate: "July 1, 2010" },
    { name: "David", salary: 75000, hireDate: "August 15, 2009" },
    { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
  ];
  employees.sort((x, y) => {
    return x.salary - y.salary;
  });
  // console.log("employees", employees);

  // let logged = true;
  // if (logged) {
  //   console.log("logged IN");
  // }
  // let age = 16;
  // if (age >= 18) {
  //   console.log("you can sign up!");
  // } else {
  //   console.log("you must be at least 18 to sign up!");
  // }
  // const add = (x, y) => x + y;
  // try {
  //   let result = add(10, 20);
  //   console.log(result);
  // } catch (e) {
  //   console.log({ name: e.name, message: e.message });
  // }
  // console.log("Bye");
  // let result = 0;
  // try {
  //   result = add(10, 20);
  // } catch (e) {
  //   console.log(e.message);
  // } finally {
  //   console.log([result].find(i => i));
  // }
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
      <input
        placeholder=""
        type="checkbox"
        //onChange={onCheckHandler}
      />
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
