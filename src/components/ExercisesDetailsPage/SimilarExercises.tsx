import { Box, Stack, Typography } from '@mui/material';
import { useGetExercisesQuery } from '../../api/exercisesApi'
import { useGetDataNinjaApiQuery } from '../../api/exercisesInstrucApi';
import { HorizontalScrollBar } from '../HorizontalScrollBar';
import { Spinner } from '../Spinner';


interface SimilarProps {
  exerciseEquipment: string,
  exerciseTarget: string
}

export const SimilarExercises = ({exerciseEquipment, exerciseTarget}: SimilarProps) => {

  function checkTarget(target: string): string {
    switch(target) {
      case 'abs':
        return 'abdominals';
      case 'pectorals' || 'delts':
        return 'chest';
      case 'quads':
        return 'quadriceps';
      case 'spine': 
        return 'middle_back';
      case 'levator scapulae':
        return 'neck';
      case 'cardiovascular system' || 'serratus anterior' || 'upper back':
        return 'middle_back'
      default:
        return target
    }
  };

  const muscleGroup = checkTarget(exerciseTarget)

  // const {isLoading: equipmentLoading, data: equipmentData} = useGetExercisesQuery(`exercises/equipment/${exerciseEquipment}`);
  const {isLoading: similarTargetLoading, data: similarTargetData} = useGetDataNinjaApiQuery(`exercises?muscle=${muscleGroup}`);


  if(false || similarTargetLoading) return <Spinner />

  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography mb={5} variant='h4'>
      Try these <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Exercises</span>
      </Typography>
      <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {similarTargetData.length && <HorizontalScrollBar child='instructions' data={similarTargetData}/>}
      </Stack>
      <Typography mt={3} mb={5} variant='h4'>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      {/* <Stack direction='row' sx={{p: '2', position: 'relative'}}>
        {equipmentData.length && <HorizontalScrollBar child='exercises' data={equipmentData}/>}
      </Stack> */}
    </Box>
  )
}
