import styled from 'styled-components';

export const Container = styled.section`
  padding: 30px 0;

  h2 {
    color: ${(props) => props.theme.colors.primaryText};
    margin-bottom: 20px;
    font-size: 2rem;
  }
`;
