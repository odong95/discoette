import { Box, Button, Stack } from '@chakra-ui/react';
import { MenuItem } from './MenuItem';
import ThemeToggle from './ThemeToggle';

export const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={6}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/new">New Releases</MenuItem>
        <MenuItem to="/upcoming">Upcoming Releases</MenuItem>
        <MenuItem to="/login" isLast>
          <Button
            size="sm"
            rounded="md"
            fontWeight="bold"
            color="gray.100"
            bg="gray.500"
            _hover={{
              bg: "gray.700"
            }}
          >
            Login / Sign Up
          </Button>
        </MenuItem>
        <ThemeToggle />
      </Stack>
    </Box>
  );
};