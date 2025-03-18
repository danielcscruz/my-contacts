import styled from 'styled-components'

export const Button = styled.button`
    height: 50px;
    width: 100px;
    margin: 0 5px;
    border: none;
    background-color: #000;
    color:#fff;
    cursor: pointer;
    border: 1px solid #000;
    &:hover {
        background-color: transparent;
        color: #000;
        border:
    }

    &:disabled {
        background-color: #ccc;
        color: #000;
        cursor: not-allowed;
        opacity: 0.6;
    }
` 
export const ButtonX = styled.button`
    height: 50px;
    width: 100px;
    margin: 0 5px;
    border: 1px solid #000;
    background-color: transparent;
    color: #000;
    cursor: pointer;
    &:hover {
        background-color: #000;
        color: #fff;
    }
` 

export const ButtonCont = styled.form`
    padding: 10px 0;
    border-top: 1px solid #000;
    text-decoration: none;
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 20px 50px;
`