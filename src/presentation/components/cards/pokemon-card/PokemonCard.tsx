import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import { StyledPokemonCard } from './PokemonCard.styles';
import {
  addToCollection,
  selectItemByName,
} from '@/data/store/slices/collection/CollectionSlice';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';

interface Props {
  name: string;
  image: string;
}

const PokemonCard: FC<Props> = ({ name, image }: Props): RE => {
  const dispatch = useAppDispatch();
  const itemToBeAdded = useAppSelector((state) =>
    selectItemByName(state, name)
  );
  const handleContainerClick = () => {
    if (!itemToBeAdded) {
      dispatch(addToCollection({ type: 'pokemon', name, image }));
    }
  };

  const history = useHistory();
  const path = history.location.pathname;

  const darkMode = useAppSelector(selectStyle);

  return (
    <StyledPokemonCard
      onClick={() => handleContainerClick()}
      theme={darkMode}
      className={
        path.startsWith('/characters-page') ? 'card-at-character-page' : ''
      }
    >
      <img className="pokemon-card-image" src={image} alt={name} />
      <div className="pokemon-card-info">
        <h3 className="pokemon-card-info-name">{name}</h3>
        <p className="pokemon-card-info-general-info">pokemon</p>
      </div>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
