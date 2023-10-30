/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100vw;
  height: 35%;
  display: grid;
  grid-template-rows: repeat((2, 1fr));
  background: linear-gradient(to bottom, #2f2360 -30%, #f5f5f5 105%);
`;

export const FooterLinksContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
       padding-top: 30px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    margin-left: 8%;
    @media screen and (max-width: 820px){
      flex-direction: column;
    }
`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 50px;
    text-align: left;
    width: 300px;
    box-sizing: border-box;
    color: gray;
    @media screen and (max-width: 950px){
        margin: 0px;
        padding:8px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom: 20px;
    margin-top: 20px;
    color: #2f2360;
    font-size: 1.5rem;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #2f2360;
    padding: 3px;
    border-radius: 5px;
    &:hover {
        background: linear-gradient(to bottom, #ffffff 32%, #666699 89%);
        transform: scale(1);
        cursor: pointer;
        font-weight: bold;
    }
    &:active {
        background: linear-gradient(to bottom, #2f2360 32%, #ff99cc 89%);
    };
`;

export const FooterLinkServices = styled.a`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #2f2360;
    padding: 3px;
    border-radius: 5px;
    &:hover {
        background: linear-gradient(to bottom, #ffffff 32%, #666699 89%);
        transform: scale(1);
        cursor: pointer;
        font-weight: bold;
    }
    &:active {
        background: linear-gradient(to bottom, #2f2360 32%, #ff99cc 89%);
    };
`;

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat((3, 1fr));
    justify-content: baseline;
    background: linear-gradient(to bottom, #666699 32%, #ff99cc 89%);
    width: 100%;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`;

export const FooterLeft = styled(Link)`
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat((2, 1fr));
    place-self: center start;
    margin-left: 25px;
    text-decoration: none;
`;

export const FooterCenter = styled.div`
    grid-column: 2;
    justify-self: center;
    align-self: center;
    font-style: italic;
    font-size: 0.8rem;
    color: #2f2360;
`;

export const FooterRight = styled.div`
    grid-column: 3;
    justify-self: end;
    align-self: center;
    margin-right: 25px;
`;

export const SocialItems = styled.div`
    display: flex;
    padding: 2px;
`;

export const SocialIcons = styled.a`
    margin: 0px 3px;
    justify-content: center;
    transition: o.9 ease-out;
    color: #2f3080;
    border-radius: 5px;
    &:hover {
        background-color: white;
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const Logo = styled.img`
  grid-column: 1;
  place-self: center right;
  object-fit: cover;
  border-radius: 100%;
  height: 50px;
  width: 50px;
`;

export const LogoH4 = styled.h4`
  grid-column: 2;
  place-self: center left;
  text-shadow: 1px 1px 1px #2f2360;//#CE5937;
`;
