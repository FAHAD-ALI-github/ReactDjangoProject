import React from 'react';
import { Box } from '@mui/material';


import './exercises.css';
import Home from '../../Pages/ExercisesHomePage/Home';

const Exercises = () => {
  return (
    <div className="Exercises">
<Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Home/>
  </Box>
    </div>
    
  )
}

export default Exercises

