import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledNavigationMenuItemContainer } from './NavigationMenuItem.styles';

interface Props {
  image: string;
  text: string;
  className?: string;
  handleClick: () => void;
}

const NavigationMenuItem: FC<Props> = ({
  image,
  text,
  className,
  handleClick,
}): RE => {
  return (
    <StyledNavigationMenuItemContainer
      onClick={handleClick}
      className={className}
    >
      <img className="menu-item-image" src={image} alt={text} />
    </StyledNavigationMenuItemContainer>
  );
};

export default NavigationMenuItem;
