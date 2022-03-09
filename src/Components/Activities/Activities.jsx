import React from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import ActivityCard from "./ActivityCard";
import LoadingSpinner from "../Spinner/Spinner";
import { Box, Heading } from "@chakra-ui/react";

/* GET USER ACTIVITIES FROM THE STORE AND DISPLAY A CARD FOR EACH OF THEM */
const Activities = () => {
  const activities = useSelector((state) => state.activity);

  const ShowActivityCard = () => {
    return activities.slice(0, 3).map((activity, index) => (
      <Box p={10} key={index}>
        <ActivityCard activity={activity} />
      </Box>
    ));
  };

  return (
    <Layout>
      <Heading textAlign={"center"} mb={50}>
        {" "}
        Recent Activity
      </Heading>
      {activities.length > 0 ? <ShowActivityCard /> : <LoadingSpinner />}
    </Layout>
  );
};

export default Activities;
