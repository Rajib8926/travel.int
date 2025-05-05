"use client";
import { tourDataType } from "@/data/tourList";
import { Box } from "@mui/material";
import theme from "../../theme/theme";
import React, { useState } from "react";

export default function ImageSelector({ data }: { data: tourDataType }) {
  const images = data.image;
  const [currentImg, setCurrentImg] = useState<number>(0);
  console.log(images[currentImg]);
  function imageHandler(index: number) {
    setCurrentImg(index);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",

        width: { lg: "645px", md: "510px", xs: "100%" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { lg: "420px", md: "320px", sm: "330px", xs: "270px" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url("/${images[currentImg]}")`,
          borderRadius: "25px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <Box
            onClick={() => imageHandler(index)}
            key={index}
            sx={{
              padding: "5px",
              border:
                index === currentImg
                  ? `2px solid ${theme.palette.primary.main}`
                  : "none",
              height: { lg: "155px", sm: "140px", xs: "110px" },
              // width: "215px",
              flex: "1",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                background: `url("/${image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            ></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
