import { Stack, Typography } from "@mui/material";

import { HorizontalBodyPartProps } from "../types/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { gymSetSelectedBodyPart } from "../slices/exercisesSlice";

import icon from '../assets/icons/gym.png';
import { RootState } from "../store";


export const BodyPart = ({data}: HorizontalBodyPartProps<string>) => {
    const dispatch = useDispatch()
    const selectedBodyPart = useSelector((state: RootState) => state.gym.selectedBodyPart);
    
  return (
    <Stack
        component='button'
        alignItems='center'
        justifyContent='center'
        className="bodyPart__card"
        sx={{
            backgroundColor: '#fff',
            border: 'none',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px',
            borderTop: selectedBodyPart ===  data ? '4px solid #ff2625': ''
        }}
        onClick={() => dispatch(gymSetSelectedBodyPart(data))}
    >
        <img 
            src={icon} 
            alt="dumbbell" 
            style={{width: '40px', height: '40px'}} 
        />
        <Typography 
            fontSize='24px'
            fontWeight='bold'
            color='#3A1212'
            textTransform='capitalize'
        >
            {data}
        </Typography>
    </Stack>
  )
}
