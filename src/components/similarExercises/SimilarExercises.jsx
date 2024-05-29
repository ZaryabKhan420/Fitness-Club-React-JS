import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ExerciseCard, BodyParts } from "../Index";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import Loader from "../Loader";

const SimilarExercises = ({ exerciseData }) => {
  const { target, equipment } = exerciseData;

  const [targetData, setTargetData] = useState({});
  const [equipmentData, setEquipmentData] = useState({});

  useEffect(() => {
    const fetchExerciseData = async () => {
      const equipmentResponse = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
        exerciseOptions
      );
      if (equipmentResponse) {
        setEquipmentData(equipmentResponse);
      }

      const targetResponse = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
        exerciseOptions
      );
      if (targetResponse) {
        setTargetData(targetResponse);
      }
    };
    fetchExerciseData();
  }, [exerciseData]);

  return (
    <Box padding={"0 1.5rem"}>
      <Typography
        fontSize={"2.2rem"}
        fontWeight={"bold"}
        textTransform={"capitalize"}
      >
        Similar{" "}
        <span style={{ color: "#ff2526", textTransform: "capitalize" }}>
          target Muscle
        </span>{" "}
        exercise
      </Typography>

      <Stack sx={{ p: "2", position: "relative" }}>
        {targetData.length ? <BodyParts data={targetData} /> : <Loader />}
      </Stack>

      <Typography
        fontSize={"2.2rem"}
        fontWeight={"bold"}
        textTransform={"capitalize"}
      >
        Similar{" "}
        <span style={{ color: "#ff2526", textTransform: "capitalize" }}>
          equipment
        </span>{" "}
        exercise
      </Typography>

      <Stack sx={{ p: "2", position: "relative" }}>
        {equipmentData.length ? <BodyParts data={equipmentData} /> : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
