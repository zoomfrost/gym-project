import { useEffect, useState} from 'react';
import { Box, Button, Input, Stack, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { HorizontalScrollBar } from './HorizontalScrollBar';
import { useGetExercisesQuery } from '../api/exercisesApi';
import {gymSetBodyPart, gymSetExercises, gymSetSearch} from '../slices/exercisesSlice';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../store/index';


interface FormValues {
    searchTerm: string
}

interface ExerciseData {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string
}



const schema = yup.object({
    searchTerm: yup.string().required('This field is required').min(3, 'Min 3 symbols'),
}).required();


export const SearchExercises = () => {

    const dispatch = useDispatch();

    const {isLoading, error, data} = useGetExercisesQuery('exercises');
    const {data: bodyPartsData} = useGetExercisesQuery('exercises/bodyPartList')

    const bodyPart = useSelector((state: RootState) => state.gym.bodyPart);
    console.log(bodyPart)
    const search = useSelector((state: RootState) => state.gym.search);

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
      });

    const onSubmit: SubmitHandler<FormValues> = data => {
        dispatch(gymSetSearch(data?.searchTerm))
        reset()
    };

    useEffect(() => {
        if (bodyPartsData != null) {
            dispatch(gymSetBodyPart(['all', ...bodyPartsData]))
        }
    }, [bodyPartsData]);   
   
   const handleSearch = () => {
        if (search) {
            const filteredExercises = data.filter((exercise: ExerciseData) => 
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            dispatch(gymSetExercises(filteredExercises))
        }
   }

    

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
                        inputProps={{...register('searchTerm', { required: true, minLength: 2 }), defaultValue: search}}
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
                />
            </Box>
        </Stack>
  )
}
