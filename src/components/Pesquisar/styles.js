import styled from "styled-components";

export const HeaderContainer = styled.header`
outline: none;
padding: 16px 20px;
width: 100%;
font-size: 16px;
background-color: #64B5F6;
border: none;
margin-top: 300px;
margin-bottom: 30px;
`;

export const LogoContainer = styled.div`
    width:35%;
    img{
        max-width:100%;
    }
`;

export const Busca = styled.div`
outline: none;
align: center;
padding: 16px 20px;
width: 100%;
height:50px;
margin-bottom: 20px
border-radius: 5px;
font-size: 16px;
margin-bottom: 20px;
background-color: #64B5F6;
border: none;
`;


export const Input = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  background-color: #f0f2f5;
  border: none;
`;

export const Button = styled.button`
display: flex;
align-items: center;
margin: 0px auto;
text-align: center;
padding: 10px 10px;
margin-top 10px;
outline: none;
border: none;
border-radius: 10px;
width: 100px;
cursor: pointer;
background-color: #046ee5;
color: white;
font-weight: 600;
font-size: 16px;
max-width: 80px;
`;