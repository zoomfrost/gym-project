import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { SubmitHandler, useForm  } from "react-hook-form";

import { useGetDataNinjaApiQuery } from "../../api/exercisesInstrucApi";
import { useDispatch, useSelector } from "react-redux";
import { gymSetCaloriesData } from "../../slices/exercisesSlice";
import * as yup from "yup";
import { RootState } from "../../store";
import { CaloriesStats } from "./CaloriesStats";


interface FormValues {
    activity: string
    weight?: number
    duration?: number
}

const caloriesSchema = yup.object({
    activity: yup.string().required('This field is required').min(2, 'Min 2 symbols'),
    weight: yup.number().typeError('Only numbers are allowed').min(1, 'min 1 symbol'),
    duration: yup.number().typeError('Only numbers are allowed').min(1, 'min 1 symbol')
}).required();

export const SearchCalories = () => {

    const dispatch = useDispatch()
    const caloriesData = useSelector((state: RootState) => state.gym.caloriesData);
    const {activity, weight, duration} = caloriesData

    const {isLoading, data} = useGetDataNinjaApiQuery(`caloriesburned?activity=${activity}&weight=${weight}&duration=${duration}`, {skip: !activity});

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(caloriesSchema)
    });
    
    console.log(data)

    const onSubmit: SubmitHandler<FormValues> = ({activity, weight = 160, duration = 60}) => {
        let requestWeight = weight
        if (weight !== 160) {
            requestWeight = Math.round(weight * 2.2)
        }
        dispatch(gymSetCaloriesData({activity, weight: requestWeight, duration}))
        reset()
    };

  return (
    <>  
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
                Let`s calculate <br /> Your burned calories
            </Typography>
            <Box position='relative' mb='72px'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction='column' spacing={2}>
                        <TextField
                            inputProps={{...register('activity', { required: true, minLength: 3 }), defaultValue: ''}}
                            error={errors.activity?.message != null}
                            label={errors.activity?.message != null ? 'Error' : null}
                            helperText={errors.activity?.message}
                            placeholder='Activity'
                            sx={{
                                input: {
                                    fontWeight: '700', 
                                    border: 'none', 
                                    borderRadius: '4px',
                                },     
                                width: {
                                    lg: '800px', 
                                    xs: '300px'
                                },
                                backgroundColor: '#fff',
                                borderRadius: '40px'
                            }}
                        />
                        <TextField
                            placeholder='Your weight (kg)'
                            inputProps={{...register('weight', { required: false, minLength: 1 }), defaultValue: ''}}
                            error={errors.weight?.message != null}
                            label={errors.weight?.message != null ? 'Error' : null}
                            helperText={errors.weight?.message}
                            sx={{
                                input: {
                                    fontWeight: '700', 
                                    border: 'none', 
                                    borderRadius: '4px'
                                },     
                                width: {
                                    lg: '800px', 
                                    xs: '300px'
                                },
                                backgroundColor: '#fff',
                                borderRadius: '40px'
                            }}
                        /> 
                        <TextField
                            placeholder="Duration (minutes)"
                            inputProps={{...register('duration', { required: false, minLength: 1 }), defaultValue: ''}}
                            error={errors.duration?.message != null}
                            label={errors.duration?.message != null ? 'Error' : null}
                            helperText={errors.duration?.message}
                            sx={{
                                input: {
                                    fontWeight: '700', 
                                    border: 'none', 
                                    borderRadius: '4px'
                                },     
                                width: {
                                    lg: '800px', 
                                    xs: '300px'
                                },
                                backgroundColor: '#fff',
                                borderRadius: '40px'
                            }}
                        /> 
                    </Stack>
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
                            right: '0',
                            marginTop: '15px'
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

            </Box>
        </Stack>
        {data && 
            <CaloriesStats {...data[0]} />
        }
    </>
  )
}
