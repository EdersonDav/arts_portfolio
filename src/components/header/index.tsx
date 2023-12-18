import { Container, Item, List, Nav, Title } from './style';

export function Header(): JSX.Element {
  return (
    <Container>
      <Title>Laercio Silva</Title>
      <Nav>
        <List>
          <Item>
            <a href="#">Artes</a>
          </Item>
          <Item>
            <a href="#">Decorações</a>
          </Item>
        </List>
      </Nav>
    </Container>
  );
}
