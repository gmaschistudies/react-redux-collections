import styled from 'styled-components';

export const StyledPokemonCard = styled.div`
  width: 250px;
  height: 400px;
  box-sizing: border-box;
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

  .pokemon-card-image {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    border-bottom: ${(props) =>
      props.theme === true ? '2px solid white' : '2px solid black'};
  }

  .pokemon-card-info {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;

    .pokemon-card-info-name {
      font-size: 30px;
      font-weight: bold;
    }

    .pokemon-card-info-general-info {
      font-size: 18px;
    }
  }

  &.card-at-character-page {
    cursor: pointer;
  }
`;
