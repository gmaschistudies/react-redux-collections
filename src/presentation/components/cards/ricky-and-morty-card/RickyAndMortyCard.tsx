import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import { StyledRickyAndMortyCard } from './RickyAndMortyCard.styles';
import {
  addToCollection,
  selectItemByName,
} from '@/data/store/slices/collection/CollectionSlice';

interface Props {
  name: string;
  species: string;
  gender: string;
  image: string;
}

const RickyAndMortyCard: FC<Props> = ({
  name,
  species,
  gender,
  image,
}: Props): RE => {
  const dispatch = useAppDispatch();
  // const collectionData = useAppSelector(selectAllCollection);
  const itemToBeAdded = useAppSelector((state) =>
    selectItemByName(state, name)
  );
  const handleContainerClick = () => {
    if (!itemToBeAdded) {
      dispatch(
        addToCollection({
          type: 'ricky-and-morty',
          name,
          image,
          gender,
          species,
        })
      );
    }
  };

  return (
    <StyledRickyAndMortyCard onClick={() => handleContainerClick()}>
      <img className="ricky-and-morty-card-image" src={image} alt={name} />
      <div className="ricky-and-morty-card-info">
        <h3 className="ricky-and-morty-card-info-name">{name}</h3>
        <p className="ricky-and-morty-card-info-general-info">
          Species: {species}
        </p>
        <p className="ricky-and-morty-card-info-general-info">
          Gender: {gender}
        </p>
      </div>
    </StyledRickyAndMortyCard>
  );
};

export default RickyAndMortyCard;
