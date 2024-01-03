import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: max-content;
  position: fixed;
  bottom: 40px;
  right: 40px;
  align-items: center;
  justify-content: center;
  z-index: 999999999;

  @media screen and (max-width: 760px) {
    right: 15px;
  }

  & .icon {
    position: relative;
    border-radius: 50%;
    margin: 5px;
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 7px 13px rgb(0, 0, 0, 30%);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    padding: 10px;
    svg {
      fill: #fff;
    }
  }

  & .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  & .tooltip::before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    background: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  & .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  & .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  & .whats:hover,
  & .whats:hover .tooltip,
  & .whats:hover .tooltip::before {
    background: #00a884;
    color: #ffffff;
  }

  & .facebook:hover,
  & .facebook:hover .tooltip,
  & .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #ffffff;
  }

  & .twitter:hover,
  & .twitter:hover .tooltip,
  & .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #ffffff;
  }

  & .instagram:hover,
  & .instagram:hover .tooltip,
  & .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #ffffff;
  }

  & .youtube:hover,
  & .youtube:hover .tooltip,
  & .youtube:hover .tooltip::before {
    background: #cd201f;
    color: #ffffff;
  }

  & .tiktok:hover,
  & .tiktok:hover .tooltip,
  & .tiktok:hover .tooltip::before {
    background: #000;
    color: #fff;
  }

  & .pinterest:hover,
  & .pinterest:hover .tooltip,
  & .pinterest:hover .tooltip::before {
    background: #cd201f;
    color: #ffffff;
  }

  & .icon-whats {
    background: #00a884;
  }

  & .icon-facebook {
    background: #1877f2;
  }

  & .icon-twitter {
    background: #1da1f2;
  }

  & .icon-instagram {
    background: #e4405f;
  }

  & .icon-youtube {
    background: #cd201f;
  }

  & .icon-pinterest {
    background: #cd201f;
  }

  & .icon-tiktok {
    background: #000;
  }
`;
