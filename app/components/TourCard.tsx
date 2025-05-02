"use client";
import { tourDataType } from "@/data/tourList";
import { Box, Card, CardActionArea, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { textShot } from "../utils/textShot";
const MotionCade = motion(Card);
interface tourDataPropType {
  tourData: tourDataType;
}
export default function TourCard({ tourData }: tourDataPropType) {
  const router = useRouter();
  const theme = useTheme();
  return (
    <MotionCade
      onClick={() => {
        router.push(`/tour/${tourData.id}`);
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      sx={{
        width: "281px",
        height: "350px",
        borderRadius: "20px",
        boxShadow: "0px 1px 16px 3px #e4e4e4",
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <img
          src={`./tourImage/${tourData.name}.png`}
          alt={tourData.name}
          width={"100%"}
        />
        <Box
          sx={{
            padding: "0px 20px 20px",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: theme.custom.darkMain,
                fontSize: "18px",
                fontWeight: "600",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {tourData.name}
            </Typography>
            <Typography sx={{ color: theme.custom.gray, fontSize: "14px" }}>
              {tourData.about}
            </Typography>
          </Box>
          <Box
            sx={{
              color: theme.custom.gray,
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "600" }}>
              <FaMapMarkerAlt />
              {textShot(tourData.location, 14)}
            </Typography>
            <Typography
              sx={{ fontWeight: "600", display: "flex", alignItems: "center" }}
            >
              <BiSolidDollarCircle fontSize={"20px"} />
              {tourData.price}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </MotionCade>
  );
}
