import axios from "axios";
import React from "react";
import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    console.log(searchText);
  };
  const searchPosts = () => {
    // try{
    //     setLoading(true);
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
    //         if(response.ok){
    //             setSearchResult(data)
    //         }
    // }
  };
  return (
    <div>
      <div>
        <h2>API Search</h2>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        <button onClick={searchPosts}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
