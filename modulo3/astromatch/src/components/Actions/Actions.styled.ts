import styled from 'styled-components';

export const ActionsConteiner = styled.div`
  & {
    display: flex;
    flex: auto;
    align-items: center;
    margin: 1rem 0;
  }

  .action {
    display: flex;
    align-items: center;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
    height: 60px;
    width: 60px;
    justify-content: center;
    border-radius: 50%;
    font-size: 2rem;
    border: none;
    transition: transform 500ms ease;
  }

  .action:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  & .action:nth-child(1) {
    color: #e74c3c;
  }

  & .action:nth-child(2) {
    margin: 0 1rem;
    color: #2db1ff;
    height: 48px;
    width: 48px;
    font-size: 1.5rem;
  }
  & .action:nth-child(3) {
    color: #2ecc71;
  }
`;
