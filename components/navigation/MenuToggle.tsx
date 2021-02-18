import { Box } from "@chakra-ui/react"
import { HiOutlineX, HiOutlineMenu } from 'react-icons/hi';

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} fontSize="3xl">
      {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
    </Box>
  )
}