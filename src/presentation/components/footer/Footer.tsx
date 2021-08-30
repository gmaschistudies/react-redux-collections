import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useAppSelector } from '@/data/store/hooks';
import { selectStyle } from '@/data/store/slices/style/StyleSlice';
import { StyledFooter } from './Footer.styles';

const Footer: FC = (): RE => {
  const darkMode = useAppSelector(selectStyle);
  return <StyledFooter theme={darkMode} />;
};

export default Footer;
