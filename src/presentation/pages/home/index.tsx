import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledHomeContainer,
  StyledHomeMainContentContainer,
} from './index.styles';
import Footer from '@/presentation/components/footer/Footer';
import Header from '@/presentation/components/header/Header';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <Header />
      <StyledHomeMainContentContainer />
      <Footer />
    </StyledHomeContainer>
  );
};

export default Home;
