import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import NavigationButton from '@/presentation/components/buttons/navigation-button/NavigationButton';
import { StyledCharactersPageHeaderContainer } from './CharactersPageHeader.styles';
import PaginationContainer from '../pagination-container/PaginationContainer';

interface Props {
  currentCharacters: string;
  handleCharacterChange: () => void;
  handlePageChange: (type: 'previous' | 'next') => void;
}

const CharactersPageHeader: FC<Props> = ({
  currentCharacters,
  handleCharacterChange,
  handlePageChange,
}: Props): RE => {
  const history = useHistory();

  const handleCharactersListsHomeClick = (): void => {
    history.push('/characters-lists');
  };

  const intl = useIntl();

  return (
    <StyledCharactersPageHeaderContainer>
      <h1 className="characters-page-header-title">
        {`${
          currentCharacters === 'pokemons'
            ? intl.formatMessage({ id: 'characters.pokemons.text' })
            : `${intl.formatMessage({
                id: 'characters.ricky.and.morty.text',
              })} ${intl.formatMessage({
                id: 'characters.page.header.title',
              })}`
        }`}
      </h1>
      <h2 className="characters-page-header-subtitle">
        {intl.formatMessage({ id: 'characters.page.header.subtitle' })}
      </h2>
      <div className="characters-header-page-buttons-container">
        <NavigationButton
          text={intl.formatMessage({
            id: 'characters.page.header.navigation.button.lists.home',
          })}
          onClick={() => handleCharactersListsHomeClick()}
        />
        <NavigationButton
          text={
            currentCharacters === 'pokemons'
              ? intl.formatMessage({ id: 'characters.ricky.and.morty.text' })
              : intl.formatMessage({ id: 'characters.pokemon.text' })
          }
          onClick={() => handleCharacterChange()}
        />
        <PaginationContainer handlePageChange={handlePageChange} />
      </div>
    </StyledCharactersPageHeaderContainer>
  );
};

export default CharactersPageHeader;
