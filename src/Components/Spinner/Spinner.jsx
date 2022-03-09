import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

/* SIMPLE LOADING SPINNER */
const LoadingSpinner = () => {
  return (
    <Center w="100vw" h="100vh">
      <Spinner size={"xl"} />
    </Center>
  );
};

export default LoadingSpinner;
