import styled from 'styled-components';

export const StyledPaginationContainer = styled.div`
  width: 280px;
  height: 50px;
  padding: 5px;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .pagination-container-button {
    width: 120px;
    min-height: 40px;
    box-sizing: border-box;
    padding: 5px;
    margin: 10px;
    border: ${(props) =>
      props.theme === true ? '1px solid white' : '1px solid black'};
    border-radius: 4px;
    background-color: ${(props) =>
      props.theme === true ? '#333' : 'darkgray'};
    color: ${(props) => (props.theme === true ? 'white' : 'black')};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 1s;
    text-align: center;

    &:hover {
      background-color: ${(props) => (props.theme === true ? 'black' : '#ddd')};
    }
  }
`;
