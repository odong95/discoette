import Link from 'next/link';
import { Container, Heading, Button } from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';

export default function NotFound() {
  return <>
    <Heading m={2}>404 - Page Not Found</Heading>
    <Link href="/" passHref>
      <Button rightIcon={<HiArrowRight />} variant="outline">
        Go Home
      </Button>
    </Link>
  </>
}