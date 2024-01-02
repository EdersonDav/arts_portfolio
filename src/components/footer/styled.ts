import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: max-content;
  margin: 0;
  background: var(--brown-rust);
  padding: 20px 0 10px;
  position: relative;
  border-top: 1px solid var(--gray);

  > strong {
    position: absolute;
    bottom: 15px;
    width: 100%;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterContent = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  > span {
    font-size: 12px;
    font-style: italic;
  }
  .footer-contacts {
    width: 100%;
    display: flex;
    @media (max-width: 770px) {
      flex-direction: column;
    }
    .left-footer {
      align-items: start;
      display: flex;
      flex-direction: column;
      > h2 {
        font-size: 20px;
        font-weight: 400;
        color: var(--white);
        font-weight: 500;
      }

      > span {
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 1rem;
        color: var(--white);
        svg {
          margin-right: 10px;
          font-size: 1.3rem;
          font-weight: bold;
          fill: var(--white);
        }
      }

      @media (max-width: 770px) {
        max-width: 100%;
        h2 {
          font-size: 30px;
        }
      }
    }
  }
`;
