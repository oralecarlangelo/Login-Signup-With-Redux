import React from "react";

const Button = ({ title, variant = "primary", type = "button", name }) => {
  return (
    <button
      className={`btn ${
        variant === "primary" ? "btn-primary" : "btn-secondary"
      }`}
      name={name}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
