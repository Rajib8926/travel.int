import { Box, Button, Typography } from "@mui/material";
import React from "react";
const popularSearchList = [
  "Eiffel tower",
  "Bali",
  "Eiffel tower",
  "Egypt",
  "Turkey",
  "The Grand Canyon",
  "Cappadocia",
  "UAE",
  "The Grand Canyon",
  "London",
  "USA",
  "Temple Japan",
];
export default function PopularSearch() {
  return (
    <Box sx={{ padding: { md: "80px 50px", xs: "70px 10px" } }}>
      <Typography
        sx={{
          fontSize: { md: "30px", sm: "26px", xs: "24px" },

          textAlign: "center",
          color: "#313131",
        }}
      >
        Popular Search
      </Typography>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          gap: { md: "25px", xs: "10px" },
        }}
      >
        {popularSearchList.map((data, index) => (
          <Button
            key={index}
            sx={{
              border: "1px solid #AEAEAE",
              padding: "3px 15px",
              fontSize: { sm: "18px", xs: "15px" },
              color: "#AEAEAE",
              textTransform: "none",
              fontWeight: "400",
              borderRadius: "15px",
            }}
          >
            {data}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
