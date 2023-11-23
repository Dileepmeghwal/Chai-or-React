import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../Api/ApiCalling";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id);
  const [singleItem, setSingleItem] = useState([]);
  useEffect(() => {
    getSingleItem();
  }, []);
  const getSingleItem = () => {
    get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        console.log(res);
        setSingleItem(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-white-400 shadow-lg p-4 m-2">
      <h1>SingleProduct</h1>
      <h4 className="font-bold from-zinc-600  ">{singleItem.title}</h4>
      {singleItem.images.map((item) => (
        <img src={item} />
      ))}
    </div>
  );
};

export default SingleProduct;
