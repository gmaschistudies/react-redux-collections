import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledStyleSwitcher } from './StyleSwitcher.styles';

const StyleSwitcher: FC = (): RE => {
  return (
    <StyledStyleSwitcher className="header-style-switcher">
      DK Switch
    </StyledStyleSwitcher>
  );
};

export default StyleSwitcher;
