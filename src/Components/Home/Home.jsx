import React from "react";
import Layout from "../Layout/Layout";
import { motion } from "framer-motion";
import { Box, Heading, HStack } from "@chakra-ui/react";
import { GiRunningShoe } from "react-icons/gi";

const Home = () => {
  const MotionHeading = motion(Heading);

  /* DISPLAY AND ANIMATE TITLE */
  const Title = () => (
    <HStack fontWeight={"bold"} justify={"center"} pos="relative">
      <MotionHeading
        px={2}
        fontSize={100}
        initial={{ x: "-100vw" }}
        animate={{ x: 0, skew: -30 }}
        transition={{
          duration: 1,
        }}
      >
        Vert
      </MotionHeading>
      <MotionHeading
        animate={{ scale: [3, 0.1, 1] }}
        transition={{ duration: 2 }}
      >
        .
      </MotionHeading>
      <MotionHeading
        px={2}
        fontSize={100}
        initial={{ x: "100vw" }}
        animate={{ x: 0, skewX: -30 }}
        transition={{
          duration: 1,
        }}
      >
        Run
      </MotionHeading>
    </HStack>
  );

  return (
    <Layout>
      <Title />
    </Layout>
  );
};

export default Home;
