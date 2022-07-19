import { Box, Button, Stack, Typography } from "@mui/material"
import { SimilarTargetData } from "../types/interfaces"

interface SimilarTargetProps {
    data: SimilarTargetData
}

export const SimilarTarget = ({data}: SimilarTargetProps) => {
  return (
    <Box className='exercise__card exercise__card-similar'>
        <Typography variant="overline" sx={{p: '10px', fontSize: '9px', minHeight: '310px'}}>
            {data.instructions.slice(0, 750)}...
        </Typography>
        <Stack direction='row'>
            <Button
                sx={{ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}
            >
                {data.muscle}
            </Button>
            <Button
                sx={{ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}
            >
                {data.type}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize' fontSize='22px'>
            {data.name}
        </Typography>
    </Box>
  )
}
