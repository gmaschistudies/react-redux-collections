import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledPaginationContainer } from '@/presentation/pages/characters-page/components/characters-page-header/sub-components/pagination-container/PaginationContainer.styles';

interface Props {
  handlePageChange: (type: 'previous' | 'next') => void;
}

const PaginationContainer: FC<Props> = ({ handlePageChange }: Props): RE => {
  const handlePaginationButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e.currentTarget.name);
    if (e.currentTarget.name === 'next') {
      handlePageChange('next');
    } else {
      handlePageChange('previous');
    }
  };

  return (
    <StyledPaginationContainer>
      <button
        type="button"
        name="previous"
        className="pagination-container-button"
        onClick={(e) => handlePaginationButtonClick(e)}
      >
        Previous
      </button>
      <button
        type="button"
        name="next"
        className="pagination-container-button"
        onClick={(e) => handlePaginationButtonClick(e)}
      >
        Next
      </button>
    </StyledPaginationContainer>
  );
};

export default PaginationContainer;
