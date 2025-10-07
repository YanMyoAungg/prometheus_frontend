import { Box, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

const Header = () => {
  return (
    <Box
      as="header"
      bg={{ _light: "teal.500", _dark: "white" }}
      color="white"
      p={4}
    >
      <Text fontSize="xl">My Application</Text>
      <ColorModeButton position="absolute" top="4" right="4" />
    </Box>
  );
};

export default Header;
