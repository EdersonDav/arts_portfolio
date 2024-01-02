import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Item, List, Nav, Title } from './style';

export function Header(): JSX.Element {
  return (
    <Container className="wrapper">
      <Title>Laercio Silva</Title>
      <Nav>
        <List>
          <Item>
            <AnchorLink offset={100} href="#pinturas">
              Pinturas
            </AnchorLink>
          </Item>
          <Item>
            <AnchorLink offset={100} href="#decoracoes">
              Decorações
            </AnchorLink>
          </Item>
        </List>
      </Nav>
    </Container>
  );
}
