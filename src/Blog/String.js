import React from "react";

import { useEffect } from "react";
import { useCounter } from "../Context/CounterContext";

const String = ({ initialValue }) => {
  //   let str = "finding substring in string";
  //   console.log(str.indexOf('str'));   //outpu : 11

  //   let str = 'JavaScript'
  //   let index =  str.indexOf('a',2)
  //   console.log(index);

  // ======startsWith()=============

  const title = "Jack and Jill Went Up the Hill";
  console.log(title.startsWith("Jill", 9));

  // ======endsWith()=============

  console.log(title.endsWith("Hill"));

  // match

  // let str = "Price: $5-$10"
  // let result = str.match(/\$\d+/)
  // console.log(result);

  let str = "I like yellow color palette!";

  // let re = /(?<color>yellow) color/;
  // let result = str.match(re);

  // console.log(result);

  // /replace  //replace(regexp, newSubstr)
  // const s = 'JS and js';
  // const res = /js/i;
  // const newS = s.replace(res, 'JavaScript')
  // console.log(newS);

  // let username = "Dileep"
  // const respo = /Dileep/i
  // console.log(username.replace(respo, 'Hanyman'));

  //global flag
  // const t = 'Js and js'
  // const ress = /js/gi
  // console.log(t.replace(ress, 'JavaScript'));

  //   let re = /(\w+)\s(\w+)/;
  //   let name = "Jane Doe";
  //   let lastFirst = name.replace(re, "$2, $1");

  //   console.log(lastFirst);

  //   function replaceer(regex, offset) {
  //     return (offset > 0 ? "-" : "") + regex.toLowerCase();
  //   }
  //   console.log(replaceer);

  //   const odd = [1, 3, 5];
  //   const combined = [2, 4, 6, ...odd];
  //   console.log(combined);

  //   function add(...args) {
  //     console.log(args);
  //   }
  //   add(10, 30, 40);

  //   let score = [100,300,400]
  //   let newScore = [...score]
  //   console.log('new score', newScore);

  //   let chars = ['A', ...'BC', 'D'];
  //   console.log(chars)

  // let resultString = '  JS trim  '
  // let find = resultString.trim()
  // console.log(find)

  // let name = 'DIleep string Split()'
  // let newStr = name.split(' ')

  // console.log(newStr);

  let string = "JavaScript String split()";
  // let substrings = string.split(' ',1);
  // let substrings = string.substring(0,10)
  let substrings = string.substring(11);
  console.log(substrings);

  let email = "jhon.doe@gmail.com";
  let domain = email.substring(email.indexOf("@") + 1);
  console.log(domain);

  const greet = "Hello";
  console.log(greet);
  const subs = greet.slice(3);
  console.log(subs);

  const { increment, count, decrement } = useCounter(initialValue);

  return (
    <div>
      <p>UseCustom Hook</p>
    </div>
  );
};

export default String;
