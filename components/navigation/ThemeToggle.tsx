import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const themeIcon = useColorModeValue(<HiMoon />, <HiSun />);
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle theme"
      fontSize="2xl"
      icon={themeIcon}
    />
  )
}

export default ThemeToggle;