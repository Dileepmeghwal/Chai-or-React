import React, { useEffect, useState } from "react";
import { editData, get, post, remove } from "../Api/ApiCalling";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ title: "", author: null });
  const [sortOrder, setSortOrder] = useState("asc");

  const getUser = () => {
    get("http://localhost:5000/posts").then((res) => setUserList(res));
  };

  const addUser = () => {
    const data = {
      title: title,
      author: null,
    };
    post("http://localhost:5000/posts", data)
      .then((res) => (console.log("created", res), setTitle(""), getUser()))
      .catch((error) => console.log(error));
  };

  const deleteData = (itemId) => {
    remove(`http://localhost:5000/posts/${itemId}`)
      .then((res) => {
        console.log("remove", res);
        getUser();
      })
      .catch((error) => console.log(error));
  };

  const editUserData = (itemId) => {
    setIsEditing(true);
    const itemEdit = userList.find((item) => item.id === itemId);
    setEditedData(itemEdit);
  };
  const saveEditedData = () => {
    editData(`http://localhost:5000/posts/${editedData.id}`, editedData)
      .then((res) => {
        setIsEditing(false);
        setEditedData({ title: "", author: null });
        console.log("updated", res);
        getUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const sortHandler = () => {
    const sort = [...userList];
    if (sortOrder === "asc") {
      sort.sort((a, b) => a.title.localeCompare(b.title));
      setSortOrder("asc");
    } else {
      sort.sort((a, b) => b.title.localeCompare(a.title));
      setSortOrder("desc");
    }
    setUserList(sort);
  };
  return (
    <div>
      <h6>UserList</h6>
      <input
        type="text"
        placeholder="Enter Name"
        name=""
        id=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addUser}>Add</button>
      <button onClick={sortHandler}>Sort</button>

      {userList.map((item) => (
        <div key={item.id}>
          <p>
            {isEditing && editedData.id === item.id ? (
              <div>
                <input
                  type="text"
                  value={editedData.title}
                  onChange={(e) =>
                    setEditedData({ ...editedData, title: e.target.value })
                  }
                />
                <button onClick={saveEditedData}>Save</button>
              </div>
            ) : (
              <>
                {item.title}{" "}
                <button onClick={() => editUserData(item.id)}>Edit</button>
                <button onClick={() => deleteData(item.id)}>Delete</button>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
