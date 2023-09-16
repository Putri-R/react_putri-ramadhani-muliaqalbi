import React, { useState } from "react";

const ButtonRandomNumber = () => {
  const [num, setNum] = useState(0);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    const Number = randomNumber(1, 100);
    console.log(`Random number is: ${Number}`);
    setNum(Number);
  };

  return (
    <div className="wrapper">
      <button onClick={handleClick} 
        type="submit"
        className="btn btn-primary"
        id="submitbtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">Submit</button>
    </div>
  );
};

export default ButtonRandomNumber;
