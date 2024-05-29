import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Loader from "../Loader";

import { youtubeOptions, fetchData } from "../../utils/fetchData";

const ExerciseVideo = ({ exerciseData }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchDataa = async () => {
      const youtubeData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`,
        youtubeOptions
      );
      if (youtubeData) {
        setVideoData(youtubeData.contents.slice(1, 4));
      }
    };
    fetchDataa();
  }, [exerciseData]);

  return (
    <Box marginTop={"5rem"} padding={"0 1.5rem"}>
      <Typography
        fontSize={"2.2rem"}
        fontWeight={"bold"}
        textTransform={"capitalize"}
      >
        Watch{" "}
        <span style={{ color: "#ff2526", textTransform: "capitalize" }}>
          {exerciseData.name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack flexDirection={"row"} flexWrap={"wrap"} marginTop={"5rem"}>
        {videoData ? (
          videoData.map((item, index) => {
            return (
              <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                style={{
                  width: "350px",
                  margin: "auto",
                  borderTopLeftRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt="Youtube Reccomendation"
                  loading="lazy"
                  target="_blank"
                />
                <Typography
                  fontSize={"1.2rem"}
                  fontWeight={"bold"}
                  mt={"1rem"}
                  color={"#000"}
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize={"0.8rem"} color={"#000"}>
                  {item.video.channelName}
                </Typography>
              </a>
            );
          })
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
