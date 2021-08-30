import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '@/presentation/components/header/Header';
import Footer from '@/presentation/components/footer/Footer';
import {
  StyledCharactersPageContainer,
  StyledCharactersPageMainContentContainer,
} from './index.styles';
import CharactersPageBody from './components/characters-page-body/CharactersPageBody';
import CharactersPageHeader from './components/characters-page-header/CharactersPageHeader';
import { useAppSelector } from '@/data/store/hooks';
import PaginationContainer from '@/presentation/pages/characters-page/components/pagination-container/PaginationContainer';

const CharactersPage: FC = (): RE => {
  const match: Record<string, string> = useParams();
  const history = useHistory();
  const pokemonsNumberOfPages = useAppSelector(
    (state) => state.pokemon.numberOfPages
  );
  const rickyAndMortyCharactersNumberOfPages = useAppSelector(
    (state) => state.rickyAndMorty.numberOfPages
  );

  const [currentCharacters, setCurrentCharacters] = useState<string>(match.id);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxNumberOfPages, setMaxNumberOfPages] = useState(
    currentCharacters === 'pokemons'
      ? pokemonsNumberOfPages
      : rickyAndMortyCharactersNumberOfPages
  );

  const handleCharacterChange = () => {
    if (currentCharacters === 'pokemons') {
      setCurrentCharacters('ricky-and-morty');
      setMaxNumberOfPages(rickyAndMortyCharactersNumberOfPages);
      history.push('/characters-page/ricky-and-morty');
    } else {
      setCurrentCharacters('pokemons');
      setMaxNumberOfPages(pokemonsNumberOfPages);
      history.push('/characters-page/pokemons');
    }
    setCurrentPage(1);
  };

  console.log(
    `poke Pages: ${pokemonsNumberOfPages} | ricky Pages: ${rickyAndMortyCharactersNumberOfPages} | max: ${maxNumberOfPages}`
  );

  const handlePageChange = (type: 'previous' | 'next'): void => {
    if (type === 'next') {
      // eslint-disable-next-line no-lonely-if
      if (
        (currentCharacters === 'pokemons' &&
          (currentPage < pokemonsNumberOfPages ||
            pokemonsNumberOfPages !== 0)) ||
        (currentCharacters === 'ricky-and-morty' &&
          (currentPage < rickyAndMortyCharactersNumberOfPages ||
            rickyAndMortyCharactersNumberOfPages !== 0))
      ) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <StyledCharactersPageContainer>
      <Header />
      <StyledCharactersPageMainContentContainer>
        <button type="button" onClick={() => handlePageChange('next')}>
          {currentPage}
        </button>
        <CharactersPageHeader
          currentCharacters={currentCharacters}
          handleCharacterChange={handleCharacterChange}
          handlePageChange={handlePageChange}
        />
        <CharactersPageBody
          currentCharacters={currentCharacters}
          currentPage={currentPage}
        />
        <PaginationContainer handlePageChange={handlePageChange} />
      </StyledCharactersPageMainContentContainer>
      <Footer />
    </StyledCharactersPageContainer>
  );
};

export default CharactersPage;
