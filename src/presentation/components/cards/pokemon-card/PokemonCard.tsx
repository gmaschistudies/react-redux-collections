import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import { StyledPokemonCard } from './PokemonCard.styles';
import {
  addToCollection,
  selectItemByName,
} from '@/data/store/slices/collection/CollectionSlice';

interface Props {
  name: string;
  image: string;
}

const PokemonCard: FC<Props> = ({ name, image }: Props): RE => {
  const dispatch = useAppDispatch();
  // const collectionData = useAppSelector(selectAllCollection);
  const itemToBeAdded = useAppSelector((state) =>
    selectItemByName(state, name)
  );
  const handleContainerClick = () => {
    if (!itemToBeAdded) {
      dispatch(addToCollection({ type: 'pokemon', name, image }));
    }
  };

  return (
    <StyledPokemonCard onClick={() => handleContainerClick()}>
      <img className="pokemon-card-image" src={image} alt={name} />
      <div className="pokemon-card-info">
        <h3 className="pokemon-card-info-name">{name}</h3>
        <p className="pokemon-card-info-general-info">pokemon</p>
      </div>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
