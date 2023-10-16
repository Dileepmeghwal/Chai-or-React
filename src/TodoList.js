import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  console.log(tasks);

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditTaskId(id);
  };

  const handleSave = (id, newText) => {
    setIsEditing(false);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setTasks([...tasks, { id: nextId++, text: text }]);
          setText("");
        }}
      >
        Add
      </button>
      {tasks.map((task) => (
        <ul key={task.id}>
          <li>
            {isEditing && editTaskId === task.id ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleSave(task.id, e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => (isEditing ? handleSave(task.id, task.text) : handleEdit(task.id))}>
              {!isEditing ? "Edit" : "Save"}
            </button>
            <button
              onClick={() => {
                setTasks(tasks.filter((t) => t.id !== task.id));
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
