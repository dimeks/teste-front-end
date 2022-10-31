import styled from "styled-components";

export const Header1 = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  height: 100px;
  gap: 20px;
  margin-botton: 10px;
  background-color: white;
`;

export const Title = styled.h2``;


export const FormPesquisar = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 100px;
height: 100px;
gap: 20px;
`;

export const Listavideo = styled.div`
    background-color: white;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 30%;
    height: 300px;
`;

export const Video = styled.div`
    background-color: black;
    align-items: center;
    margin-bottom: 500px;

    div{
        padding: 10px;
        h2{
            font-size: 14px;
        }
    }
`;

export const Container = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;

 
    
   

`;
export const Content = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #64B5F6;
    font-family: Arial, Helvetica, sans-serif;


`;

export const ActiveUser = styled.span `
display: inline-block;
position: absolute;

margin-top: 10px;
margin-right: 250px;
margin-left: 20px;
color: black;
text-decoration: underline;
font-size: 20px;
`;


