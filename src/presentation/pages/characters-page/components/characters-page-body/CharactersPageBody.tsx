import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import PokemonCard from '@/presentation/components/cards/pokemon-card/PokemonCard';
import RickyAndMortyCard from '@/presentation/components/cards/ricky-and-morty-card/RickAndMortyCard';
import { StyledCharactersPageBodyContainer } from './CharactersPageBody.styles';

const CharactersPageBody: FC = (): RE => {
  return (
    <StyledCharactersPageBodyContainer>
      <RickyAndMortyCard
        name="Abadango Cluster Princess"
        species="Human"
        gender="male"
        image="image"
      />
      <PokemonCard name="Charizard" image="image" />
      <PokemonCard name="Charizard" image="image" />
      <RickyAndMortyCard
        name="Abadango Cluster Princess"
        species="Human"
        gender="male"
        image="image"
      />
      <PokemonCard name="Charizard" image="image" />
      <PokemonCard name="Charizard" image="image" />
      <RickyAndMortyCard
        name="Abadango Cluster Princess"
        species="Human"
        gender="male"
        image="image"
      />
      <PokemonCard name="Charizard" image="image" />
      <PokemonCard name="Charizard" image="image" />
    </StyledCharactersPageBodyContainer>
  );
};

export default CharactersPageBody;
