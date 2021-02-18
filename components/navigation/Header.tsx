import { useState } from 'react';
import { HeaderContainer } from './HeaderContainer';
import { MenuLinks } from './MenuLinks';
import { MenuToggle } from './MenuToggle';
import { Logo } from './Logo';

export const Header = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer {...props}>
      <Logo
        w="100px"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </HeaderContainer>
  )
}
