import React, { useState } from "react";

const Form = () => {
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
        <input type="text" value={person.firstName} onChange={handleFirstNameChange} />
        <input type="text" value={person.lastName} onChange={handleLastName} />
        <input type="email" onChange={handleEmail} value={person.email} />
      </form>

      <p>
      {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </div>
  );
};

export default Form;
