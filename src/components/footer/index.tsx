import { AiOutlineMail } from 'react-icons/ai';
import { Container, FooterContent } from './styled';

export function Footer(): JSX.Element {
  return (
    <Container>
      <FooterContent className="wrapper">
        <div className="footer-contacts">
          <div className="left-footer">
            <h2>Entre em contato</h2>
            <span>
              <AiOutlineMail /> laercio.arts7@gmail.com
            </span>
          </div>
        </div>
        <span>© {new Date().getFullYear()} Ederson Silva</span>
      </FooterContent>
    </Container>
  );
}
