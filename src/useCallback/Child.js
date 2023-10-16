import React, { memo } from "react";

const Child = ({increment, learning}) => {
    console.log('child component');
  return (
    <div>
      <h2>Child Component</h2>
      {/* <button onClick={increment}>Increment Count</button> */}
    </div>
  );
};

export default memo(Child);
