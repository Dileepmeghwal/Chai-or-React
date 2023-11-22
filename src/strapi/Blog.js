import React, { useCallback } from "react";
import { BASE_URL, get, post } from "../Api/ApiCalling";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [restaurant, setRestaurent] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");

  const postPerPage = 5;
  const [articles, setArticles] = useState([]);

  const [totalPages, setTotalPages] = useState(1);

  const [restaurantList, setRestaurentList] = useState();

  useEffect(() => {
    getData();
    // postDetails();
  }, []);

  const handleSinglePost = (id) => {
    navigation(`/blog/${id}`);
  };

  const handleSerach = useCallback(
    (e) => {
      const searchText = e.target.value;
      setSearch(searchText);

      if (searchText === "") {
        setRestaurent(restaurantList);
      } else {
        const text = restaurantList.filter(
          (item) => item.name.toLowerCase().indexOf(searchText) !== -1
        );
        setRestaurent(text);
      }
    },
    [restaurantList]
  );

  const getData = () => {
    setLoading(true);
    // get("/restaurants?populate=*")
    get(`http://localhost:1337/api/restaurants?populate=*`)
      .then((res) => {
        console.log("paging", res);
        const response = res.data;
        const list = response.map((item) => {
          let createdDate = new Date(
            item.attributes.publishedAt
          ).toLocaleString();

          return {
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            publishedAt: createdDate,
            updatedAt: item.attributes.updatedAt,
            isAdmin: item.attributes.isAdmin,
            avatar: item.attributes.avatar.data.attributes,
            categories: item.attributes.categories.data,
            des: item.attributes.des,
          };
        });

        console.log("list", list);
        setRestaurent(list);
        setRestaurentList(list);
        console.log("response", response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  const sendData = () => {
    axios
      .post(`http://localhost:1337/api/restaurants`, {
        data: {
          name: "Dolemon Sushi",
        },
      })
      .then((response) => {
        console.log("***", response);
      });
  };

  // const postDetails = () => {
  //   get("http://localhost:1337/api/posts?populate=*")
  //     .then((res) => console.log("post", res))
  //     .catch((error) => console.error(error));
  // };
  return (
    <div className="container mx-auto px-4" style={style.container}>
      <p>{process.env.API_KEY}</p>
      <input
        placeholder="search..."
        value={search}
        onChange={handleSerach}
        type="text"
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <div>
        {isLoading ? <p>Loading...</p> : ""}
        {error && <p>{error}</p>}

        {restaurant.length === 0 ? (
          <p>Sorry it is not found!</p>
        ) : (
          restaurant?.map((item, id) => (
            <div key={item.id} style={style.div}>
              <h4 className="text-3xl">{item?.name}</h4>
              <p>{item?.description}</p>

              <img
                src={`http://localhost:1337${item.avatar.url}`}
                alt={item.avatar.name}
                width={400}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />

              <p> {item.des}</p>

              <div
                style={{
                  padding: "12px",

                  backgroundColor: "#f8f8f8",
                  marginBottom: "12px",
                }}
              >
                {item.categories.map((item) => (
                  <p>{item.attributes.name}</p>
                ))}
              </div>

              <button
                className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md px-3 p-1"
                onClick={() => {
                  handleSinglePost(item.id);
                }}
              >
                Read More
              </button>
              <p>createdAt : {item.publishedAt}</p>
            </div>
          ))
        )}
      </div>

      <button className="bg-slate-600 py-2 mx-2 p-2 rounded-md">Pre</button>
      <button className="bg-sky-600 py-2 mx-2 p-2 rounded-md">Next</button>
    </div>
  );
};

export default Blog;

const style = {
  div: {
    backgroundColor: "#dddd",
    padding: "20px",
    marginBottom: "20px",
  },
};
