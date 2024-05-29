import React, { useEffect, useState } from "react";
import { Heading, BodyParts } from "../Index";
import { Box, TextField, Button } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
const SearchExercises = ({ bodyPart, setBodyPart, setSearchedExercise }) => {
  const [search, setSearch] = useState("");
  const [bodyPartsList, setBodyPartsList] = useState([]);

  useEffect(() => {
    const bodyParts = async () => {
      const res = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyPartsList(["All", ...res]);
    };
    bodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises?limit=1000`,
        exerciseOptions
      );

      const searchResults = exercisesData.filter((exercise) => {
        return (
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase())
        );
      });

      setSearch("");
      setSearchedExercise([]);
      setSearchedExercise(searchResults);
    }
  };

  return (
    <Box
      style={{
        padding: "1rem 1.5rem",
      }}
    >
      <Heading children="Awesome Exercises You Should Know" />

      <Box
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
        marginTop={"2rem"}
      >
        <TextField
          placeholder="Search Exercises"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          sx={{
            width: {
              xs: "100%",
              sm: "70%",
              md: "50%",
            },
            height: "50px",
            input: {
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              outline: "none",
              borderRadius: "4px",
              backgroundColor: "#fff",
            },
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          style={{
            backgroundColor: "#FF2526",
            height: "50px",
            fontSize: "0.8rem",
            transition: "all 0.3s linear",
            border: "1px solid #FF2526",
          }}
          className="primary-btn"
        >
          Search
        </Button>
      </Box>

      <Box
        style={{
          padding: "1rem 1.5rem",
          position: "relative",
        }}
      >
        <BodyParts
          data={bodyPartsList}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          bodyPartsList={bodyPartsList}
        />
      </Box>
    </Box>
  );
};

export default SearchExercises;
