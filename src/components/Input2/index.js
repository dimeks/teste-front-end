import React from "react";
import * as C from "./styles";

const Input2 = ({ type, placeholder, value, onChange }) => {
  return (
    <C.Input2
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input2;
