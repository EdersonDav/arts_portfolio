import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;

  @media (max-width: 680px) {
    height: 350px;
    padding: 5px 16px;
  }
  position: relative;
`;

export const HeroContent = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  width: 100%;
  @media (max-width: 770px) {
    padding: 0;
  }
`;

export const HeroContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  width: 50%;

  p {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.colors.primaryText};
    font-style: italic;
  }

  @media (max-width: 680px) {
    width: 100%;
    p {
      font-size: 1rem;
      line-height: 20px;
    }
  }
`;

export const HeroContentRight = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 680px) {
    display: none;
  }
`;
