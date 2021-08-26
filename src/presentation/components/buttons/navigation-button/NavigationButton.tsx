import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledNavigationButton } from './NavigationButton.styles';

interface Props {
  text: string;
}

const NavigationButton: FC<Props> = ({ text }: Props): RE => {
  return <StyledNavigationButton>{text}</StyledNavigationButton>;
};

export default NavigationButton;
