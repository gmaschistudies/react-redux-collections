import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledHomeCardsContainer,
  StyledHomeContainer,
  StyledHomeMainContentContainer,
} from './index.styles';
import Footer from '@/presentation/components/footer/Footer';
import Header from '@/presentation/components/header/Header';
import RickyAndMortyCard from '@/presentation/components/cards/ricky-and-morty-card/RickAndMortyCard';
import PokemonCard from '@/presentation/components/cards/pokemon-card/PokemonCard';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <Header />
      <StyledHomeMainContentContainer>
        <h1 className="home-main-content-title">Collection</h1>
        <StyledHomeCardsContainer>
          <RickyAndMortyCard
            name="Abadango Cluster Princess"
            species="Human"
            gender="male"
            image="image"
          />
          <PokemonCard name="Charizard" image="image" />
          <PokemonCard name="Charizard" image="image" />
        </StyledHomeCardsContainer>
      </StyledHomeMainContentContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Home;
