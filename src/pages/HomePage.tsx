
import { Box } from "@mui/material";
import { useGetExercisesQuery } from "../api/exercisesApi";
import { Exercises } from "../components/HomePage/Exercises";
import { HeroBanner } from "../components/HomePage/HeroBanner";
import { SearchExercises } from "../components/HomePage/SearchExercises";

export const HomePage = () => {
  const {isLoading, error, data} = useGetExercisesQuery('exercises');

  if (isLoading) {
    return <p>Loading</p>
  } else {
    return (
      <Box>
        <HeroBanner />
        {/* <SearchExercises data={data}/>
        <Exercises data={data}/> */}
      </Box>
    )
  }
}
