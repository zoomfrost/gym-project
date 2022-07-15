import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import './App.scss';
import { Navbar } from '../Navbar';
import { HomePage } from '../../pages/HomePage';
import { ExerciseDetailPage } from '../../pages/ExerciseDetailPage';
import { Footer } from '../Footer';



export const App = () => {
  return (
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/exercise/:id' element={<ExerciseDetailPage/>} />
      </Routes>
      <Footer />
    </Box>
  )
}

