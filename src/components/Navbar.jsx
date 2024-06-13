import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Home
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Button as={RouterLink} to="/projects" colorScheme="teal" variant="outline" mr={4}>
            Projects
          </Button>
          <Button as={RouterLink} to="/tasks" colorScheme="teal" variant="outline" mr={4}>
            Tasks
          </Button>
          <Button as={RouterLink} to="/editing" colorScheme="teal" variant="outline" mr={4}>
            Editing
          </Button>
          <Button as={RouterLink} to="/knowledge-portals" colorScheme="teal" variant="outline" mr={4}>
            Knowledge Portals
          </Button>
          <Button as={RouterLink} to="/forums" colorScheme="teal" variant="outline" mr={4}>
            Forums
          </Button>
          <Button as={RouterLink} to="/contextualized-compartment" colorScheme="teal" variant="outline">
            Contextualized Compartment
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;