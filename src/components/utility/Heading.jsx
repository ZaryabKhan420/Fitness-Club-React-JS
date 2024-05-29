import React from "react";
import { Typography } from "@mui/material";
const Heading = ({ children, className = "", ...props }) => {
  return (
    <Typography
      className={`${className}`}
      fontWeight="600"
      textAlign="center"
      margin="auto"
      {...props}
      sx={{
        marginTop: {
          xs: "2rem",
          md: "0",
        },
        width: {
          xs: "100%",
          sm: "80%",
          md: "50%",
        },
        fontSize: {
          xs: "1.5rem",
          md: "2.5rem",
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
