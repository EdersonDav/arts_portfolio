import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 750px;
  margin-top: 30px;
  @media (max-width: 680px) {
    justify-content: flex-start;
    min-height: 650px;
  }
  > * {
    margin-bottom: 30px;
    @media (max-width: 680px) {
      margin-bottom: 50px;
    }
  }

  h2 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.primaryText};
    @media (max-width: 680px) {
      margin-top: 30px;
    }
  }
  p {
    font-size: 18px;
    color: ${(props) => props.theme.colors.primaryText};
    font-style: italic;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    > div {
      min-height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 680px) {
        min-height: 300px;
      }
      > img {
        width: auto;
        max-height: 500px;
        @media (max-width: 680px) {
          height: auto;
          width: 300px;
        }
      }
    }
  }
`;

export const ImagesBoxes = styled.ul`
  display: flex;
  align-items: center;
  margin: 30px 0 0;
  > li {
    margin-right: 10px;
    cursor: pointer;

    > img {
      width: auto;
      height: 90px;
      &.active {
        border: solid 3px ${(props) => props.theme.colors.primaryText};
      }
      @media (max-width: 680px) {
        width: auto;
        height: 70px;
      }
    }
  }
`;
