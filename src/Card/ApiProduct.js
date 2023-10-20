import React, { useEffect, useState } from "react";
import { get, post, remove } from "../Api/ApiCalling";

const ApiProduct = () => {
  const [product, setProduct] = useState([]);
  const [text, setText] = useState("");

  const getData = () => {
    const id = 10;
    get(`/todos/${id}`).then((res) => {
      console.log("res", res);
      const data = res;
      setProduct(data);
    });
  };

  const postData = () => {
    const data = {
      completed: true,

      title: text,
      userId: 3,
    };
    post("/todos", data)
      .then((res) => console.log("post created", res))
      .catch((error) => {
        console.log("Error creating the post:", error);
      });
    getData();
  };

//   const deleteData = () => {
//     const id = 1;

//     remove(`/todos/${id}`)
//       .then((res) => console.log("Post deleted", res))
//       .catch((error) => {
//         console.log("error deleting", error);
//       });
//   };

  useEffect(() => {
    getData();
  }, []);

  const createPost = () => {
    postData();
  };
//   const removeData = () => {
//     deleteData();
//   };
  return (
    <div>
      <h2>Api data</h2>
      <input
        type="text"
        placeholder="create todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={createPost}>Create</button>
      {/* <button onClick={removeData}>Delete</button> */}
      {/* {product.length >0  && product?.map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
        </ul>
      ))} */}
      {product}
    </div>
  );
};

export default ApiProduct;
