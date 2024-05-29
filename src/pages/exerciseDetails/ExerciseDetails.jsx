import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import {
  Detail,
  ExerciseVideo,
  SimilarExercises,
} from "../../components/Index";

const ExerciseDetails = () => {
  const [exerciseData, setExerciseData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const Data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      if (Data) {
        setExerciseData(Data);
      }
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseData={exerciseData} />
      <ExerciseVideo exerciseData={exerciseData} />
      <SimilarExercises exerciseData={exerciseData} />
    </Box>
  );
};

export default ExerciseDetails;
