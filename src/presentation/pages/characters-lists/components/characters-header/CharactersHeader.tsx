import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharactersListHeaderContainer } from './CharactersHeader.styles';
import NavigationButton from '@/presentation/components/buttons/navigation-button/NavigationButton';

const CharactersListHeader: FC = (): RE => {
  return (
    <StyledCharactersListHeaderContainer>
      <h1 className="characters-list-header-title">Characters&apos; Lists</h1>
      <h2 className="characters-list-header-subtitle">
        Select one collection to view the characters
      </h2>

      <div className="characters-header-buttons-container">
        <NavigationButton text="Ricky and Morty" />
        <NavigationButton text="Pokemon" />
      </div>
    </StyledCharactersListHeaderContainer>
  );
};

export default CharactersListHeader;
