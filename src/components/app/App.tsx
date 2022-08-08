import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import '../../App.scss';
import { Navbar } from '../Navbar';
import { HomePage } from '../../pages/HomePage';
import { ExerciseDetailPage } from '../../pages/ExerciseDetailPage';
import { Footer } from '../Footer';
import { CaloriesPage } from '../../pages/CaloriesPage';



export const App = () => {
  return (
    <>
      <Box width='400px' sx={{width: {xl: '1488px'}, p: {xs: '10px'}}} m='auto'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/exercise/:id' element={<ExerciseDetailPage/>} />
            <Route path='/calories' element={<CaloriesPage/>} />
        </Routes>
      </Box>
      <Footer />
    </>
  )
}

