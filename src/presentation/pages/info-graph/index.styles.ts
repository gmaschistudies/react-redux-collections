import styled from 'styled-components';

export const StyledInfoGraphContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.theme === true ? 'black' : 'white')};
  color: ${(props) => (props.theme === true ? 'white' : 'black')};
`;

export const StyledInfoGraphMainContentContainer = styled.div`
  min-height: calc(100vh - 100px);
  max-width: 90%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  text-align: center;
`;
