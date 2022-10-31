import styled from "styled-components";


export const Container = styled.div`
  margin-top 200px;
  padding: 0 3rem;
  
  h1 {
    color: red;
    margin: 3rem 0;
  }
  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  img {
    width: 300px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
  span {
    font-weight: normal;
    font-size: 120%;
    margin-bottom: 1rem;
    line-height: 130%;
  }
  .release-date {
    font-size: 100%;
    opacity: 0.5;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 100%;
    background-color: #64B5F6;
  }
  .details2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 300px;
    background-color: #E1E3E4;
  }
  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all .3s;
  }
  button:hover {
    background-color: #5848c2;
  }
`;

export const Header1 = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  height: 100px;
  gap: 20px;
  margin-botton: 10px;
  background-color: white;
`;

export const BackButton = styled.button`
  display: inline-block;
  position: absolute;
  float: right;
  align-items: center;
  margin: 10px 20px;
  padding: 0px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #64B5F6;
  color: white;
  font-weight: 600;
  font-size: 20px;
  width: 200px;
  height: 25px;
  max-width: 200px;
`;