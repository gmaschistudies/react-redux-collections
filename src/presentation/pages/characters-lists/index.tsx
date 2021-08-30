import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharactersListContainer } from './index.styles';
import Header from '@/presentation/components/header/Header';
import CharactersListsHeader from '@/presentation/pages/characters-lists/components/characters-lists-header/CharactersListsHeader';
import { useAppSelector } from '@/data/store/hooks';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';

const CharactersLists: FC = (): RE => {
  const darkMode = useAppSelector(selectStyle);

  return (
    <StyledCharactersListContainer theme={darkMode}>
      <Header />
      <CharactersListsHeader />
    </StyledCharactersListContainer>
  );
};

export default CharactersLists;
