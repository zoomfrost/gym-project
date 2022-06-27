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
        sx={
            selectedBodyPart ===  data ? {
                borderTop: '4px solid #ff2625',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px'
            } : null
        }
    >
        <img 
            src={icon} 
            alt="dumbbell" 
            style={{width: '40px', height: '40px'}} 
        />
    </Stack>
  )
}
