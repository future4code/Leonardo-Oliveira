import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  & {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 10px 0;
    height: 44px;
  }

  & i {
    font-size: 1.5rem;
    color: #dadfe6;
  }

  & i:nth-child(1) {
    color: #3498db;
  }
`;
