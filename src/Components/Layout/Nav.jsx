import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

/* DISPLAYS A SIMPLE NAVBAR */
const Nav = () => {
  const navigate = useNavigate();

  return (
    <HStack
      bg={"darkgrey"}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      h={20}
      px={10}
      fontSize={20}
      fontWeight={"semibold"}
      zIndex={100}
    >
      <Text cursor={"pointer"} onClick={() => navigate("/")}>
        Home
      </Text>
      <Text cursor={"pointer"} onClick={() => navigate("/activity")}>
        Activity
      </Text>
      <Text cursor={"pointer"} onClick={() => navigate("/monthly")}>
        Monthly
      </Text>
    </HStack>
  );
};

export default Nav;
