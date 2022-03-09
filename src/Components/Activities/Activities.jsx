import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useGetActivity } from "../../Api/Activity/get_activity";
import { useDispatch, useSelector } from "react-redux";
import { setActivities } from "../../store/Reducers/activityReducer";
import ActivityCard from "./ActivityCard";
import LoadingSpinner from "../Spinner/Spinner";
import { Box, Heading } from "@chakra-ui/react";

const Activities = () => {
  const dispatch = useDispatch();
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
