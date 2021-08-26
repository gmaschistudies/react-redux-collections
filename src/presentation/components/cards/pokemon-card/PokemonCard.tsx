import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledPokemonCard } from './PokemonCard.styles';

interface Props {
  name: string;
  image: string;
}

const PokemonCard: FC<Props> = ({ name, image }: Props): RE => {
  return (
    <StyledPokemonCard>
      <div className="pokemon-card-image">{image}</div>
      <div className="pokemon-card-info">
        <h3 className="pokemon-card-info-name">{name}</h3>
        <p className="pokemon-card-info-general-info">pokemon</p>
      </div>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
