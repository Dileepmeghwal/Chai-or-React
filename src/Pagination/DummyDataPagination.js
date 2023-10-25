import React, { useEffect, useState } from "react";

const DummyDataPagination = () => {
  const dummyData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    // Add more data here
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; //number of items per page
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dummyData.length / pageSize);
  console.log("totalPages", totalPages);
  console.log("totalPages", indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - totalPages);
    }
  };
  const numbers = [1, -2, 3, -4, 5, -6, -2, -3];
  const result = numbers.filter((item) => item > 0);
  console.log(result);

  let sum = [];
  for (let i = 0; i < numbers.includes(-2); i++) {
    if (numbers[i] > 0) {
      sum.push(numbers[i]);
    }
  }
  console.log(sum);

  const strings = ["apple", "banana", "cherry", "date", "fig"];

  let empt = [];
  let longString = strings[0];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longString.length) {
      empt.push(longString[i]);
    }
  }
  const finds = strings.filter((item) => item.length);
  console.log("epppp", empt);
  const [data, setData] = useState("");
  const [storedData, setStoredData] = useState("");

  const saveDataFromLocalStorage = () => {
    localStorage.setItem("myData", data);
  };
  const loadDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("myData");
    setStoredData(storedData);
  };

  const clearDataFromLocalStorage = () => {
    localStorage.removeItem("myData");
    setStoredData("");
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  return (
    <div>
      <h4>DummyDataPagination</h4>
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>

      <div>
        <h1>LocalStorage Example</h1>
        <input
          type="text"
          placeholder="Enter data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={saveDataFromLocalStorage}>Save to LocalStorage</button>
        <button onClick={clearDataFromLocalStorage}>Clear LocalStorage</button>

        {storedData && (
          <div>
            <h2>Stored Data:</h2>
            <p>{storedData}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DummyDataPagination;
