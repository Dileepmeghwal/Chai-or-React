import React from "react";
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
  const filterValue = [...restaurant];

  useEffect(() => {
    getData();
  }, []);

  // console.log("restaurent", filterValue);
  // const filtered = Products.filter(
  //   (product) => product.name.toLowerCase().indexOf(searchText) !== -1
  // );

  const handleSinglePost = (id) => {
    navigation(`/blog/${id}`);
  };

  // if (selectedGenre === "") {
  //   setFilterBook("");
  //   setBooklist(books);
  // } else {
  //   setFilterBook(selectedGenre);
  //   const filteredBooks = books.filter(
  //     (book) => book.genre === selectedGenre
  //   );
  //   setBooklist(filteredBooks);
  // }

  const handleSerach = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);

    if (searchText === "") {
      setRestaurent(filterValue);
    } else {
      const text = filterValue.filter(
        (item) => item.name.toLowerCase().indexOf(searchText) !== -1
      );
      setRestaurent(text);
    }
  };

  const getData = () => {
    setLoading(true);
    get("/restaurants?populate=*")
      .then((res) => {
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
          };
        });
        console.log("list", list);
        setRestaurent(list);
        console.log("response", response);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendData = () => {
    axios
      .post(`http://localhost:1337/api/restaurants?fields[0]="name"`, {
        data: {
          name: "Dolemon Sushi",
        },
      })
      .then((response) => {
        console.log("***", response);
      });
  };
  return (
    <div className="container" style={style.container}>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={handleSerach}
      />
      <div>
        {isLoading ? <p>Loading...</p> : ""}
        <button onClick={sendData}>Send</button>
        {restaurant?.map((item, id) => (
          <div key={item.id} style={style.div}>
            <h4>{item?.name}</h4>
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
              onClick={() => {
                handleSinglePost(item.id);
              }}
            >
              Read More
            </button>
            <p>createdAt : {item.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

const style = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  div: {
    backgroundColor: "#dddd",
    padding: "20px",
    marginBottom: "20px",
  },
};
