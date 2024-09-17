import styled from "styled-components";

export const FooterContainer = styled.footer `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    margin-top: 60px;
    height: 436px;
    gap: 20px;
    & .div-footer {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    & p {
        color: white;
        font-weight: 600;
    }
`
