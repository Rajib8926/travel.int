import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "./../../theme/theme";
import { CiLocationOn } from "react-icons/ci";
import {
  IoCalendarOutline,
  IoPersonOutline,
  IoSearchOutline,
} from "react-icons/io5";

export default function HomeHero() {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "30px",
        height: "590px",
        borderRadius: "72px",
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
            fontSize: "50px",
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
        <img src="homeHero.png" alt="hero" width={"800px"} />
      </Box>
      <Box
        sx={{
          width: "800px",
          height: "125px",
          background: "white",
          position: "absolute",
          bottom: "-62px",
          transform: "translate(-50%)",
          left: "50%",
          boxShadow: "0 2px 18px #dddddd",
          borderRadius: "32px",
          display: "flex",
          padding: "32px",
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
              <Typography sx={{ fontSize: "24px" }}>Location</Typography>
            </Box>
            <input
              type="text"
              style={{ border: "none", outline: "none", padding: "5px" }}
              placeholder="Where do you want to go?"
            />
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
                <IoCalendarOutline />
              </Box>
              <Typography sx={{ fontSize: "24px" }}>Date</Typography>
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
              <Typography sx={{ fontSize: "24px" }}>Person</Typography>
            </Box>
          </Box>
          <Button
            sx={{
              width: "92px",
              height: "66px",
              background: theme.palette.primary.main,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IoSearchOutline fontSize={"28px"} color="white" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
