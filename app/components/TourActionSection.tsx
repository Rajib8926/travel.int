import { Box, Button } from "@mui/material";
import React from "react";

export default function TourActionSection() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          boxShadow: "-1px 1px 13px 6px #e7e6e6",
          borderRadius: "20px",
          marginBottom: "50px",
        }}
      ></Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: "55px",
          fontWeight: "400",
          fontSize: "19px",
          borderRadius: "10px",
          boxShadow:"none"
        }}
      >
        Make My Tour
      </Button>
    </Box>
  );
}
