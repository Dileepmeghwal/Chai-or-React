import React, { useRef, useState } from "react";
import { PhoneInput } from "./PhoneInput";

const Form = () => {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && inputRef.current) {
      inputRef.current.focus();
    }
  };
  const [person, setPerson] = useState({
    firstName: "Animal",
    lastName: "Forest",
    email: "animal@gmail.com",
  });

  const handleFirstNameChange = (e) => {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  };
  const handleLastName = (e) => {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
        <input type="text" value={person.lastName} onChange={handleLastName} />
        <input type="email" onChange={handleEmail} value={person.email} />

        
        <div
          className="custom-input"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        ></div>
      </form>

      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>

      <button id="btn">click</button>
    </div>
  );
};

export default Form;
