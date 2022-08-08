
import { Box } from "@mui/material";
import { useGetExercisesQuery } from "../api/exercisesApi";
import { Exercises } from "../components/HomePage/Exercises";
import { HeroBanner } from "../components/HeroBanner";
import { SearchExercises } from "../components/HomePage/SearchExercises";
import { Spinner } from "../components/Spinner";

import heroBannerImg from '../assets/images/banner.jpg';

export const HomePage = () => {
  const {isLoading, error, data} = useGetExercisesQuery('exercises');

  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <Box>
        <HeroBanner 
          title='Fitness Club' 
          subtitle='Sweat, Smile & Repeat'
          subtitle2={<span>Check out the most effective exercises</span>}
          btnText='Explore Exercises'
          imgSrc={heroBannerImg}
          link='#exercises'
        />
        <SearchExercises data={data}/>
        <Exercises data={data}/>
      </Box>
    )
  }
}
