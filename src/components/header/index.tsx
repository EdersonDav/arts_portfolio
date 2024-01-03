import AnchorLink from 'react-anchor-link-smooth-scroll';
import { type ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Switch from 'react-switch';

import { Container, Item, List, Nav, Title, Content } from './style';

interface IHeaderProps {
  setTheme: (value: boolean) => void;
  themeLight: boolean;
}
export function Header({ setTheme, themeLight }: IHeaderProps): JSX.Element {
  const [isHome, setIsHome] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setIsHome(router.route === '/');
  }, [router]);

  const handleLinks = (): ReactElement => {
    if (!isHome) {
      return (
        <List>
          <Item>
            <Link href="/">Inicio</Link>
          </Item>
        </List>
      );
    }
    return (
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
    );
  };
  return (
    <Container>
      <Content className="wrapper">
        <Title>Laercio Silva</Title>
        <Nav>{handleLinks()}</Nav>
        <Switch
          onChange={() => {
            setTheme(!themeLight);
          }}
          checked={themeLight}
          height={20}
          width={40}
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={20}
          offColor="#999999"
          onColor="#323232"
          className="switch"
        />
      </Content>
    </Container>
  );
}
