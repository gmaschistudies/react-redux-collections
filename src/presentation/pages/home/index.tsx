import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import Header from '@/presentation/components/header/Header';
import { StyledHomeContainer } from './index.styles';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <Header />
    </StyledHomeContainer>
  );
};

export default Home;
