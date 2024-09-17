import styled from "styled-components";

export const InputField = styled.div `
    display: flex;
    flex-direction: column;
    gap: 4px;
    & label {
        font-size: 20px;
    }    
    & input {
        border: 1px solid gray;
        font-size: 16px;
        padding: 0.5rem;
        max-width: 800px;

    }
`
