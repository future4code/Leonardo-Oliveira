import styled from 'styled-components';

export const CardContainer = styled.div`
  & {
    height: calc(100vh - 44px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .photo {
    width: 98vw;
    height: 85vh;
    background: url('assets/arara.jpg') center center/cover;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    color: #eee;
    box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
  }

  .text-user {
    padding: 15px;
    background: rgb(2, 0, 36);
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(35, 34, 65, 0) 0%,
      rgba(0, 0, 0, 0.7) 52%
    );
    border-radius: 10px;
  }

  .name-age {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    font-size: 1.4rem;
  }

  .name-age h2:nth-child(2) {
    margin-left: 10px;
    font-weight: 500;
  }

  .bio {
    line-height: 1.7rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  /* Desktop View */
  @media (min-width: 1025px) {
    .photo {
      width: 367px;
      height: 684px;
    }
  }
`;
