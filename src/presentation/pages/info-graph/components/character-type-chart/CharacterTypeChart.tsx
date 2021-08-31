import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useIntl } from 'react-intl';
import { Doughnut } from 'react-chartjs-2';
import { selectItemByType } from '@/data/store/slices/collection/CollectionSlice';
import { useAppSelector } from '@/data/store/hooks';
import { StyledCharacterTypeChartContainer } from './CharacterTypeChart.styles';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';

const CharacterTypeChart: FC = (): RE => {
  const pokemonCollectionCount = useAppSelector((state) =>
    selectItemByType(state, 'pokemon')
  );
  const rickyAndMortyCollectionCount = useAppSelector((state) =>
    selectItemByType(state, 'ricky-and-morty')
  );

  const darkMode = useAppSelector(selectStyle);

  const intl = useIntl();

  const data = {
    labels: [
      intl.formatMessage({ id: 'characters.pokemon.text' }),
      intl.formatMessage({ id: 'characters.ricky.and.morty.text' }),
    ],
    datasets: [
      {
        label: `${intl.formatMessage({ id: 'info.graph.datasets.label' })}`,
        data: [pokemonCollectionCount, rickyAndMortyCollectionCount],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: darkMode ? '#fff' : '#000',
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <StyledCharacterTypeChartContainer>
      <h1 className="chart-title">
        {intl.formatMessage({ id: 'info.graph.page.chart.title' })}
      </h1>
      {pokemonCollectionCount || rickyAndMortyCollectionCount ? (
        <div className="info-graph-chart-container">
          <Doughnut data={data} options={options} />
        </div>
      ) : (
        <h1 className="empty-collection-text">
          {intl.formatMessage({ id: 'info.graph.page.empty.collection.text' })}
        </h1>
      )}
    </StyledCharacterTypeChartContainer>
  );
};

export default CharacterTypeChart;
