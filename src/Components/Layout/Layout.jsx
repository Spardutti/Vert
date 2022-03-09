import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Nav from "./Nav";

/* BASIC PAGE LAYOUT */
const Layout = ({ children }) => {
  return (
    <Stack w="100vw" h="100vh" p={10} fontFamily="monospace">
      <Nav />
      <Box pt={20}>{children}</Box>
    </Stack>
  );
};

export default Layout;
