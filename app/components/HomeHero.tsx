"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "./../../theme/theme";
import { CiLocationOn } from "react-icons/ci";
import {
  IoCalendarOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";
import HeroImage from "./heroImage/HeroImage";
export default function HomeHero() {
  
  return (
    <Box
      sx={{
        width: "100%",
        marginTop:{ sm:"30px",xs:"15px"},
        height: { lg: "590px", md: "490px", xs: "395px" },
        borderRadius: { md: "72px", sm: "50px", xs: "30px" },
        padding: "39px",
        position: "relative",
        background: "linear-gradient( #ffcaca81, #B5D2FF 70%)",
        boxShadow: "0 2px 7px #dddddd",
        marginBottom: "40px",
      }}
    >
      <Box>
        <Typography
          sx={{ color: theme.palette.primary.main, textAlign: "center" }}
        >
          Travel.int is all you need
        </Typography>
        <Typography
          sx={{
            color: "#313131",
            fontSize: { md: "50px", xs: "35px" },
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Explore The World
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          transform: "translate(-50%)",
          left: "50%",
        }}
      >
        <HeroImage />
      </Box>
      <Box
        sx={{
          width: { lg: "800px", md: "650px", sm: "85%", xs: "90%" },
          height: { lg: "125px", md: "110px", sm: "95px" },
          background: "white",
          position: "absolute",
          bottom: "-62px",
          transform: "translate(-50%)",
          left: "50%",
          boxShadow: "0 2px 18px #dddddd",
          borderRadius: { md: "32px", xs: "20px" },
          display: "flex",
          padding: { md: "32px", xs: "20px" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Box
                sx={{
                  background: "#D6DFFF",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CiLocationOn />
              </Box>
              <Typography
                sx={{ fontSize: { lg: "24px", md: "20px", xs: "17px" } }}
              >
                Location
              </Typography>
            </Box>
            <input
              type="text"
              style={{ border: "none", outline: "none", padding: "5px" }}
              placeholder="Where do you want to go?"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: "1",
              justifyContent: { xs: "flex-start", sm: "space-around" },
              flexDirection: { sm: "row", xs: "column" },
              gap: "5px",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Box
                  sx={{
                    background: "#D6DFFF",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoCalendarOutline />
                </Box>
                <Typography
                  sx={{ fontSize: { lg: "24px", md: "20px", xs: "17px" } }}
                >
                  Date
                </Typography>
              </Box>
              
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Box
                  sx={{
                    background: "#D6DFFF",
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoPersonOutline />
                </Box>
                <Typography
                  sx={{ fontSize: { lg: "24px", md: "20px", xs: "17px" } }}
                >
                  Person
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            sx={{
              width: { md: "92px", xs: "70px" },
              height: { md: "66px", xs: "50px" },
              background: theme.palette.primary.main,
              borderRadius: "10px",
              display: { sm: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoSearchOutline fontSize={"24px"} color="white" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
