import styled from 'styled-components';

export const StyledCharactersListsHeaderContainer = styled.div`
  max-width: 500px;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 5px;
  text-align: center;

  .characters-list-header-title {
    font-size: 30px;
    font-weight: bold;
  }

  .characters-header-buttons-container {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
