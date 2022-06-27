import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import { Box, Button, Input, Stack, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useFetchExercises} from '../utils/fetchData';
import { HorizontalScrollBar } from './HorizontalScrollBar';
import { ExercisesComponentsProps } from '../types/interfaces';


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


export const SearchExercises = ({selectedBodyPart, setSelectedBodyPart, setExercises}: ExercisesComponentsProps) => {

    const {isLoading, error, data} = useFetchExercises('https://exercisedb.p.rapidapi.com/exercises', 'exercises');
    const {data: bodyPartsData} = useFetchExercises('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', 'bodyPart');


    const [search, setSearch] = useState('');
    const [bodyPart, setBodyPart] = useState(['']);

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema)
      });

    const onSubmit: SubmitHandler<FormValues> = data => {
        setSearch(data?.searchTerm)
        reset()
    };

    useEffect(() => {
        if (bodyPartsData != null) {
            setBodyPart(['all', ...bodyPartsData])
        }
    }, [bodyPartsData]);

    console.log(bodyPart)
    
   
   const handleSearch = () => {
        if (search) {
            const filteredExercises = data.filter((exercise: ExerciseData) => 
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );
            setExercises(filteredExercises)
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
                    selectedBodyPart={selectedBodyPart}
                    setSelectedBodyPart={setSelectedBodyPart}
                />
            </Box>
        </Stack>
  )
}
