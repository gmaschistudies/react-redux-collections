import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import Header from '@/presentation/components/header/Header';
import Footer from '@/presentation/components/footer/Footer';
import {
  StyledCharactersPageContainer,
  StyledCharactersPageMainContentContainer,
} from './index.styles';
import CharactersPageBody from './components/characters-page-body/CharactersPageBody';
import CharactersPageHeader from './components/characters-page-header/CharactersPageHeader';

const CharactersPage: FC = (): RE => {
  return (
    <StyledCharactersPageContainer>
      <Header />
      <StyledCharactersPageMainContentContainer>
        <CharactersPageHeader />
        <CharactersPageBody />
      </StyledCharactersPageMainContentContainer>
      <Footer />
    </StyledCharactersPageContainer>
  );
};

export default CharactersPage;
