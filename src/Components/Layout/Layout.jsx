import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <Stack w="100vw" h="100vh" p={10}>
      <Nav />
      <Box pt={20}>{children}</Box>
    </Stack>
  );
};

export default Layout;
