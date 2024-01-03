import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: max-content;
  margin: 0;
  background: ${(props) => props.theme.colors.headerFooter};
  padding: 20px 0 10px;
  position: relative;
  border-top: 1px solid ${(props) => props.theme.colors.primaryText};

  > strong {
    position: absolute;
    bottom: 15px;
    width: 100%;
    color: ${(props) => props.theme.colors.primaryText};
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
        color: ${(props) => props.theme.colors.primaryText};
        font-weight: 500;
      }

      > span {
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.primaryText};
        svg {
          margin-right: 10px;
          font-size: 1.3rem;
          font-weight: bold;
          fill: ${(props) => props.theme.colors.primaryText};
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
