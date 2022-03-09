import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";
import { Button, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { BsClockHistory } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const MotionHeading = motion(Heading);

  /* DISPLAY AND ANIMATE TITLE */
  const Title = () => (
    <HStack
      fontWeight={"bold"}
      justify={"center"}
      pos="relative"
      overflow={"hidden"}
    >
      <MotionHeading
        px={2}
        fontSize={100}
        initial={{ x: "-60vw" }}
        animate={{ x: 0, skew: -30 }}
        transition={{
          duration: 0.7,
        }}
      >
        Vert
      </MotionHeading>
      <MotionHeading
        color="#FF6327"
        animate={{ scale: [0, 1] }}
        transition={{ duration: 1 }}
      >
        .
      </MotionHeading>
      <MotionHeading
        px={2}
        fontSize={100}
        initial={{ x: "60vw" }}
        animate={{ x: 0, skewX: -30 }}
        transition={{
          duration: 0.7,
        }}
      >
        Run
      </MotionHeading>
    </HStack>
  );

  const Content = () => (
    <Stack mt={20} align="center">
      <Heading size={"md"}>
        We help you unlock your full potential by analizing your data
      </Heading>
      <Heading textAlign={"center"} size={"sm"} pt={20}>
        We focus on
      </Heading>
      <HStack pt={10}>
        <VStack
          templateColumns={"repeat(3, 3fr)"}
          w={300}
          textAlign="center"
          h={200}
        >
          <Text>
            <BsClockHistory color="#FF6327" fontSize={50} />
          </Text>
          <Text>How to improve your running duration </Text>
        </VStack>
        <VStack
          templateColumns={"repeat(3, 3fr)"}
          w={300}
          textAlign="center"
          h={200}
          mt={10}
        >
          <GiPathDistance color="#FF6327" fontSize={50} />
          <Text>How to help you run longer distances</Text>
        </VStack>
        <VStack
          templateColumns={"repeat(3, 3fr)"}
          w={300}
          textAlign="center"
          h={200}
          mt={10}
        >
          <GiMountainRoad color="#FF6327" fontSize={50} />
          <Text>How to reach new heights</Text>
        </VStack>
      </HStack>
    </Stack>
  );

  const GetStarted = () => {
    const navigate = useNavigate();
    return (
      <HStack justify={"center"} color>
        <Button
          colorScheme={"orange"}
          size="lg"
          onClick={() => navigate("/activity")}
        >
          Get Started
        </Button>
      </HStack>
    );
  };

  return (
    <Layout>
      <Title />
      <Content />
      <GetStarted />
    </Layout>
  );
};

export default Home;
