import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import { StyledRickyAndMortyCard } from './RickyAndMortyCard.styles';
import {
  addToCollection,
  selectItemByName,
} from '@/data/store/slices/collection/CollectionSlice';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';

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
  const darkMode = useAppSelector(selectStyle);

  const history = useHistory();
  const path = history.location.pathname;

  const intl = useIntl();

  return (
    <StyledRickyAndMortyCard
      onClick={() => handleContainerClick()}
      theme={darkMode}
      className={
        path.startsWith('/characters-page') ? 'card-at-character-page' : ''
      }
    >
      <img className="ricky-and-morty-card-image" src={image} alt={name} />
      <div className="ricky-and-morty-card-info">
        <h3 className="ricky-and-morty-card-info-name">{name}</h3>
        <p className="ricky-and-morty-card-info-general-info">
          {`${intl.formatMessage({
            id: 'components.ricky.and.morty.card.info.species',
          })} ${species}`}
        </p>
        <p className="ricky-and-morty-card-info-general-info">
          {`${intl.formatMessage({
            id: 'components.ricky.and.morty.card.info.gender',
          })} ${gender}`}
        </p>
      </div>
    </StyledRickyAndMortyCard>
  );
};

export default RickyAndMortyCard;
