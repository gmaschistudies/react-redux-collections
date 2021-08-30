import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useAppDispatch } from '@/data/store/hooks';
import { StyledStyleSwitcher } from './StyleSwitcher.styles';
import StyleSwitcherIcon from '@/presentation/assets/switch.png';
import { changeStyle } from '@/data/store/slices/style/StyleSlice';

const StyleSwitcher: FC = (): RE => {
  const dispatch = useAppDispatch();

  return (
    <StyledStyleSwitcher className="header-style-switcher">
      <img
        src={StyleSwitcherIcon}
        alt="Style switcher"
        className="header-style-switcher"
        role="none"
        onClick={() => dispatch(changeStyle())}
      />
    </StyledStyleSwitcher>
  );
};

export default StyleSwitcher;
