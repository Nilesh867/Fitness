import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchdata';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);

    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setequipmentExercises] = useState([]);
    const { id } = useParams();

    const fetchExercisesData = async() => {
        const exerciseDbURL = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDbURL}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbURL}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(`${exerciseDbURL}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setequipmentExercises(equipmentExercisesData);


    }

    useEffect(() => {
        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail = {exerciseDetail} />
            <ExerciseVideos exerciseVideos = {exerciseVideos} name ={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercisesData = {targetMuscleExercises} equipmentExercisesData={equipmentExercises}/>
        </Box>
    )
}

export default ExerciseDetail 