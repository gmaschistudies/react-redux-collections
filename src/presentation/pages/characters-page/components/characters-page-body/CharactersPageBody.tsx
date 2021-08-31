import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useEffect,
} from 'react';
import PokemonCard from '@/presentation/components/cards/pokemon-card/PokemonCard';
import RickyAndMortyCard from '@/presentation/components/cards/ricky-and-morty-card/RickyAndMortyCard';
import { StyledCharactersPageBodyContainer } from './CharactersPageBody.styles';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import {
  addPokemonPageFetched,
  fetchPokemons,
  fetchPokemonsCount,
  selectPokemonsByPage,
  selectPokemonsPagesFetched,
} from '@/data/store/slices/pokemon/PokemonSlice';
import {
  addRickyAndMortyPageFetched,
  fetchRickyAndMorty,
  selectRickyAndMortyCharactersByPage,
  selectRickyAndMortyPagesFetched,
} from '@/data/store/slices/ricky-and-morty/RickyAndMortySlice';
// import LoaderSpinner from '@/presentation/components/loader-spinner/LoaderSpinner';

interface Props {
  currentCharacters: string;
  currentPage: number;
}

const CharactersPageBody: FC<Props> = ({
  currentCharacters,
  currentPage,
}: Props): RE => {
  const dispatch = useAppDispatch();
  const pokemonsPaginatedData = useAppSelector((state) =>
    selectPokemonsByPage(state, currentPage)
  );
  const rickyAndMortyPaginatedData = useAppSelector((state) =>
    selectRickyAndMortyCharactersByPage(state, currentPage)
  );
  const pokemonsPagesFetched = useAppSelector(selectPokemonsPagesFetched);
  const rickyAndMortyPagesFetched = useAppSelector(
    selectRickyAndMortyPagesFetched
  );

  // const pokemonsPreviousPaginatedData = useAppSelector((state) =>
  //   selectPokemonsByPage(state, currentPage > 1 ? currentPage - 1 : 1)
  // );

  // const pokemonFetchStatus = useAppSelector((state) => state.pokemon.status);
  // const rickyAndMortyFetchStatus = useAppSelector(
  // // (state) => state.rickyAndMorty.status
  // );

  useEffect(() => {
    if (currentCharacters === 'pokemons') {
      if (
        !pokemonsPagesFetched.includes(currentPage) ||
        !pokemonsPagesFetched.includes(currentPage + 1)
      ) {
        if (currentPage === 1) {
          dispatch(fetchPokemonsCount());
          dispatch(fetchPokemons(currentPage));
          dispatch(addPokemonPageFetched(currentPage));
        }
        dispatch(fetchPokemons(currentPage + 1));
        dispatch(addPokemonPageFetched(currentPage + 1));
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (
        !rickyAndMortyPagesFetched.includes(currentPage) ||
        !rickyAndMortyPagesFetched.includes(currentPage + 1)
      ) {
        if (currentPage === 1) {
          dispatch(fetchRickyAndMorty(currentPage));
          dispatch(addRickyAndMortyPageFetched(currentPage));
        }
        dispatch(fetchRickyAndMorty(currentPage + 1));
        dispatch(addRickyAndMortyPageFetched(currentPage + 1));
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
      {/* eslint-disable-next-line no-nested-ternary */}
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
