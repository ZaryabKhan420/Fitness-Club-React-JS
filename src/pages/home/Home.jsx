import React, { useEffect, useState } from "react";
import { Hero, Exercises, SearchExercises } from "../../components/Index";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("All");
  const [searchedExercise, setSearchedExercise] = useState([]);
  useEffect(() => {
    if (bodyPart === "All") {
      const exerciseData = async () => {
        try {
          const data = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises?limit=1000`,
            exerciseOptions
          );
          if (data) {
            setSearchedExercise([]);
            setSearchedExercise(data);
          }
        } catch (error) {
          throw error;
        }
      };
      exerciseData();
    } else {
      const exerciseData = async () => {
        try {
          const data = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`,
            exerciseOptions
          );
          if (data) {
            setSearchedExercise([]);
            setSearchedExercise(data);
          }
        } catch (error) {
          throw error;
        }
      };
      exerciseData();
    }
  }, []);

  useEffect(() => {
    if (bodyPart === "All") {
      const exerciseData = async () => {
        try {
          const data = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises?limit=1000`,
            exerciseOptions
          );
          if (data) {
            setSearchedExercise([]);
            setSearchedExercise(data);
          }
        } catch (error) {
          throw error;
        }
      };
      exerciseData();
    } else {
      const exerciseData = async () => {
        try {
          const data = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`,
            exerciseOptions
          );
          if (data) {
            setSearchedExercise([]);
            setSearchedExercise(data);
          }
        } catch (error) {
          throw error;
        }
      };
      exerciseData();
    }
  }, [bodyPart]);

  return (
    <div>
      <Hero />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setSearchedExercise={setSearchedExercise}
      />
      <Exercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setSearchedExercise={setSearchedExercise}
        searchedExercise={searchedExercise}
      />
    </div>
  );
};

export default Home;
