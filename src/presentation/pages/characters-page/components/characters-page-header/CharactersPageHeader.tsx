import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import NavigationButton from '@/presentation/components/buttons/navigation-button/NavigationButton';
import { StyledCharactersPageHeaderContainer } from './CharactersPageHeader.styles';
import PaginationContainer from './sub-components/pagination-container/PaginationContainer';

interface Props {
  currentCharacters: string;
  handleCharacterChange: () => void;
}

const CharactersPageHeader: FC<Props> = ({
  currentCharacters,
  handleCharacterChange,
}: Props): RE => {
  const history = useHistory();

  const handleCharactersListsHomeClick = (): void => {
    history.push('/characters-lists');
  };

  return (
    <StyledCharactersPageHeaderContainer>
      <h1 className="characters-page-header-title">
        {' '}
        (Variable) Characters&apos; Lists
      </h1>
      <h2 className="characters-page-header-subtitle">
        Click on a character to save it to your collection
      </h2>
      <div className="characters-header-page-buttons-container">
        <NavigationButton
          text="Characters' List Home"
          onClick={() => handleCharactersListsHomeClick()}
        />
        <NavigationButton
          text={
            currentCharacters === 'pokemons' ? 'Ricky and Morty' : 'Pokemons'
          }
          onClick={() => handleCharacterChange()}
        />
        <PaginationContainer />
      </div>
    </StyledCharactersPageHeaderContainer>
  );
};

export default CharactersPageHeader;
