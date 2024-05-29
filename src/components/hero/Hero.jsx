import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import BannerImage from "../../assets/images/banner.png";
const Hero = () => {
  return (
    <>
      <Box
        padding="0 1.5rem"
        sx={{
          display: "flex",
          gap: "3rem",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
          alignItems: {
            xs: "start",
            md: "center",
          },
        }}
      >
        <Stack
          sx={{
            padding: {
              xs: "0",
              md: "0 2rem",
            },
            gap: {
              xs: "0.8rem",
              md: "1.5rem",
            },
          }}
        >
          <Typography bgcolor="#" fontSize="1.4rem" color="#FF2625">
            Fitness Club
          </Typography>
          <Typography
            fontWeight="600"
            lineHeight={1.3}
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "3.5rem",
              },
            }}
          >
            Sweat, Smile <br></br> And Repeat{" "}
          </Typography>
          <Typography>
            Check out the most effective exercises personalized to you.
          </Typography>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#FF2625",
              width: "fit-content",
              fontSize: "0.8rem",
              padding: "0.8rem 1.2rem",
              marginTop: "0.8rem",
            }}
          >
            Explore Exercises
          </Button>
        </Stack>
        <img
          src={BannerImage}
          alt="Banner"
          loading="lazy"
          id="banner-image"
          style={{
            width: "48%",
            height: "80vh",
            objectFit: "cover",
            objectPosition: "top",
            alignSelf: "center",
          }}
        />
      </Box>
      <Typography
        fontSize="10rem"
        fontWeight="bold"
        color="#FF2526"
        style={{ opacity: 0.2 }}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        Exercise
      </Typography>
    </>
  );
};

export default Hero;
