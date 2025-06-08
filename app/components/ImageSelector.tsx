"use client";
import { tourDataType } from "@/data/tourList";
import { Box, Typography } from "@mui/material";
import theme from "../../theme/theme";
import React, { useState, useEffect } from "react";

export default function ImageSelector({ data }: { data: tourDataType }) {
  const images = data.image;
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  // Preload all images when component mounts
  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = `/${image}`;
      img.onload = () => handleImageLoad(image);
    });
  }, []);

  function imageHandler(index: number) {
    setCurrentImg(index);
  }

  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imagePath]: true
    }));
  };

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
          position: "relative",
          backgroundColor: theme.custom.gray + "20",
        }}
      >
        {!loadedImages[images[currentImg]] && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: theme.custom.darkMain,
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Loading Image...
          </Box>
        )}
      </Box>
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
              flex: "1",
              borderRadius: "15px",
              cursor: "pointer",
              position: "relative",
              backgroundColor: theme.custom.gray + "20",
            }}
          >
            {!loadedImages[image] && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: theme.custom.darkMain,
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Loading...
              </Box>
            )}
            <Box
              sx={{
                background: `url("/${image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                opacity: loadedImages[image] ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
