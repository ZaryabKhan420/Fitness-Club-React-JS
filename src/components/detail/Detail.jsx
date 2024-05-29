import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

import bodyPartImage from "../../assets/icons/body-part.png";
import equipmentImage from "../../assets/icons/equipment.png";
import targetImage from "../../assets/icons/target.png";
import Loader from "../Loader";
const Detail = ({ exerciseData }) => {
  const { name, target, gifUrl, equipment, bodyPart } = exerciseData;

  const extraDetails = [
    {
      url: bodyPartImage,
      info: bodyPart,
    },
    {
      url: targetImage,
      info: target,
    },
    {
      url: equipmentImage,
      info: equipment,
    },
  ];

  return (
    <Box margin={"1rem 0"} padding={"3rem"}>
      <Stack
        flexDirection={{ xs: "column", lg: "row" }}
        gap={"5rem"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {exerciseData ? (
          <img src={gifUrl} alt="Exercise" loading="lazy" width={"100%"} />
        ) : (
          <Loader />
        )}

        <Stack direction={"column"} gap={"1.5rem"}>
          <Typography
            fontSize={{ xs: "2rem", md: "3rem" }}
            fontWeight={"bold"}
            textTransform={"capitalize"}
          >
            {name}
          </Typography>
          <Typography
            fontSize={{ xs: "0.9rem", md: "1rem" }}
            mb={{ xs: "1rem", md: "2rem" }}
            lineHeight={"1.8rem"}
          >
            Exercises keep you strong. {name} {` `}
            is one of the best exercises to target your {target}. It will help
            you improve your mood and gain energy.
          </Typography>

          <Stack direction={"column"} gap={"3rem"}>
            {extraDetails.map((elem, index) => {
              return (
                <Stack
                  direction={"row"}
                  gap={"3rem"}
                  alignItems={"center"}
                  key={index}
                >
                  <img
                    src={elem.url}
                    alt={elem.info}
                    width={"35rem"}
                    loading="lazy"
                  />
                  <Typography
                    fontSize={{ xs: "1.1rem", md: "1.3rem" }}
                    textTransform={"capitalize"}
                  >
                    {elem.info}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Detail;
