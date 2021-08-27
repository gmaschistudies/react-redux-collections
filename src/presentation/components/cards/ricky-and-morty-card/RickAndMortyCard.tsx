import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledRickyAndMortyCard } from './RickAndMortyCard.styles';

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
  return (
    <StyledRickyAndMortyCard>
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
