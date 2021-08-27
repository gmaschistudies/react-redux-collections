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

const CharactersPage: FC = (): RE => {
  const match: Record<string, string> = useParams();
  const history = useHistory();
  // const supportedCharacters: string[] = ['pokemons', 'rick-and-morty'];
  const [currentCharacters, setCurrentCharacters] = useState<string>(match.id);

  const handleCharacterChange = () => {
    if (currentCharacters === 'pokemons') {
      setCurrentCharacters('rick-and-morty');
      history.push('/characters-page/ricky-and-morty');
    } else {
      setCurrentCharacters('pokemons');
      history.push('/characters-page/pokemons');
    }
  };

  return (
    <StyledCharactersPageContainer>
      <Header />
      <StyledCharactersPageMainContentContainer>
        <CharactersPageHeader
          currentCharacters={currentCharacters}
          handleCharacterChange={handleCharacterChange}
        />
        <CharactersPageBody currentCharacters={currentCharacters} />
      </StyledCharactersPageMainContentContainer>
      <Footer />
    </StyledCharactersPageContainer>
  );
};

export default CharactersPage;
