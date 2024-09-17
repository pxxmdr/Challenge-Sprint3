import styled from "styled-components";

export const LoginFormContainer = styled.div`
    border: 1px solid #C8C8C8;
    border-radius: 9px;
    max-width: 700px;
    margin-inline: auto;
    padding: 72px 25px;
    margin-top: 190px;

    @media (max-width: 736px) {
        margin-inline: 1.125rem;
    }
    

    @media (max-width: 425px) {
        margin-top: 190px;
        border: none;
        padding-inline: 0;
    }



    & h1 {
        margin-bottom: 16px;
        color:  #000000;
        font-size: 24px;
        
    }
    & p {
        font-size: 14px;
        color: #404040;
        margin-bottom: 16px;
    }

    & label {
        font-size: 14px;
    }

    & .createaccount {
        color: #0046C0;
        font-weight: 600;
    }

    & .remember_me {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

`

export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 72px;

    & button {
        background-color: #0046C0;
        padding: 14.5px 0px;
        width: 50%;
        color: white;
        border: none;
        border-radius: 4px;
        margin-top: 9px;
        transition: filter 0.2s;
        cursor: pointer;

    }

    & button:hover {
        filter: brightness(120%);
    }
    
    & label {
        color: #0046C0;
        font-size: 12px;

    }

    & input {
        width: 50%;
        border: none;
        border-bottom: 2px solid #0046C0;
        padding: 9px;
        
    }

    & input:focus {
        outline: none;
    }

    & .field {
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.02);
    }

    @media (max-width: 425px) {
        & button {
            width: 100%;
        }

        & input {
            width: 100%;
        }
    }
`

