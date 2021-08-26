import styled from 'styled-components';

export const StyledCharactersPageHeaderContainer = styled.div`
  max-width: 500px;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 15px;
  text-align: center;

  .characters-page-header-title {
    font-size: 30px;
    font-weight: bold;
  }

  .characters-header-page-buttons-container {
    width: 100%;
    height: 180px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
