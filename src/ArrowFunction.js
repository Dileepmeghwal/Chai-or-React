import React from "react";

const ArrowFunction = () => {
  // before

  //   let show = function () {
  //     console.log("Anonymous function");
  //   };

  // after

  //   let show = () => console.log("annonyms");

  //   console.logs(show());

  //   let add = function (a, b) {
  //     return a + b;
  // };
  //   let add = (a, b) => a + b;
  //   console.log(add(10, 20));

  function say(message) {
    message = typeof message !== "undefined" ? message : "Hi";
    console.log(message);
  }
  say("Welcome!"); // 'Hi'

  function createDiv(height = "100px", width = "100px", background = "red") {
    let div = document.createElement("div");
    div.style.width = width;
    div.style.height = height;
    div.style.background = background;
    document.body.appendChild(div);
    return div;
  }
  //   createDiv();
  const title = document.getElementById("msg");
  console.log(title);

  let elements = document.getElementsByName("language");
  const btn = document.getElementById("mybtn");
  const output = document.getElementById("output");

  function clickHandler() {
    btn.addEventListener("click", () => {
      let value = document.getElementsByName("language");
      value.forEach((val) => {
        if (val.checked) {
          output.innerText = `you selectd ${val.value}`;
        }
      });
    });
  }
  console.log(elements);
  window.addEventListener("scroll", (event) => {
    let value = 40;
    if (value > 100) {
      console.log("stop scrolling");
    } else {
      console.log("okay");
    }
    console.log("Scrolling...");
  });
  return (
    <div>
      <h1 id="msg">ArrowFunction</h1>
      <input type="radio" name="language" value="JavaScript" />
      <input type="radio" name="language" value="TypeScript" />
      <button id="mybtn" onClick={clickHandler}>
        click
      </button>
      <div id="output"></div>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        voluptatibus nulla sit amet quas magni culpa velit corporis repellat
        asperiores.
      </p>
    </div>
  );
};

export default ArrowFunction;
