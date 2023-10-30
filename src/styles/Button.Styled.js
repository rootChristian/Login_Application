/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/

import styled from "styled-components";

export const Btn = styled.button`
    color: #000000;
    border: 2px solid #000000;
    outline: 2px solid #f2f2f2;
    border-radius: 15px;
    padding: 1.2%;
    font-size: medium;
    &:hover {
        background-color: #ffffff;
        cursor: pointer;
    }
    &:active {
        opacity: 0.8;
        background-color: #e6e6e6;
    };
`;

export const BtnSuccess = styled(Btn)`
    color: white;
    border: 2px solid white;
    outline: 2px solid #009900;
    background-color: #008000;
    &:hover {
        background-color: #009900;
        cursor: pointer;
    }
    &:active {
        opacity: 0.8;
        color: white;
    };
`;

export const BtnPrimary = styled(Btn)`
    color: white;
    border: 2px solid white;
    outline: 2px solid #1aa3ff;
    background-color: #0099ff;
    &:hover {
        background-color: #1aa3ff;
        cursor: pointer;
    }
    &:active {
        opacity: 0.8;
        color: white;
    };
`;

export const BtnDanger = styled(Btn)`
    color: white;
    border: 2px solid white;
    outline: 2px solid  #ff5050;
    background-color: #ff1a1a;
    &:hover {
        background-color: #ff5050;
        cursor: pointer;
    }
    &:active {
        opacity: 0.8;
        color: white;
    };
`;
