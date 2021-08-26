import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import NavigationButton from '@/presentation/components/buttons/navigation-button/NavigationButton';
import { StyledCharactersPageHeaderContainer } from './CharactersPageHeader.styles';
import PaginationContainer from './sub-components/pagination-container/PaginationContainer';

const CharactersPageHeader: FC = (): RE => {
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
        <NavigationButton text="Characters' List Home" />
        <NavigationButton text="Ricky and Morty API" />
        <PaginationContainer />
      </div>
    </StyledCharactersPageHeaderContainer>
  );
};

export default CharactersPageHeader;
