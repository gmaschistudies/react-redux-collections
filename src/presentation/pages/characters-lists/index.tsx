import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharactersListContainer } from './index.styles';
import Header from '@/presentation/components/header/Header';
import CharactersListHeader from '@/presentation/pages/characters-lists/components/characters-header/CharactersHeader';

const CharactersList: FC = (): RE => {
  return (
    <StyledCharactersListContainer>
      <Header />
      <CharactersListHeader />
    </StyledCharactersListContainer>
  );
};

export default CharactersList;
