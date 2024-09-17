import styled from "styled-components";

export const RadioField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & label {
    font-size: 20px;
  }
  & div.fields {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & div.field {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
