
import { Box } from "@mui/material";
import { useGetExercisesQuery } from "../api/exercisesApi";
import { Exercises } from "../components/HomePage/Exercises";
import { HeroBanner } from "../components/HomePage/HeroBanner";
import { SearchExercises } from "../components/HomePage/SearchExercises";
import { Spinner } from "../components/Spinner";

export const HomePage = () => {
  const {isLoading, error, data} = useGetExercisesQuery('exercises');

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <Box>
        <HeroBanner />
        <SearchExercises data={data}/>
        <Exercises data={data}/>
      </Box>
    )
  }
}
