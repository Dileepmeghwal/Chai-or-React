import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import { useState } from "react";
import { MyContext } from "./MyContext";
import Calculator from "./Calculator";
import Product from "./Product";
import Shop from "./ShopingApp";
import ShopingApp from "./ShopingApp";
import StoreApp from "./StoreApp";

function App() {
  const [text, setText] = useState("");
  const user = {
    name: "admin",
    isLoggedIn: false,
  };

  return (
    <>
      <MyContext.Provider value={{ text, setText, user }}>
        {/* <MyComponent data={user}/> */}
        {/* <Calculator/> */}
        {/* <Product/> */}
      </MyContext.Provider>
      {/* <ShopingApp /> */}
      <StoreApp />
    </>
  );
}

export default App;
