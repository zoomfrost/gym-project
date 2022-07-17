import { Stack, Button, Typography } from "@mui/material";

import bodyPartImage from '../../assets/icons/body-part.png';
import targetImage from '../../assets/icons/target.png';
import equipmentImage from '../../assets/icons/equipment.png';
import {exerciseDetailProps } from "../../types/interfaces";




export const Detail = ({exerciseDetail}: exerciseDetailProps) => {
  
  const extraDetail = [
    {
      icon: bodyPartImage,
      name: exerciseDetail.bodyPart
    },
    {
      icon: targetImage,
      name: exerciseDetail.target
    },
    {
      icon: equipmentImage,
      name: exerciseDetail.equipment
    }
  ]
  return (
    <Stack 
      gap='60px' 
      sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}
    >
      <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name} loading='lazy' className="detail__image" />
      <Stack
        sx={{gap: {lg: '35px'}, xs: '20px'}}
      >
        <Typography variant='h3'>
          {exerciseDetail.name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you healthy. <br />
          {exerciseDetail.name} is one of the best exercises to target your {exerciseDetail.target}.
          It will help you to improve your physical form
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px'
              }}
            >
              <img src={item.icon} alt={item.name} style={{width: '50px', height: '50px'}} />
            </Button>
            <Typography textTransform='capitalize' variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
