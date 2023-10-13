import React, { useState } from "react";

const Products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const StoreApp = () => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(Products);

  //   const filterData = Products.filter((product) =>
  //     product.name.toLowerCase().includes(filterText.toLowerCase())
  //   );

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();

    const filtered = Products.filter(
      (product) => product.name.toLowerCase().indexOf(searchText) !== -1
    );
    setFilterText(searchText);
    setFilteredProducts(filtered);
  };

  const handleStockOnly = (e) => {
    const stockOnly = Products.filter((item) => item.stocked && item.stocked);
    setInStockOnly(e.target.checked);
    if (e.target.checked) {
      setFilteredProducts(stockOnly);
    } else {
      setFilteredProducts(Products);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={handleSearch}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={handleStockOnly}
            // onChange={() => setShowStocked(!showStocked)}
          />{" "}
          Only show products in stock
        </label>
      </form>

      <div className="header" style={{ display: "flex" }}>
        <div style={{ width: "600px" }}>
          <h3>Name</h3>
          {/* <ul>
            {filteredProducts.length === 0 ? (
              <p>No matching items found.</p>
            ) : (
              filteredProducts.map((item) => (
                <li style={{ color: item.stocked ? "" : "red" }}>
                  {item.name}
                </li>
              ))
            )}
          </ul> */}
        </div>
        <div style={{ width: "150px" }}>
          <h3>Price</h3>
        </div>
      </div>

      <div>
        <h4>Fruits</h4>
        {filteredProducts
          .filter((item) => item.category === "Fruits")
          .map((item) => (
            <li style={{ color: item.stocked ? "" : "red" }}>{item.name}</li>
          ))}

        <h4>Vegetables</h4>
        {filteredProducts
          .filter((item) => item.category === "Vegetables")
          .map((item) => (
            <li style={{ color: item.stocked ? "" : "red" }}>{item.name}</li>
          ))}

        {filteredProducts.length === 0 && <p>No matching items found.</p>}
      </div>
    </div>
  );
};

export default StoreApp;
