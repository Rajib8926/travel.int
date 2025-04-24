"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import "./style.css";
const sliderList = [
  { name: "Beach", image: "beach.png" },
  { name: "Mountain", image: "mountain.png" },
  { name: "Temple", image: "temple.png" },
  { name: "Town", image: "town.png" },
  { name: "Forest", image: "forest.png" },
  { name: "Desert", image: "desert.png" },
  { name: "City", image: "city.png" },
];

function Responsive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        // height: "400px",
        background: "#F9FBFF",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "30px 70px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginBottom: "30px", marginLeft: "70px" }}>
          <Typography
            sx={{
              fontSize: "32px",
              position: "relative",
              color: "#313131",
              "&::after": {
                content: '""',
                position: "absolute",
                borderRadius: "2px",
                width: "40px",
                height: "3px",
                background: "#313131",
                zIndex: "4",
                top: "50%",
                left: "-60px",
                transform: "translateY(-50%)",
              },
            }}
          >
            Category
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "#AEAEAE" }}>
            You don't have to look for your tour for a long <br /> time. We have
            grouped them by category
          </Typography>
        </Box>
      </Box>
      <Box className="slider-container">
        <Slider {...settings}>
          {sliderList.map((data, index) => (
            <Box
              key={index}
              sx={{
                height: "240px",
              }}
            >
              <img
                src={data.image}
                alt=""
                style={{ margin: "0 auto", cursor: "pointer" }}
              />

              <Typography textAlign={"center"} fontWeight={"500"}>
                {data.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Responsive;
