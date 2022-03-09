import { Avatar, Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { DateTime, Duration } from "luxon";
import { useSelector } from "react-redux";

// CARD FOR DISPLAYING EACH ACTIVITY
const ActivityCard = ({ activity }) => {
  const { distance, name, start_date, total_elevation_gain, elapsed_time } =
    activity;
  const [duration, setDuration] = useState();
  const date = DateTime.fromJSDate(new Date(start_date));

  /* GET USER INFO */
  const athlete = useSelector((state) => state.athlete);

  /* FORMAT THE DURATION WITH HH MM SS */
  const formatDuration = () => {
    if (elapsed_time < 3600) {
      setDuration(
        Duration.fromObject({ seconds: elapsed_time }).toFormat("mm:ss")
      );
    } else {
      setDuration(
        Duration.fromObject({ seconds: elapsed_time }).toFormat("hh:mm:ss")
      );
    }
  };

  useEffect(() => {
    formatDuration();
  }, []);

  return (
    <Grid
      mx="auto"
      templateColumns={"2fr 8fr "}
      w={600}
      p={5}
      boxShadow="md"
      bg="#fafafa"
      borderRadius={"base"}
    >
      <GridItem w={20} h={40}>
        <Avatar name={athlete.firstName} bg="#FF6327" color="white"></Avatar>
      </GridItem>
      <GridItem>
        <Heading size={"md"}>
          {athlete.firstName} {athlete.lastName}
        </Heading>
        <Text>
          {date.monthLong} {date.day}, {date.year} at {date.hour}:{date.minute}{" "}
          {date.hour > 12 ? "PM" : "AM"}
        </Text>
        <Heading fontWeight={"bold"} color="#FF6327">
          {name}
        </Heading>
        <Grid templateColumns={"repeat(3, 3fr)"} w={60}>
          <GridItem>
            <Box>
              <p>Distance</p>
              <p>{distance / 1000} km</p>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <p>Duration</p>
              <p>{duration}</p>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <p>Elevation</p>
              {total_elevation_gain} m
            </Box>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default ActivityCard;
