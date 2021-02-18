import { Flex, useColorModeValue } from '@chakra-ui/react';

export const HeaderContainer = ({ children, ...props }) => {
  const bgColor = useColorModeValue('gray.200', 'gray.900');
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bg={bgColor}
      mb={8}
      p={8}
      {...props}
    >
      {children}
    </Flex>
  );
};