
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { ExerciseData } from '../types/interfaces';
import { ExerciseCard } from './ExerciseCard';
import { gymSetCurrentPage, gymSetExercises } from '../slices/exercisesSlice';
import { ChangeEvent, useEffect, useState } from 'react';
import {FetchHeaders, useGetExercisesQuery, exerciseHeaders } from '../api/exercisesApi';


export const fetchData = async (url: string, headers: typeof exerciseHeaders) => {
  const res = await fetch(url, {headers});
  const data = await res.json();

  return data;
};


export const Exercises = () => {
  const exercises: Array<ExerciseData> = useSelector((state: RootState) => state.gym.exercises);
  const dispatch = useDispatch()
  const currentPage = useSelector((state: RootState) => state.gym.currentPage);
  const selectedBodyPart = useSelector((state: RootState) => state.gym.selectedBodyPart);
  
  const countPerPage = 9;

  const indexOfLastExercise = currentPage * countPerPage;
  const indexOfFirstExercise = indexOfLastExercise - countPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  

  const paginate = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(gymSetCurrentPage(page));

    window.scrollTo({top: 1800, behavior: 'smooth'})

  }


  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (selectedBodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseHeaders);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`, exerciseHeaders);
      }
      dispatch(gymSetExercises(exercisesData))
  }
  fetchExercisesData()
  }, [selectedBodyPart]);

  return (
    <Box id='exercises'
      sx={{mt: {lg: '110px'}}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack direction='row' sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
        {currentExercises.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} /> 
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
          {exercises.length > 9 && (
            <Pagination 
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / countPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
            />
          )}
      </Stack>
    </Box>
  )
}
