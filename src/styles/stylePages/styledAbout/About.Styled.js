/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 50px;
`;

export const ContentParagrah = styled.div`
    border-radius: 20px;
    box-shadow: 10px 5px #2f2360;
    height: 30%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    border-radius: 20px;
    box-shadow: 10px 5px #2f2360;
    height: 40vh;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: 15%;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    object-fit: cover;
    border-radius: 10%;
    border: 5px solid transparent; 
    box-shadow: 0px 0px 0px 8px #2f2360;
    height: 35%;
    width: 35%;
`;

export const Header = styled.h2`
    color: #2f2360;
    font-size: 1.5rem;
    font-family: sans-serif;
`;

export const Div = styled.div`
    margin-right: 5%;
`;

export const Span = styled.span`
    font-weight: bold;
    font-style: italic;
    font-size: 1.5rem;
`;

export const Paragraph = styled.p`
    margin-left: 20px;
    margin-right: 5px;
    margin-top: 10px;
    font-style: italic;
    color: #2f2360;
    font-size: 1.5rem;
`;
