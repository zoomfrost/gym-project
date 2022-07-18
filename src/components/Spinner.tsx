import { Stack } from "@mui/material";
import {BallTriangle } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        width='100%'
        height='300px'
        
    >
        <BallTriangle color='red' />
    </Stack>
  )
}
