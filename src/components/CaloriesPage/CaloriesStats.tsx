import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { SearchCaloriesData } from '../../types/interfaces';


export const CaloriesStats = ({name, calories_per_hour, duration_minutes, total_calories}: SearchCaloriesData) => {
  
  const rows: SearchCaloriesData[] = [
    {name, calories_per_hour, duration_minutes, total_calories}
  ]


  return (
    <Stack
      alignItems='center' 
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
            Results Of Your Work
        </Typography>
        <Box sx={{}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Calories per hour</TableCell>
                <TableCell align="right">Duration (minutes)</TableCell>
                <TableCell align="right">Total calories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories_per_hour}</TableCell>
                  <TableCell align="right">{row.duration_minutes}</TableCell>
                  <TableCell align="right">{row.total_calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
    </Stack>
  )
}
