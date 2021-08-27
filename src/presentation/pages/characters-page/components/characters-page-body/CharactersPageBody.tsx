import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useEffect,
} from 'react';
import PokemonCard from '@/presentation/components/cards/pokemon-card/PokemonCard';
import RickyAndMortyCard from '@/presentation/components/cards/ricky-and-morty-card/RickAndMortyCard';
import { StyledCharactersPageBodyContainer } from './CharactersPageBody.styles';
// import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import {
  addPageFetched,
  fetchPokemons,
  selectPokemons,
  selectPokemonsPagesFetched,
} from '@/data/store/slices/pokemon/PokemonSlice';
import {
  fetchRickyAndMorty,
  selectRickyAndMortyCharacters,
  selectRickyAndMortyPagesFetched,
} from '@/data/store/slices/ricky-and-morty/RickyAndMortySlice';

interface Props {
  currentCharacters: string;
}

const CharactersPageBody: FC<Props> = ({ currentCharacters }: Props): RE => {
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const [currentCharacters, setCurrentCharacters] = useState<string>('pokemon');
  const dispatch = useAppDispatch();
  const pokemonsData = useAppSelector(selectPokemons);
  const pokemonsPagesFetched = useAppSelector(selectPokemonsPagesFetched);
  // const pokemonsPageFetched = useAppSelector(selectPokemonsPagesFetched);
  const rickyAndMortyData = useAppSelector(selectRickyAndMortyCharacters);
  const rickyAndMortyPagesFetched = useAppSelector(
    selectRickyAndMortyPagesFetched
  );

  useEffect(() => {
    if (currentCharacters === 'pokemons') {
      if (!pokemonsPagesFetched.includes(1)) {
        dispatch(fetchPokemons(1));
        dispatch(addPageFetched(1));
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!rickyAndMortyPagesFetched.includes(1)) {
        dispatch(fetchRickyAndMorty(1));
      }
    }
  }, [
    currentCharacters,
    pokemonsPagesFetched,
    rickyAndMortyPagesFetched,
    dispatch,
  ]);

  return (
    <StyledCharactersPageBodyContainer>
      {currentCharacters === 'pokemons'
        ? pokemonsData.map((pokemon) => {
            const { id, name, image } = pokemon;
            return <PokemonCard key={id} name={name} image={image} />;
          })
        : rickyAndMortyData.map((character) => {
            const { id, name, species, gender, image } = character;
            return (
              <RickyAndMortyCard
                key={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
              />
            );
          })}
    </StyledCharactersPageBodyContainer>
  );
};

export default CharactersPageBody;
