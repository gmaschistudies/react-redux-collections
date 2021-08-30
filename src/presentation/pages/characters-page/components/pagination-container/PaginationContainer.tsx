import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledPaginationContainer } from '@/presentation/pages/characters-page/components/pagination-container/PaginationContainer.styles';
import { useAppSelector } from '@/data/store/hooks';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';

interface Props {
  handlePageChange: (type: 'previous' | 'next') => void;
}

const PaginationContainer: FC<Props> = ({ handlePageChange }: Props): RE => {
  const handlePaginationButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget.name === 'next') {
      handlePageChange('next');
    } else {
      handlePageChange('previous');
    }
  };

  const darkMode = useAppSelector(selectStyle);

  return (
    <StyledPaginationContainer theme={darkMode}>
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
