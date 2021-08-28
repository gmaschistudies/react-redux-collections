import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useEffect,
} from 'react';
import PokemonCard from '@/presentation/components/cards/pokemon-card/PokemonCard';
import RickyAndMortyCard from '@/presentation/components/cards/ricky-and-morty-card/RickAndMortyCard';
import { StyledCharactersPageBodyContainer } from './CharactersPageBody.styles';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import {
  addPageFetched,
  fetchPokemons,
  fetchPokemonsCount,
  selectPokemonsByPage,
  selectPokemonsPagesFetched,
} from '@/data/store/slices/pokemon/PokemonSlice';
import {
  fetchRickyAndMorty,
  selectRickyAndMortyCharactersByPage,
  selectRickyAndMortyPagesFetched,
} from '@/data/store/slices/ricky-and-morty/RickyAndMortySlice';

interface Props {
  currentCharacters: string;
  currentPage: number;
}

const CharactersPageBody: FC<Props> = ({
  currentCharacters,
  currentPage,
}: Props): RE => {
  const dispatch = useAppDispatch();
  const pokemonsPagesFetched = useAppSelector(selectPokemonsPagesFetched);
  const rickyAndMortyPagesFetched = useAppSelector(
    selectRickyAndMortyPagesFetched
  );
  const pokemonsPaginatedData = useAppSelector((state) =>
    selectPokemonsByPage(state, currentPage)
  );
  const rickyAndMortyPaginatedData = useAppSelector((state) =>
    selectRickyAndMortyCharactersByPage(state, currentPage)
  );
  // const pokemonsCount = useAppSelector(selectPokemonsCount);
  // const rickyAndMortyCount = useAppSelector(selectRickyAndMortyCharactersCount);

  useEffect(() => {
    if (currentCharacters === 'pokemons') {
      if (!pokemonsPagesFetched.includes(currentPage)) {
        dispatch(fetchPokemonsCount());
        dispatch(fetchPokemons(currentPage));
        dispatch(addPageFetched(currentPage));
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!rickyAndMortyPagesFetched.includes(currentPage)) {
        dispatch(fetchRickyAndMorty(currentPage));
      }
    }
  }, [
    currentCharacters,
    currentPage,
    pokemonsPagesFetched,
    rickyAndMortyPagesFetched,
    dispatch,
  ]);

  return (
    <StyledCharactersPageBodyContainer>
      {currentCharacters === 'pokemons'
        ? pokemonsPaginatedData.map((pokemon) => {
            const { id, name, image } = pokemon;
            return <PokemonCard key={id} name={name} image={image} />;
          })
        : rickyAndMortyPaginatedData.map((character) => {
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
