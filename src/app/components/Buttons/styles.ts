import styled from 'styled-components'

export const Button = styled.button`
    height: 50px;
    width: 100px;
    margin: 0 5px;
    border: none;
    background-color: #000;
    color:rgb(208, 204, 204);
    cursor: pointer;
    &:hover {
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
    }

    &:disabled {
        display: none;
    }
` 

export const ButtonCont = styled.div`
    padding: 10px 0;
    border-top: 1px solid #000;
    text-decoration: none;
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; 

`