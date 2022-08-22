import React from "react";

function Input({ userName, handleKeyDown, clickHandler }) {
  return (
    <div className="Search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        ref={userName}
        type="text"
        placeholder="Search Github Username..."
        onKeyDown={handleKeyDown}
      />
      <button onClick={clickHandler}>Search</button>
    </div>
  );
}

export default Input;
