import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

/* DISPLAYS A SIMPLE NAVBAR */
const Nav = () => {
  const navigate = useNavigate();

  return (
    <HStack
      bg={"#FF6327"}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      h={20}
      px={10}
      fontSize={20}
      fontWeight={"semibold"}
      zIndex={100}
      color="white"
    >
      <Button
        colorScheme={"whiteAlpha"}
        cursor={"pointer"}
        onClick={() => navigate("/")}
        _hover={{ scale: 2 }}
      >
        Home
      </Button>
      <Button
        colorScheme={"whiteAlpha"}
        cursor={"pointer"}
        onClick={() => navigate("/activity")}
      >
        Activity
      </Button>
      <Button
        colorScheme={"whiteAlpha"}
        cursor={"pointer"}
        onClick={() => navigate("/monthly")}
      >
        Monthly
      </Button>
    </HStack>
  );
};

export default Nav;
