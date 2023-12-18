import styled from 'styled-components';

export const Container = styled.header`
  padding: 20px;
  display: flex;
  align-items: baseline;
  height: 90px;
  overflow: hidden;
  position: sticky;
  top: 0px;
  z-index: 1020;
`;

export const Title = styled.h1`
  color: var(--white);
  margin: 0;
  font-family: 'Caveat', cursive;
  text-transform: uppercase;
  width: max-content;
`;

export const Nav = styled.nav`
  margin-left: 50px;
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

export const Item = styled.li`
  margin: 0 10px;
  > a {
    font-weight: bold;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1.5px;
    font-style: italic;
    &:hover {
      color: var(--white);
    }
  }
`;
