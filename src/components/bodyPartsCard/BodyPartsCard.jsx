import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import GymImage from "../../assets/icons/gym.png";
const BodyPartsCard = ({ value, bodyPart, setBodyPart }) => {
  return (
    <Box>
      <Stack
        type="button"
        bgcolor="#fff"
        marginInline={3}
        textAlign="center"
        alignItems="center"
        justifyContent="Center"
        height="15rem"
        width="15rem"
        gap="2rem"
        className="bodytype-card"
        onClick={() => {
          setBodyPart(value);
        }}
        style={{ transition: "0.3s all linear" }}
        sx={
          value === bodyPart
            ? {
                borderTop: "4px solid #ff2526",
                cursor: "pointer",
              }
            : {
                borderTop: "4px solid #fff",
                cursor: "pointer",
              }
        }
      >
        <img
          src={GymImage}
          alt="Gym"
          loading="lazy"
          style={{ width: "40px", transition: "0.3s all linear" }}
          className="bodytype-card-image"
        />
        <Typography
          fontSize={"1rem"}
          textTransform={"capitalize"}
          fontWeight="bold"
          color="#3A1212"
        >
          {value}
        </Typography>
      </Stack>
    </Box>
  );
};

export default BodyPartsCard;
