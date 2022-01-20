import styled from "styled-components";

export const ViagemPageContainer = styled.div`
  & {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 12px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;
