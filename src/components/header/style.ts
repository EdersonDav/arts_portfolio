import styled from 'styled-components';

export const Container = styled.header`
  height: 90px;
  overflow: hidden;
  position: sticky;
  top: 0px;
  z-index: 1020;
  background: ${(props) => props.theme.colors.headerFooter};
  @media (max-width: 680px) {
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .switch {
    float: right;
    margin-right: 0;
    margin-left: auto;
    .react-switch-bg {
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  @media (max-width: 680px) {
    padding: 0px 20px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryText};
  margin: 0;
  font-family: 'Caveat', cursive;
  text-transform: uppercase;
  width: max-content;
  @media (max-width: 680px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  margin-left: 50px;
  @media (max-width: 680px) {
    margin-left: 15px;
  }
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 50px;
  @media (max-width: 680px) {
    gap: 15px;
  }
`;

export const Item = styled.li`
  margin: 0 10px;
  > a {
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1.5px;
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.colors.primaryText};
    }
    @media (max-width: 680px) {
      font-size: 14px;
    }
  }
`;
