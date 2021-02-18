import { Flex } from '@chakra-ui/react';

export const Footer = ({ bgColor }) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bg={bgColor}
      p={8}
    >
      footer here
    </Flex>
  );
}