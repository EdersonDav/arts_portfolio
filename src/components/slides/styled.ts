import styled from 'styled-components';
import Slider from 'react-slick';

export const Content = styled(Slider)`
  position: relative;
  text-align: center;
  height: 100%;
  > div {
    height: 100%;
  }
`;

export const Item = styled.div`
  margin-top: 46px;
  h3 {
    font-size: 1.3rem;
    margin-top: 15px;
    color: var(--gray-2);
    font-weight: 600;
    font-style: italic;
  }

  img {
    height: 250px;
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 1rem;
    }
  }
`;
