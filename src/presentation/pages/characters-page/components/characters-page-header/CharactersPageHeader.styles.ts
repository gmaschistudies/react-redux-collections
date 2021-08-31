import styled from 'styled-components';

export const StyledCharactersPageHeaderContainer = styled.div`
  max-width: 500px;
  min-height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 5px;
  text-align: center;

  .characters-page-header-title {
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0px;
  }

  .characters-page-header-subtitle {
    margin: 10px 0px;
  }

  .characters-header-page-buttons-container {
    width: 100%;
    min-height: 180px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
