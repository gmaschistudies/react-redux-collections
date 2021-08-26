import styled from 'styled-components';

export const StyledPokemonCard = styled.div`
  width: 250px;
  height: 400px;
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 5px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pokemon-card-image {
    width: 100%;
    height: 200px;
    margin: 10px 0px;
    border-bottom: 2px solid white;
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
`;
