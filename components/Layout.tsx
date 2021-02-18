import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { Header } from 'components/navigation/Header';
import { Footer } from 'components/Footer';

export const Layout = ({ children }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.900');
  return (
    <Box minHeight="100vh" display="flex" flexDir="column">
      <Header bgColor={bgColor} />
      <Container maxW="97vw" flex={1}>
        {children}
      </Container>
      <Footer bgColor={bgColor} />
    </Box>
  )
}
