import styled from 'styled-components';

export const StyledCharactersPageContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.theme === true ? 'black' : 'white')};
  color: ${(props) => (props.theme === true ? 'white' : 'black')};
`;

export const StyledCharactersPageMainContentContainer = styled.div`
  min-height: calc(100vh - 100px);
  max-width: 1400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;

  .characters-page-main-content-title {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin: 10px;
  }
`;

export const StyledCharactersPageCardsContainer = styled.div`
  width: 80%;
  min-height: 900px;
  box-sizing: border-box;
  margin: 10px;
  padding: 15px;
  border: 2px solid white;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
`;
