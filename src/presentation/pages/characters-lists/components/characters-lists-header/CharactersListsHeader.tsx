import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { StyledCharactersListsHeaderContainer } from './CharactersListsHeader.styles';
import NavigationButton from '@/presentation/components/buttons/navigation-button/NavigationButton';

const CharactersListsHeader: FC = (): RE => {
  const history = useHistory();

  const intl = useIntl();

  const handlePokemonClick = () => {
    history.push(intl.formatMessage({ id: 'routes.characters.page.pokemon' }));
  };

  const handleRickyAndMortyClick = () => {
    history.push(
      intl.formatMessage({ id: 'routes.characters.page.ricky.and.morty' })
    );
  };

  return (
    <StyledCharactersListsHeaderContainer>
      <h1 className="characters-list-header-title">
        {intl.formatMessage({ id: 'characters.lists.header.title' })}
      </h1>
      <h2 className="characters-list-header-subtitle">
        {intl.formatMessage({ id: 'characters.lists.header.subtitle' })}
      </h2>

      <div className="characters-header-buttons-container">
        <NavigationButton
          text={intl.formatMessage({
            id: 'characters.ricky.and.morty.text',
          })}
          onClick={() => handleRickyAndMortyClick()}
        />
        <NavigationButton
          text={intl.formatMessage({
            id: 'characters.pokemon.text',
          })}
          onClick={() => handlePokemonClick()}
        />
      </div>
    </StyledCharactersListsHeaderContainer>
  );
};

export default CharactersListsHeader;
