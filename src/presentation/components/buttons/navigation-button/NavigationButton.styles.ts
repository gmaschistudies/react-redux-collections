import styled from 'styled-components';

export const StyledNavigationButton = styled.button`
  width: 250px;
  min-height: 40px;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px;
  border: 1px solid white;
  border-radius: 4px;
  background-color: #333;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 1s;
  text-align: center;

  &:hover {
    background-color: black;
  }
`;
