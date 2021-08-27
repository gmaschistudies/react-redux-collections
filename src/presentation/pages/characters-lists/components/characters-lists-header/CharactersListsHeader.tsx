import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledCharactersListsHeaderContainer } from './CharactersListsHeader.styles';
import NavigationButton from '@/presentation/components/buttons/navigation-button/NavigationButton';

const CharactersListsHeader: FC = (): RE => {
  const history = useHistory();

  const handlePokemonClick = () => {
    history.push('/characters-page/pokemons');
  };

  const handleRickyAndMortyClick = () => {
    history.push('/characters-page/ricky-and-morty');
  };

  return (
    <StyledCharactersListsHeaderContainer>
      <h1 className="characters-list-header-title">Characters&apos; Lists</h1>
      <h2 className="characters-list-header-subtitle">
        Select one collection to view the characters
      </h2>

      <div className="characters-header-buttons-container">
        <NavigationButton
          text="Ricky and Morty"
          onClick={() => handleRickyAndMortyClick()}
        />
        <NavigationButton text="Pokemon" onClick={() => handlePokemonClick()} />
      </div>
    </StyledCharactersListsHeaderContainer>
  );
};

export default CharactersListsHeader;
