import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPinterestP,
  FaTiktok,
} from 'react-icons/fa';
import { type ReactElement } from 'react';

import { medias } from '../../social';
import { AppointmentLink } from '../appointmentLink';
import { Container } from './styled';

export function FloatButton(): JSX.Element {
  const returnIcons = (name: string): ReactElement | null => {
    switch (name) {
      case 'Instagram':
        return <FaInstagram />;
      case 'Facebook':
        return <FaFacebookF />;
      case 'Twitter':
        return <FaTwitter />;
      case 'Youtube':
        return <FaYoutube />;
      case 'Pinterest':
        return <FaPinterestP />;
      case 'TikTok':
        return <FaTiktok />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <AppointmentLink number="+5511955843486">
        <li className="icon whats icon-whats">
          <span className="tooltip whats">WhatsApp</span>
          <span className="icon">
            <FaWhatsapp />
          </span>
        </li>
      </AppointmentLink>
      {medias.length
        ? medias.map((m) => (
            <a href={m.url} key={m.name} target="_blank">
              <li className={`icon ${m.classN} icon-${m.classN}`}>
                <span className="tooltip">{m.name}</span>
                <span className="icon">{returnIcons(m.name)}</span>
              </li>
            </a>
          ))
        : null}
    </Container>
  );
}
