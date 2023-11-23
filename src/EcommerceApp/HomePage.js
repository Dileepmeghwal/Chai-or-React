import React from "react";
import { get, post } from "../Api/ApiCalling";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const HomePage = () => {
    const navigate = useNavigate()
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState();
  const [isCreate, setCreate]=useState(false)
  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    get("https://api.escuelajs.co/api/v1/products").then((res) => {
      console.log(res);
      setProduct(res);
      setSearchProduct(res);
    });
  };

  const searchHandle = (e) => {
    let searchText = e.target.value;
    setSearch(searchText);

    let filterText = searchProduct.filter(
      (item) => item.title.toLowerCase().indexOf(searchText) !== -1
    );
    setProduct(filterText);
  };

  return (
    <div className=" gap-3 m-3 ">
      <div className="container mb-2 flex end-full ">
        <label class="relative block ">
          <span class="sr-only">Search</span>
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            value={search}
            onChange={searchHandle}
          />
        </label>
        <Button className="bg-blue-500 text-white" icon={<SearchOutlined />} href="https://www.google.com" />
        
      </div>
      <button
        className="bg-slate-900 p-1 text-white rounded-lg "
        // onClick={postimage}
        onClick={() => setCreate(true)}
      >
        Add
      </button>
      {isCreate && (
        <CreateProduct />
      )}
      <p>{`all products: ${product.length}`}</p>
      {product.map((item) => (
        <div className="" onClick={() => navigate(`/product/${item.id}`)}>
          <span>
            <div className="bg-sky-800 rounded-md px-2">
              <div className="">
                <h3 class="text-slate-900 mt-5 text-base font-bold tracking-tight">
                  {item?.title}
                </h3>
                <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                  {item.description}
                </p>
                <span className="text-white dark:text-slate-400 mt-2 text-sm">
                  {item.creationAt}
                </span>
              </div>
              <div className="flex-1">
                <img src={item.images[0]} width={400} alt={item.title} />
              </div>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
