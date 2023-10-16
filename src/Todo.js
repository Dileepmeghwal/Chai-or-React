import React, { useState } from "react";

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
const Todo = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);
  const [nextId, setNextID] = useState(2);

  console.log("todo", artists);

  //   const fetchtData = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve("data fetched successfully");
  //       }, 1000);
  //     });
  //   };
  //   fetchtData()
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error(error));

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchData();

  const handleEditChange = (e, id) => {
    const newText = e.target.value;
    setArtists((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        text: todo.id === id ? newText : todo.text,
      }))
    );
  };

  return (
    <div>
      <p>Add to List</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setArtists((prevArtists) => [
            ...prevArtists,
            { id: nextId, name: name },
          ]);
          setNextID(nextId * 2);
        }}
      >
        Add
      </button>

      <ul>
        {artists.map((artist) => (
          <>
            <li key={artist.id}>
              {artist.name} <button onClick={handleEditChange}>Edit</button>
              <button
                onClick={() =>
                  setArtists(artists.filter((a) => a.id !== artist.id))
                }
              >
                Delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
