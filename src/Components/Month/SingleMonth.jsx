import { Box } from "@chakra-ui/react";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ActivityCard from "../Activities/ActivityCard";
import Layout from "../Layout/Layout";
import LoadingSpinner from "../Spinner/Spinner";

const SingleMonth = () => {
  const [searchParams] = useSearchParams();
  const activities = useSelector((state) => state.activity);
  const [monthActivities, setMonthActivities] = useState();
  useEffect(() => {
    const month = searchParams.get("month");
    if (month) getActivitiesFromMonth(month);
  }, []);

  const getActivitiesFromMonth = (month) => {
    let uniqueActivities = [];
    activities.map((elem) => {
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
      {monthActivities ? (
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
