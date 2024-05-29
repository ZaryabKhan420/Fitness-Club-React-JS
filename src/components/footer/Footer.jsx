import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="20px"
      direction={"row"}
      justifyContent={"center"}
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "40px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by Zaryab
    </Typography>
  </Box>
);

export default Footer;
