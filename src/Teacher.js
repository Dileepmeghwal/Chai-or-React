import React, { useEffect, useState } from "react";
import { useCounter } from "./Context/CounterContext";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const Teacher = () => {
  const [tecaher, setTeacher] = useState(people);
  const { counter, inc, dec } = useCounter();
  useEffect(() => {
    const filterData = people.filter((item) => {
      return item.profession === "chemist";
    });
    setTeacher(filterData);
  }, []);

  //   console.log("people", people);
  //   console.log("filterData", filterData);

  function double(number) {
    return 2 * number;
  }
  console.log(double(2));
  const filterData = people.filter((item) => {
    return item.profession === "chemist";
  });

  let chemist = [];
  for (let i = 0; i < filterData.length; i++) {
    chemist.push(filterData[i].name);
  }
  console.log(people);
  const list = chemist.map((item) => item);
  //   console.log('list',list);

  return (
    <div>
      {tecaher.map((item) => (
        <ul>
          <li>{item.name}</li>
        </ul>
      ))}
      <ul>
        <li>{list}</li>
      </ul>
      
    </div>
  );
};

export default Teacher;
