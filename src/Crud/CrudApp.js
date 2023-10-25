import React, { useState } from "react";
import { get, post } from "../Api/ApiCalling";

const CrudApp = () => {
  const [items, setItems] = useState(["apple", "banana", "grapes", "mango"]);
  const [newItem, setNewItems] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setNewItems(e.target.value);
  };
  const addItems = () => {
    setItems([...items, newItem]);
    setNewItems("");
  };
  const editItems = (item) => {
    console.log("item", item);
    setIsEditing(true);
    setSelectedItem(item);
    setNewItems(item);
  };

  const updateItem = () => {
    const updateItem = items.map((item) =>
      item === selectedItem ? newItem : item
    );
    console.log('update', updateItem);
    setItems(updateItem);
    setNewItems("");
    setIsEditing(false);
  };

  const deleteItem = (item) => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  };
  get("http://localhost:5000/posts").then((res) => console.log(res));
  
  return (
    <div>
      <h4>CrudApp</h4>
      <input
        value={newItem}
        type="text"
        placeholder="Enter item..."
        name=""
        id=""
        onChange={handleChange}
      />
      {isEditing ? (
        <button onClick={updateItem}>Update</button>
      ) : (
        <button onClick={addItems}>Add</button>
      )}
      

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => editItems(item)}>Edit</button>{" "}
            <button onClick={() => deleteItem(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
