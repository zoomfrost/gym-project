import { Stack, Typography } from "@mui/material";

import { HorizontalBodyPartProps } from "../types/interfaces";

import icon from '../assets/icons/gym.png';


export const BodyPart = ({data, selectedBodyPart, setSelectedBodyPart}: HorizontalBodyPartProps<string>) => {
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
        onClick={() => setSelectedBodyPart(data)}
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
