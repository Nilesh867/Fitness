import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

import Loader from './Loader';
import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({targetMuscleExercisesData, equipmentExercisesData}) => {
    return(
        <Box sx ={{ mt: {lg: '100px', xs: '0' }}}>
            <Typography variant="h4" p ="20px"> <b>Exercises that target the same muscle group </b></Typography>
            <Stack direction = "row" sx ={{ p: '2', position: 'relative', mb:'100px', mt:'40px'}}>
                {targetMuscleExercisesData.length !== 0 ? <HorizontalScrollbar data = {targetMuscleExercisesData} />:<Loader/>}
            </Stack>

            <Typography variant="h4" p ="20px"> <b>Exercises that use the same Equipment </b></Typography>
            <Stack direction = "row" sx ={{ p: '2', position: 'relative', mb:'30px', mt:'40px'}}>
                {equipmentExercisesData.length !== 0 ? <HorizontalScrollbar data = {equipmentExercisesData} />:<Loader/>}
            </Stack>
        </Box>  
    )
}

export default SimilarExercises