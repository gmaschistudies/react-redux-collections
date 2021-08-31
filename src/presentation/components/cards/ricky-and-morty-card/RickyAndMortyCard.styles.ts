import styled from 'styled-components';

export const StyledRickyAndMortyCard = styled.div`
  width: 250px;
  height: 450px;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 5px;
  margin: 10px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: ${(props) =>
    props.theme === true ? '2px solid white' : '2px solid black'};
  background-color: ${(props) =>
    props.theme === true ? 'black' : 'lightgray'};
  color: ${(props) => (props.theme === true ? 'white' : 'black')};

  .ricky-and-morty-card-image {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    border-bottom: ${(props) =>
      props.theme === true ? '2px solid white' : '2px solid black'};
  }

  .ricky-and-morty-card-info {
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    .ricky-and-morty-card-info-name {
      font-size: 30px;
      font-weight: bold;
    }

    .ricky-and-morty-card-info-general-info {
      font-size: 18px;
    }
  }

  &.card-at-character-page {
    cursor: pointer;
  }
`;
