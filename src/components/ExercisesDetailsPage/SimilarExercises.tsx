import { Box, Stack, Typography } from '@mui/material';
import { useGetExercisesQuery } from '../../api/exercisesApi'
import { HorizontalScrollBar } from '../HorizontalScrollBar';
import { Spinner } from '../Spinner';


interface SimilarProps {
  exerciseTarget: string
}

export const SimilarExercises = ({exerciseTarget}: SimilarProps) => {

  const {isLoading, data} = useGetExercisesQuery(`exercises/target/${exerciseTarget}`);

  if(isLoading) return <Spinner />

  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography mb={5} variant='h4'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {data.length && <HorizontalScrollBar data={data}/>}
      </Stack>
    </Box>
  )
}
