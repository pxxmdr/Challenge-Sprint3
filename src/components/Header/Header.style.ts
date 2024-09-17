import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 30px 40px;
  display: flex;
  align-items: center;
  gap: 28px;
  & img {
    height: 23px;
    width: 97px;
  }




`;

export const NavList = styled.ul `
  display: flex;
  align-items: center;
  gap: 2rem;
  & li a {
    color: #5F5F5F;
  }
`

export const PageTitleDiv = styled.div `
  padding: 1rem 2rem;
  background-color: #F7F7F7;
  & h2 {
    font-size: 1.5rem;
  }
`