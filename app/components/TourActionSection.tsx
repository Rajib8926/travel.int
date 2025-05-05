"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoCalendarOutline, IoPersonOutline } from "react-icons/io5";
import theme from "../../theme/theme";
import { GoPlus } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
export default function TourActionSection() {
  const [personCount, setPersonCount] = useState(0);
  function personCountHandler(action: "+" | "-") {
    if (action === "+" && personCount < 25) {
      setPersonCount((data) => data + 1);
    } else if (action === "-" && personCount > 0) {
      setPersonCount((data) => data - 1);
    }
  }
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          boxShadow: "-1px 1px 13px 6px #e7e6e6",
          borderRadius: "20px",
          marginBottom: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: { lg: "30px", xs: "20px" },
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
            <Typography sx={{ fontSize: { lg: "22px", xs: "19px" } }}>
              Date
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ height: "100%", width: "1px", background: theme.custom.gray }}
        ></Box>
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
            <Typography sx={{ fontSize: { lg: "22px", xs: "19px" } }}>
              Person
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              onClick={() => personCountHandler("-")}
              sx={{ cursor: "pointer" }}
            >
              <HiMinusSmall fontSize={"22"} color="#df0202" />
            </Box>
            <Typography
              sx={{
                fontSize: personCount === 0 ? "12px" : "16px",
                color: theme.custom.gray,
              }}
            >
              {personCount === 0 ? "Add people" : personCount}
            </Typography>
            <Box
              onClick={() => personCountHandler("+")}
              sx={{ cursor: "pointer" }}
            >
              <GoPlus fontSize={"22"} color="#00b100" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: "55px",
          fontWeight: "400",
          fontSize: { sm: "19px",xs:"16px" },
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        Make My Tour
      </Button>
    </Box>
  );
}
