import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
    //url('./register.png')
    //url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")  center;
  background: linear-gradient(to right, #2f2360 5%, #ff99cc 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  //background-color: white;
  background: linear-gradient(to bottom, #2f2360 -13%, #f5f5f5 105%);
    display: flex;
    flex-direction: column;
    //padding: 5.5%;
    border: 3px solid bisque;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  border: 2px solid #ddd;
  min-width: 80%;
  margin: 25px 25px 0px 0px;
  padding: 12px;
  font-size: medium;
  font-weight: bold;
  color: #2f2360;
  text-indent: 5%;
`;

export const WrapperButtom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled(Link)`
  padding-top: 20px;
  font-weight: bold;
  color: #2f2360;
  text-decoration: underline;
  cursor: pointer;
`;

export const Button = styled.button`
  margin-top: 5%;
  border: 5%;
  padding: 10px 20px;
  border-radius: 15px;
  border: 3px solid lightgray;
  font-weight: bold;
  background-color: teal;//transparent;  
  color: white;

  &:hover {
    transform: scale(1.1);
    background-color: teal;
    color: #2f2390;//white;
  }

  &:active {
      background-color: transparent;
      color: teal;
  };

  &:disabled {
    color: teal;
    cursor: not-allowed;
  }
`;

export const Error = styled.span`
  color: red;
  padding: 5%;
  font-size: x-large;
  text-align: center;
`;
