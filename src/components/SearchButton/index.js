import React from "react";
import * as C from "./styles";
import OnSearchChanged from "../BuscarURl";
import { searchVideo } from "../store/actions/searchAC";




const SearchButton = ({ Text, onClick, Type = "button" }) => {
  return (
    
    <C.SearchButton type={Type} >
      {Text}
    </C.SearchButton>
  );
  
};



export default SearchButton;


