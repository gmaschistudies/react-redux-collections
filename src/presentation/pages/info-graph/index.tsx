import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledInfoGraphContainer,
  StyledInfoGraphMainContentContainer,
} from '@/presentation/pages/info-graph/index.styles';
import Header from '@/presentation/components/header/Header';
import CharacterTypeChart from './components/character-type-chart/CharacterTypeChart';
import { useAppSelector } from '@/data/store/hooks';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';

const InfoGraphPage: FC = (): RE => {
  const darkMode = useAppSelector(selectStyle);

  return (
    <StyledInfoGraphContainer theme={darkMode}>
      <Header />
      <StyledInfoGraphMainContentContainer>
        <CharacterTypeChart />
      </StyledInfoGraphMainContentContainer>
    </StyledInfoGraphContainer>
  );
};

export default InfoGraphPage;
