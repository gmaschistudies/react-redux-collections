import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) =>
    props.theme === true ? 'darkblue' : 'lightblue'};
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: center;
  align-items: center;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 2fr;
  }
`;
