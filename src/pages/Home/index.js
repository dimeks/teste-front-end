import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton";
import useAuth from "../../hooks/useAuth";
import Header from '../../components/Pesquisar'
import { Provider } from "react-redux"; 
import store from "../../components/store";
import { Container } from "./styles";
import * as C from "./styles";
import HomeScreen from "../../components/lista";
import { ActiveUser } from "./styles";




const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  
  
  const userEmail = JSON.parse(localStorage.getItem('user_token'))
  const username = userEmail.email
  console.log(username)

  return (
    
  <><Provider store={store}>
     <ActiveUser><h4>Usuário:</h4>{username}</ActiveUser>
     <C.Header1>
      
      
      <LogoutButton Text="Logout" onClick={() => [signout(), navigate("/")]}>Logout</LogoutButton>
     </C.Header1>
    <Header> 

    </Header>
    <Container> 
        <HomeScreen/>
    </Container>
    </Provider>
  </>

  );
};





export default (Home); 
