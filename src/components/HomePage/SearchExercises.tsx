import { useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { HorizontalScrollBar } from '../HorizontalScrollBar';
import { useGetExercisesQuery } from '../../api/exercisesApi';
import {gymSetBodyPart, gymSetExercises} from '../../slices/exercisesSlice';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../../store/index';
import { ExerciseData, ExercisesProps } from '../../types/interfaces';


interface FormValues {
    searchTerm: string
}


const schema = yup.object({
    searchTerm: yup.string().required('This field is required').min(3, 'Min 3 symbols'),
}).required();


export const SearchExercises = ({data}: ExercisesProps) => {

    const dispatch = useDispatch();

    const {data: bodyPartsData} = useGetExercisesQuery('exercises/bodyPartList');

    const bodyPart = useSelector((state: RootState) => state.gym.bodyPart);
    

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
      });

    const onSubmit: SubmitHandler<FormValues> = ({searchTerm}) => {
        if (searchTerm) {
            const filteredExercises = data.filter((exercise: ExerciseData) => 
                exercise.name.toLowerCase().includes(searchTerm)
                || exercise.target.toLowerCase().includes(searchTerm)
                || exercise.equipment.toLowerCase().includes(searchTerm)
                || exercise.bodyPart.toLowerCase().includes(searchTerm)
            );
            dispatch(gymSetExercises(filteredExercises))
        }
        reset()
    };

    useEffect(() => {
        if (bodyPartsData != null) {
            dispatch(gymSetBodyPart(['all', ...bodyPartsData]))
        }
    }, [bodyPartsData]);   
   

    

    return (
        <Stack 
            alignItems='center' 
            mt='37px' 
            justifyContent='center' 
            p='20px'
        >
            <Typography 
                fontWeight={700} 
                sx={{
                    fontSize: {lg: '44px', xs: '30px'}
                    }} 
                mb='50px' 
                textAlign='center'
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        sx={{
                            input: {
                                fontWeight: '700', 
                                border: 'none', 
                                borderRadius: '4px'
                            },     
                            width: {
                                lg: '800px', 
                                xs: '350px'
                            },
                            backgroundColor: '#fff',
                            borderRadius: '40px'
                        }}
                        inputProps={{...register('searchTerm', { required: true, minLength: 2 }), defaultValue: ''}}
                        placeholder='Search Exercises'
                        error={errors.searchTerm?.message != null}
                        label={errors.searchTerm?.message != null ? 'Error' : null}
                        helperText={errors.searchTerm?.message}
                    />
                    <Button 
                        className="search__btn"
                        sx={{
                            backgroundColor: '#FF2625',
                            color: '#fff',
                            textTransform: 'none',
                            width: {lg: '160px', xs: '80px'},
                            fontSize: {lg: '20px', xs: '14px'},
                            height: '56px',
                            position: 'absolute',
                            right: '0'
                        }}
                        type='submit'
                    >
                        Search
                    </Button>
                </form>
            </Box>
            <Box
                sx={{position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
                <HorizontalScrollBar
                    data={bodyPart}
                    child='bodyPart'
                />
            </Box>
        </Stack>
  )
}
