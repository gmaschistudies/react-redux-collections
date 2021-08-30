import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useAppSelector } from '@/data/store/hooks';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';
import { StyledNavigationButton } from './NavigationButton.styles';

interface Props {
  text: string;
  onClick?: () => void;
}

const NavigationButton: FC<Props> = ({ text, onClick }: Props): RE => {
  const darkMode = useAppSelector(selectStyle);

  return (
    <StyledNavigationButton onClick={onClick} theme={darkMode}>
      {text}
    </StyledNavigationButton>
  );
};

export default NavigationButton;
