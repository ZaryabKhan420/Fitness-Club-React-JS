import React from "react";
import Stack from "@mui/material/Stack";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="end"
        sx={{
          gap: { sm: "6rem", xs: "3rem" },
        }}
        style={{ padding: "1rem 1.5rem" }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt=" Logo"
            loading="lazy"
            style={{ width: "48px", height: "48px", margin: "0 20px" }}
          />
        </Link>
        <Stack direction="row" sx={{ gap: { sm: "2rem", xs: "1rem" } }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              fontSize: "1.2rem",
              borderBottom: "3px solid #FF2526",
            }}
          >
            Home
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              color: "#3A1212",
            }}
          >
            Exercises
          </Link>
        </Stack>
      </Stack>
    </div>
  );
};

export default Header;
