import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { get, post } from "../Api/ApiCalling";
import { useState } from "react";
import axios from "axios";

const BlogDetails = () => {
  const { state } = useLocation();
  // console.log("state", state);
  const { postId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getRestaurentDetails();
  }, []);

  const getRestaurentDetails = () => {
    get(`/restaurants/${postId}?populate=*`).then((res) => {
      let singleData = res.data.attributes;
      console.log("blog id", singleData);
      setDetails(singleData);
    });
  };

  return (
    <div>
      <h4>BlogDetails</h4>
      <h2>{details?.name}</h2>
      <p>{details?.description}</p>
      <div style={{ width: "200px" }}>
        <img
          src={`http://localhost:1337${details?.avatar?.data?.attributes?.url}`}
          alt=""
          width={400}
        />
      </div>
      {/* <small>{new Date(details?.publishedAt).toDateString()}</small> */}
    </div>
  );
};

export default BlogDetails;
