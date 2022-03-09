import { Box, Heading } from "@chakra-ui/react";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ActivityCard from "../Activities/ActivityCard";
import Layout from "../Layout/Layout";
import LoadingSpinner from "../Spinner/Spinner";

/* DISPLAY SINGLE MONTH ACTIVITIES */
const SingleMonth = () => {
  const [searchParams] = useSearchParams();
  const activities = useSelector((state) => state.activity);
  const [monthActivities, setMonthActivities] = useState();
  const [activeMonth, setActiveMonth] = useState();

  /* GET THE MONTH FROM THE URL */
  useEffect(() => {
    const month = searchParams.get("month");
    if (month) {
      setActiveMonth(month);
      getActivitiesFromMonth(month);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  /* FETCH THE ACTIVITIES FROM THE SPECIFIED MONTH */
  const getActivitiesFromMonth = (month) => {
    let uniqueActivities = [];
    activities.forEach((elem) => {
      const activityMonth = DateTime.fromJSDate(
        new Date(elem.start_date)
      ).monthLong;
      if (activityMonth === month) {
        uniqueActivities.push(elem);
      }
    });
    setMonthActivities(uniqueActivities);
  };

  return (
    <Layout>
      <Heading textAlign={"center"} mb={50}>
        {activeMonth} Activities
      </Heading>
      {monthActivities && monthActivities.length > 0 ? (
        monthActivities.map((elem, index) => {
          return (
            <Box p={10} key={index}>
              <ActivityCard activity={elem} />
            </Box>
          );
        })
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  );
};

export default SingleMonth;
