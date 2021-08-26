import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharactersListContainer } from './index.styles';
import Header from '@/presentation/components/header/Header';
import CharactersListsHeader from '@/presentation/pages/characters-lists/components/characters-lists-header/CharactersListsHeader';

const CharactersLists: FC = (): RE => {
  return (
    <StyledCharactersListContainer>
      <Header />
      <CharactersListsHeader />
    </StyledCharactersListContainer>
  );
};

export default CharactersLists;
