import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { selectItemByType } from '@/data/store/slices/collection/CollectionSlice';
import { useAppSelector } from '@/data/store/hooks';
import { StyledCharacterTypeChartContainer } from './CharacterTypeChart.styles';

const CharacterTypeChart: FC = (): RE => {
  const pokemonCollectionCount = useAppSelector((state) =>
    selectItemByType(state, 'pokemon')
  );
  const rickyAndMortyCollectionCount = useAppSelector((state) =>
    selectItemByType(state, 'ricky-and-morty')
  );

  const data = {
    labels: ['Pokemon', 'Ricky and Morty'],
    datasets: [
      {
        label: '# of Votes',
        data: [pokemonCollectionCount, rickyAndMortyCollectionCount],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        title: 'ss',
      },
    ],
  };

  return (
    <StyledCharacterTypeChartContainer>
      <h1 className="chart-title">Characters&apos; Type Collection Info</h1>
      {pokemonCollectionCount || rickyAndMortyCollectionCount ? (
        <Doughnut data={data} />
      ) : (
        <h1 className="empty-collection-text">Your collection is empty</h1>
      )}
    </StyledCharacterTypeChartContainer>
  );
};

export default CharacterTypeChart;
