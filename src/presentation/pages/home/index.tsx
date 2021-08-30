import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledHomeCardsContainer,
  StyledHomeContainer,
  StyledHomeMainContentContainer,
} from './index.styles';
import Footer from '@/presentation/components/footer/Footer';
import Header from '@/presentation/components/header/Header';
import RickyAndMortyCard from '@/presentation/components/cards/ricky-and-morty-card/RickyAndMortyCard';
import PokemonCard from '@/presentation/components/cards/pokemon-card/PokemonCard';
import { useAppSelector } from '@/data/store/hooks';
import { selectAllCollection } from '@/data/store/slices/collection/CollectionSlice';

const Home: FC = (): RE => {
  const collectionData = useAppSelector(selectAllCollection);

  return (
    <StyledHomeContainer>
      <Header />
      <StyledHomeMainContentContainer>
        <h1 className="home-main-content-title">Collection</h1>
        <StyledHomeCardsContainer>
          {collectionData.map((item) => {
            const { name, type, image, gender, species } = item;
            return type === 'pokemon' ? (
              <PokemonCard key={name} name={name} image={image} />
            ) : (
              <RickyAndMortyCard
                key={name}
                name={name}
                gender={gender!}
                species={species!}
                image={image}
              />
            );
          })}
        </StyledHomeCardsContainer>
      </StyledHomeMainContentContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Home;
