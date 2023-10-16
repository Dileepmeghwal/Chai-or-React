import React, { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  //   const numbers = [1, 2, 3, 4, 5];
  // const res = numbers.forEach((number) => {
  //   console.log(number); // Side effect: logging each number
  // });
  // console.log(res);

//   const numbers = [1, 2, 3, 4, 5];
//   const doubled = numbers.map((number) => {
//     let value = number * 2;
//     return value;
//   });
//   console.log(doubled); // [2, 4, 6, 8, 10]
//   console.log(numbers);

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      <span style={{ textDecoration: task.done ? "line-through" : "" }}>
        {taskContent}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
