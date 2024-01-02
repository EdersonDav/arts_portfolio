import React, { useEffect, useState } from 'react';

interface AppointmentLinkProps {
  children: JSX.Element;
  number: string;
}

export function AppointmentLink({ children, number }: AppointmentLinkProps): JSX.Element {
  const [isMobile, setIsMobile] = useState(false);
  const whatsappURL = isMobile
    ? `https://wa.me/${number}`
    : `https://web.whatsapp.com/send?phone=${number}`;

  useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    );
  }, []);

  return (
    <a className="apointment-link" href={whatsappURL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
