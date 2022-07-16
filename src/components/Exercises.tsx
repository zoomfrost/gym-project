
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { ExerciseData } from '../types/interfaces';
import { ExerciseCard } from './ExerciseCard';
import { gymSetCurrentPage } from '../slices/exercisesSlice';
import { ChangeEvent } from 'react';


export const Exercises = () => {
  const exercises: Array<ExerciseData> = useSelector((state: RootState) => state.gym.exercises);
  const dispatch = useDispatch()
  const currentPage = useSelector((state: RootState) => state.gym.currentPage);
  const countPerPage = 9;

  const indexOfLastExercise = currentPage * countPerPage;
  const indexOfFirstExercise = indexOfLastExercise - countPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(gymSetCurrentPage(page));

    window.scrollTo({top: 1800, behavior: 'smooth'})

  }

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
