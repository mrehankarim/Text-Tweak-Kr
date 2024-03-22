import React from "react";

const Button = ({ children, action }) => {
  return (
    <span className="m-3 d-inline-block ">
      <button type="button" className="btn btn-outline-dark" onClick={action}>
        {children}
      </button>
    </span>
  );
};

export default Button;
