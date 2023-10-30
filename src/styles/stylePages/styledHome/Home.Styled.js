/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: linear-gradient(to bottom, #2f2360 -13%, #f5f5f5 105%);
    display: flex;
    flex-direction: column;
    border-radius: 100px;
    border: 5px solid transparent; 
    margin: 2%;
    padding: 2%;
    max-width: 100%;
    @media screen and (max-width: 820px) {
        align-items: center;
    }
`;

export const HomeWrapper = styled.div`
    background: linear-gradient(to left, #f5f5f5 30%, whitesmoke 77%);
    place-self: center;
    margin-bottom: 3%;
    max-width: 60%;
    border: 3px solid bisque;
    padding: 8px;
    margin-bottom: -2%;
    border-radius: 100px 20px;
    @media screen and (max-width: 820px){
        margin-bottom: -2%;
        width: 50%;
    }
`;

export const HomeLogo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 8%;
    @media screen and (max-width: 820px){
      flex-direction: column;
      align-items: center;
    }
`;

export const HomeItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-self: center;
    margin-left: 10%;
    margin-right: 15%;
    @media screen and (max-width: 820px){
      flex-direction: column;
      align-items: left;
      margin-left: 10%;
    }
`;

export const Logo = styled.img`
    display: flex;
    object-fit: cover;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 35%;
    width: 35%;
`;

export const Header = styled.h2`
    color: #2f2360;
    font-size: 1.5rem;
`;

export const Span = styled.span`
    font-weight: bold;
    font-style: italic;
    font-size: 1.5rem;
`;

export const Paragraph = styled.p`
    margin-bottom: 10px;
    margin-top: 10px;
    font-style: italic;
    color: #2f2360;
    font-size: 1.5rem;
`;

export const ButtonContent = styled.div`
    margin-top: 2%;
    margin-right: 30%;
    padding: 1%;
`;

export const Links = styled(Link)`
    margin-top: 2%;
    margin-right: 30%;
    padding: 1%;
`;