import React from "react";
import * as C from "./styles";

const LogoutButton = ({ Text, onClick, Type = "Button" }) => {
  return (
    <C.LogoutButton type={Type} onClick={onClick}>
      {Text}
    </C.LogoutButton>
  );
};
export default LogoutButton;

