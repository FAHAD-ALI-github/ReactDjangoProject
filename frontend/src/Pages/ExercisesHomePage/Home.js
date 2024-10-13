import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../../components/Exercises/ExercisesComponents/Exercises';
import SearchExercises from '../../components/Exercises/ExercisesComponents/SearchExercises';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
    <div className="blur page-blur-1"></div>
    <div className="blur page-blur-2"></div>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;