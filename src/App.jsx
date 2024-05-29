import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Header, Footer } from "./components/Index";
import Box from "@mui/material/Box";
function App() {
  return (
    <Box sx={{ width: { xl: "1448px", lg: "1240px" } }} m="auto">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
