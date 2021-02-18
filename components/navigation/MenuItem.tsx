import NextLink from 'next/link';
import { Link, Text } from '@chakra-ui/react';

export const MenuItem = ({ children, isLast = false, to = "/", ...rest }) => {
  return (
    <Link as={NextLink} href={to}>
      <Text fontWeight="bold" cursor="pointer" {...rest}>
        {children}
      </Text>
    </Link>
  )
}