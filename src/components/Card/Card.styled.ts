import styled from "styled-components";

export const CardContainer = styled.div `
    background-color: #D1EFFE;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 17px;
    padding: 1.5rem 5rem;
    margin-bottom: 135px;
    & h1 {
        font-size: 47px;
        margin-bottom: 2rem;

    }
    & p {
        font-size: 20px;
        color: #404040;
        max-width: 700px;

    }

    & span {
        font-size: 25px;
        font-weight: 500;
        color: blue;
    }

    & img {
        height: 366px;
        width: 393px;
    }
    & .content {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    
    }

    & .content.hasImage {
        justify-content: center;
        margin-bottom: 2rem;
        text-align: center;
        
    }


    & .content.hasImage p{
        max-width: 1370px;
        text-align: justify;
        font-size: 1.25rem;
    }


`