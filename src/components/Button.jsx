import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`font-poppins rounded-[10px] font-medium text-[18px] text-primary outline-none py-4 px-6 bg-blue-gradient ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
