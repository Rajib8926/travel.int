import { Box, Button } from "@mui/material";
import theme from "./../../theme/theme";
import React from "react";

export default function Navbar() {
  function scrollInto(id: string) {
    const element = document.getElementById(id) as HTMLInputElement;
    element.scrollIntoView({ behavior: "smooth" });
  }
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
        <Box
          onClick={() => {
            scrollInto("home");
          }}
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": { color: theme.custom.darkMain },
          }}
        >
          Home
        </Box>
        <Box
          onClick={() => {
            scrollInto("category");
          }}
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": { color: theme.custom.darkMain },
          }}
        >
          Category
        </Box>
        <Box
          onClick={() => {
            scrollInto("aboutUs");
          }}
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": { color: theme.custom.darkMain },
          }}
        >
          About us
        </Box>
        <Box
          onClick={() => {
            scrollInto("tours");
          }}
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": { color: theme.custom.darkMain },
          }}
        >
          Tour
        </Box>
        <Box
          onClick={() => {
            scrollInto("contact");
          }}
          sx={{
            cursor: "pointer",
            transition: "color 0.3s ease",
            "&:hover": { color: theme.custom.darkMain },
          }}
        >
          Contact
        </Box>
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
