import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import { Duration } from "luxon";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import LoadingSpinner from "../Spinner/Spinner";

/* DISPLAY ALL MONTHS THE USER HAVE ACTIVITY IN */
const Months = () => {
  const activities = useSelector((state) => state.activity);
  const [months, setMonths] = useState([]);
  const navigate = useNavigate();

  /* GET UNIQUE MONTHS FROM ACTIVITIES */
  const getMonths = () => {
    const uniqueMonths = [];
    activities.forEach((elem) => {
      const month = DateTime.fromJSDate(new Date(elem.start_date)).monthLong;
      if (uniqueMonths.indexOf(month) === -1) uniqueMonths.push(month);
    });
    setMonths(uniqueMonths);
  };

  useEffect(() => {
    if (activities) {
      getMonths();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  /* DISPLAY EACH MONTH WITH THE TOTAL VALUES */
  const GetTotalInfo = ({ months }) => {
    let distance = 0;
    let elevation = 0;
    let time = 0;
    let duration = 0;

    activities.forEach((elem) => {
      const month = DateTime.fromJSDate(new Date(elem.start_date)).monthLong;
      if (month === months) {
        distance = distance + elem.distance;
        elevation = elevation + elem.total_elevation_gain;
        time = time + elem.elapsed_time;
      }
      if (time < 3600) {
        duration = Duration.fromObject({ seconds: time }).toFormat("mm:ss");
      } else {
        duration = Duration.fromObject({ seconds: time }).toFormat("hh:mm:ss");
      }
    });

    return (
      <Grid templateColumns={"repeat(3, 4fr)"} pt={5}>
        <GridItem textAlign={"center"}>
          <Text>Total Distance</Text>
          <Text>{distance / 1000} km</Text>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Text>Total Duration</Text>
          <Text>{duration}</Text>
        </GridItem>
        <GridItem textAlign={"center"}>
          <Text>Total Elevation Gain</Text>
          <Text>{Math.round(elevation * 100) / 100} mts</Text>
        </GridItem>
      </Grid>
    );
  };

  return (
    <Layout>
      {activities.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <VStack justify={"space-around"} h={700}>
          <Heading mb={50}>Monthly Activity</Heading>
          {months.slice(0, 3).map((month, index) => {
            return (
              <Box
                bg="#fafafa"
                key={index}
                boxShadow="md"
                maxW={600}
                w={"100%"}
                h={40}
                borderRadius="base"
              >
                <Heading
                  textAlign="center"
                  onClick={() => navigate(`/month?month=${month}`)}
                  cursor="pointer"
                  color={"#FF6327"}
                >
                  {month}
                </Heading>
                <GetTotalInfo months={month} />
              </Box>
            );
          })}
        </VStack>
      )}
    </Layout>
  );
};

export default Months;

/* DISTANCE TIME AND ELEVATION PER MONTH */
