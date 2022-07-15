
import { Box } from "@mui/material";
import { useState } from "react";
import { Exercises } from "../components/Exercises";
import { HeroBanner } from "../components/HeroBanner";
import { SearchExercises } from "../components/SearchExercises";

export const HomePage = () => {


  return (
    <Box>
      <HeroBanner />
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}
