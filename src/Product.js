import React from "react";
import { useState } from "react";
import ArrowFunction from "./ArrowFunction";
const productData = [
  { id: 1, name: "Product A", price: 50 },
  { id: 2, name: "Product B", price: 30 },
  { id: 3, name: "Product C", price: 70 },
  // Add more product objects as needed
];
const Product = () => {
  const [products, setProducts] = useState(productData);
  const [filter, setFilter] = useState("all"); // 'all', 'less', 'more'

  const filteredData = products.filter((product) => {
    if (filter === "less") {
      return product.price < 50;
    } else if (filter === "more") {
      return product.price > 50;
    } else {
      return true;
    }
  });

  // function fetchNames(...value) {
  //   let names = value;

  //   return names;
  // }

  // console.log(fetchNames("Dileep", "Amit", "raju"));
  // console.log(fetchNames("Viaksh", "sssAmit", "radsdju"));

  // function isValid(value) {
  //   let error = false;
  // }

  // function say(msg) {
  //   let name = "Dileep";
  //   return msg + ' ' + name;
  // }
  // console.log(say(" Welcome"));

  // function Say(message) {
  //   console.log(message);
  //   return message;
  // }
  // let result = Say("Dileep");
  // console.log("result", result);

  // function add(a, b) {
  //   return a + b;
  // }
  // let sum = add(10, 30);
  // console.log(sum);

  // function calculateYearsBetweenDates(startDate, endDate) {
  //   // Create Date objects from the provided date strings
  //   const startDateObj = new Date(startDate);
  //   const endDateObj = new Date(endDate);

  //   // Calculate the time difference in milliseconds
  //   const timeDifference = endDateObj - startDateObj;

  //   // Calculate the number of milliseconds in a year
  //   const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years

  //   // Calculate the number of years
  //   const yearsDifference = timeDifference / millisecondsPerYear;

  //   return yearsDifference;
  // }

  // // Usage example
  // const startDate = "1999-03-15"; // Start date in yyyy-mm-dd format
  // const endDate = "2023-10-13"; // End date in yyyy-mm-dd format
  // const yearsDifference = calculateYearsBetweenDates(startDate, endDate);

  // console.log(
  //   `The number of years between ${startDate} and ${endDate} is approximately ${yearsDifference.toFixed(
  //     2
  //   )} years.`
  // );

  // function compare(a, b) {
  //   if (a > b) {
  //     return -1;
  //   } else if (a < b) {
  //     return 1;
  //   }
  //   return 0;
  // }
  // console.log(compare(1, 1));

  // function msg(text) {
  //   if (!text) {
  //     return;
  //   }
  //   console.log(text);
  // }
  // msg();

  // function add() {
  //   let sum = 0;
  //   for (let i = 0; i < arguments.length; i++) {
  //     sum += arguments[i];
  //   }
  //   return sum;
  // }
  // console.log(add(1, 2, 3, 4, 5, 6)); // 3

  // console.log(showMe("good morning"));
  // function showMe(msg) {
  //   console.log("an hoisting example");
  //   return msg;
  // }

  // function compareBy(propertyName) {
  //   return function (a, b) {
  //     let x = a[propertyName],
  //       y = b[propertyName];

  //     if (x > y) {
  //       return 1;
  //     } else if (x < y) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   };
  // }
  // let productss = [
  //   { name: "iPhone", price: 900 },
  //   { name: "Samsung Galaxy", price: 850 },
  //   { name: "Sony Xperia", price: 700 },
  // ];

  // // sort products by name
  // console.log("Products sorted by name:");
  // productss.sort(compareBy("name"));

  // console.table(productss);

  // // sort products by price
  // console.log("Products sorted by price:");
  // productss.sort(compareBy("price"));
  // console.table(productss);

  // (function () {
  //   console.log("IIFE");
  // });

  // let show = function () {
  //   console.log("annoymous functino");
  // };
  // show();

  // setTimeout(function () {
  //   console.log("Execute later after 1 second");
  // }, 1000);

  (function () {
    console.log("IIFE");
  })();

  let person = {
    firstName: "John",
    lastName: "Doe",
  };
  (function () {
    console.log(person.firstName + " " + person.lastName);
  })(person);
  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>All Products</button>
        <button onClick={() => setFilter("less")}>Price Less Than 50</button>
        <button onClick={() => setFilter("more")}>Price More Than 50</button>
      </div>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>


      <ArrowFunction/>
    </div>
  );
};

export default Product;
