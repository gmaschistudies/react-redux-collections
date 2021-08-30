import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledInfoGraphContainer,
  StyledInfoGraphMainContentContainer,
} from '@/presentation/pages/info-graph/index.styles';
import Header from '@/presentation/components/header/Header';
import CharacterTypeChart from './components/character-type-chart/CharacterTypeChart';

const InfoGraphPage: FC = (): RE => {
  return (
    <StyledInfoGraphContainer>
      <Header />
      <StyledInfoGraphMainContentContainer>
        <CharacterTypeChart />
      </StyledInfoGraphMainContentContainer>
    </StyledInfoGraphContainer>
  );
};

export default InfoGraphPage;
