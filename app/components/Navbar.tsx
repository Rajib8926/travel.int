import { Box, Button } from "@mui/material";
import theme from "./../../theme/theme";
import React from "react";

export default function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0 140px",
        height: "100px",

        justifyContent: "space-between",
      }}
    >
      <Box>
        <img src={"logo.png"} alt="Travel.int" />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "6rem",
          justifyContent: "space-around",

          fontWeight: "400",
          fontSize: "18px",
          color: "gray",
        }}
      >
        <Box>Home</Box>
        <Box>Category</Box>
        <Box>About us</Box>
        <Box>Tour</Box>
        <Box>Contact</Box>
      </Box>

      <Box sx={{ gap: "5px", display: "flex" }}>
        <Button sx={{ textTransform: "none", fontSize: "16px", width: "90px" }}>
          Log in
        </Button>
        <Button
          sx={{
            textTransform: "none",
            background: theme.palette.primary.main,
            color: "white",
            fontSize: "16px",
            width: "90px",
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
