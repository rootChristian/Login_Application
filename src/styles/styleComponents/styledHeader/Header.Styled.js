/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 25%;
  display: grid;
  grid-template-rows: repeat((2, 1fr));
  background: linear-gradient(to bottom, #2f2360 -13%, #f5f5f5 105%);
`;

export const HeaderWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat((3, 1fr));
    margin: 0px 15px;
    justify-content: baseline;
 
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin: 2%;
        transform: scale(1);
    }
`;

export const HeaderWrapperLinks = styled.div`
    background: linear-gradient(to right, #2f2360 5%, #ff99cc 100%);
`;

export const HeaderLeft = styled(Link)`
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat((2, 1fr));
    //place-items: center;
    place-self: center start;
    margin-left: 10px;
    text-decoration: none;
`;

export const HeaderCenter = styled.div`
    grid-column: 2;
    position: absolute;
    color: #2f2360;
    justify-self: center;
    align-self: center;
    margin-left: 3px;

    @media screen and (max-width: 960px) {
        position: absolute;
        margin: 45px;
    }
`;

export const HeaderRight = styled.div`
    margin-right: 10px;
    grid-column: 3;
    justify-self: end;
    align-self: center;
    @media screen and (max-width: 960px) {
        margin-right: 0px;
        margin-top: 30px;
    }
`;

export const HeaderRightItems = styled.div`
    display: center;///grid;
    grid-template-rows: repeat(2, 30px);
`;

export const SocialItems = styled.div`
    justify-self: end;
    align-self: center;
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

export const MobileIcon = styled.a`
    color: white;
    display: none;
    @media (max-width: 960px) {
        display: block;
        position: absolute;
        font-size: 1.5rem;
        top: 0;
        right: 0;
        cursor: pointer;
        margin-top: 1%;
        transform: translate(-50%, 0%);
    }
`;

export const NavMenu = styled.ul`
    margin: 0px 25px 0px 0px;
    list-style: none;
    display: flex;
    justify-content: end;
    color: #2f2360; 
    font-weight: bold;
    font-size: 1.3rem;

    @media screen and (max-width: 960px) {
        display: flex;
        position: absolute;
        opacity: 1;
        background-color: transparent;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        ///margin-right: 9%;
        font-weight: bold;
        font-size: 1.3rem;
        ///padding-top: 5%;
        height: 22%;
        width: 15%;
        top: 0;
        right: ${({ click }) => (click ? 0 : '100%')};
        transition: all 0.5s ease;
    }
`;

export const NavItem = styled.li`
   padding: 10px;
   border-radius: 5px;
    &:hover {
        background: linear-gradient(to bottom, #666699 30%, #ff99cc 80%);
        transform: scale(1);
        cursor: pointer;
    }
    &:active {
        background-color: #523da9;
    };

    @media (max-width: 960px) {
        &:hover {
            background: linear-gradient(to bottom, #666699 32%, #ffffff 89%);
            transform: scale(1.1);
            cursor: pointer;
        }
    }
`;

export const NavLinks = styled(Link)`
    text-decoration: none;  
`;

export const Logo = styled.img`
  grid-column: 1;
  place-self: center right;
  object-fit: cover;
  border-radius: 100%;
  height: 60px;
  width: 60px;
`;

export const H1 = styled.h2`
  font-size: 1rem;
  font-family: sans-serif;
`;

export const H1scrool = styled(H1)`
  ${(props) => {
        switch (props.$mode) {
            case "title":
                return `
                    font-family: cursive;
                    font-size: 1.2rem;
                    `;
            case "welcome":
                return `
                    font-family: cursive;
                    font-size: 1.5rem;
                    `;
            default:
                return `
                    font-family: sans-serif;
                    `;
        }
    }}
`;

export const LogoH1 = styled.h2`
  grid-column: 2;
  place-self: center left;
  text-shadow: 1px 1px 1px #2f2360;//#CE5937;
`;

