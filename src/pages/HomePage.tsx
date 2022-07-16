
import { Box } from "@mui/material";
import { useState } from "react";
import { useGetExercisesQuery } from "../api/exercisesApi";
import { Exercises } from "../components/Exercises";
import { HeroBanner } from "../components/HeroBanner";
import { SearchExercises } from "../components/SearchExercises";

export const HomePage = () => {
  const {isLoading, error, data} = useGetExercisesQuery('exercises');

  if (isLoading) {
    return <p>Loading</p>
  } else {
    return (
      <Box>
        <HeroBanner />
        <SearchExercises data={data}/>
        <Exercises/>
      </Box>
    )
  }
}
