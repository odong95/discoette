import { Box, Container } from "@chakra-ui/react";
import { NavBar } from 'components/NavBar';
import { Footer } from 'components/Footer';

export const Layout = (props: any) => {
  const { children } = props;
  return (
    <Box>
      <NavBar />
      <Container h="100vh" m="10px">
        {children}
      </Container>
      <Footer />
    </Box>
  )
}
