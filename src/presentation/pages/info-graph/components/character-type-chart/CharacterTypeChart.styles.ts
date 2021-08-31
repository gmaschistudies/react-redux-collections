import styled from 'styled-components';

export const StyledCharacterTypeChartContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .info-graph-chart-container {
    height: 70%;
    width: 70%;
  }

  .chart-title {
    font-size: calc(18px + 1vw);
    font-weight: bold;
    margin: 10px;
  }

  .empty-collection-text {
    font-size: 26px;
    font-weight: 500;
    margin: 10px;
  }
`;
