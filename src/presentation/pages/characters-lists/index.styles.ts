import styled from 'styled-components';

export const StyledCharactersListContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
`;

export const MainContentContainer = styled.div`
  min-height: calc(100vh - 100px);
  width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  border: 2px solid white;
`;
