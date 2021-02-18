import { extendTheme } from '@chakra-ui/react';

const config : any = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({ config });

export default theme