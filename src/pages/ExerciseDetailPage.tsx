import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Detail } from "../components/ExercisesDetailsPage/Detail";
import { ExerciseVideos } from "../components/ExercisesDetailsPage/ExerciseVideos";
import { SimilarExercises } from "../components/ExercisesDetailsPage/SimilarExercises";
import { useGetExercisesQuery } from "../api/exercisesApi";
import { Spinner } from "../components/Spinner";




export const ExerciseDetailPage = () => {

  const {id} = useParams();
  // const {isLoading: exerciseDetailLoading, data: exerciseDetail} = useGetExercisesQuery(`exercises/exercise/${id}`);


  if(false) {
    return <Spinner />
  } else {
    return (
      <Box>
        {/* <Detail exerciseDetail={exerciseDetail}/>
        <ExerciseVideos name={exerciseDetail.name} />
        <SimilarExercises exerciseTarget={exerciseDetail.target} exerciseEquipment={exerciseDetail.equipment} /> */}
      </Box>
    )
  }
}
