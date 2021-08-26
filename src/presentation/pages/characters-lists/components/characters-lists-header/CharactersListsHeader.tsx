import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharactersListsHeaderContainer } from './CharactersListsHeader.styles';
import NavigationButton from '@/presentation/components/buttons/navigation-button/NavigationButton';

const CharactersListsHeader: FC = (): RE => {
  return (
    <StyledCharactersListsHeaderContainer>
      <h1 className="characters-list-header-title">Characters&apos; Lists</h1>
      <h2 className="characters-list-header-subtitle">
        Select one collection to view the characters
      </h2>

      <div className="characters-header-buttons-container">
        <NavigationButton text="Ricky and Morty" />
        <NavigationButton text="Pokemon" />
      </div>
    </StyledCharactersListsHeaderContainer>
  );
};

export default CharactersListsHeader;
