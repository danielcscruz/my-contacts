import styled from 'styled-components'

export const Container = styled.div`
    height: 500px;
`

export const Names = styled.div`
    margin: 24px 0;
    font-size: 20px;
    max-width: 400px;
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    cursor: pointer;

     &::-webkit-scrollbar {
        width: 8px; /* Scrollbar width */
    }

    &::-webkit-scrollbar-track {
        background: rgb(255, 255, 255, 0.5); /* Track background */
    }

    &::-webkit-scrollbar-thumb {
        background:rgb(23, 23, 23); /* Scroll thumb color */
    }

    &::-webkit-scrollbar-thumb:hover {
        background:rgb(86, 87, 88); /* Thumb color on hover */
    }
`
export const Search = styled.input`
    background-color:rgb(220, 228, 131);
    border: none;
    margin-top: 20px;
    max-width: 400px;
    width: 100%;
    height: 30px;
    font-size: 18px;
`

export const NamesUL = styled.ul`
    text-align: center;
    list-style: none;
    padding: 0;
    scrollbar-color: transparent;
`
export const NamesLI = styled.li`
    display: block;
`

