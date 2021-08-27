import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledNavigationButton } from './NavigationButton.styles';

interface Props {
  text: string;
  onClick?: () => void;
}

const NavigationButton: FC<Props> = ({ text, onClick }: Props): RE => {
  return (
    <StyledNavigationButton onClick={onClick}>{text}</StyledNavigationButton>
  );
};

export default NavigationButton;
