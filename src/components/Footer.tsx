import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="teal.500"
      color="white"
      p={4}
      top={"auto"}
      mt={10}
      textAlign="center"
    >
      <Text fontSize="sm">© 2023 My Application. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
