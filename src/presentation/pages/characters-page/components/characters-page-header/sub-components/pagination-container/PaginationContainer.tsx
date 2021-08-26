import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledPaginationContainer } from '@/presentation/pages/characters-page/components/characters-page-header/sub-components/pagination-container/PaginationContainer.styles';

const PaginationContainer: FC = (): RE => {
  return (
    <StyledPaginationContainer>
      <button type="button" className="pagination-container-button">
        Previous
      </button>
      <button type="button" className="pagination-container-button">
        Next
      </button>
    </StyledPaginationContainer>
  );
};

export default PaginationContainer;
