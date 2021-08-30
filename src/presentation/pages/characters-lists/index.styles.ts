import styled from 'styled-components';

export const StyledCharactersListContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.theme === true ? 'black' : 'white')};
  color: ${(props) => (props.theme === true ? 'white' : 'black')};
`;
