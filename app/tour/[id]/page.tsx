import ImageSelector from "@/app/components/ImageSelector";
import { tourDataType, tourList } from "@/data/tourList";
import { Box, Button, Typography } from "@mui/material";
import theme from "../../../theme/theme";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import TourActionSection from "@/app/components/TourActionSection";
export default function page({ params }: { params: { id: string } }) {
  const [tour]: tourDataType[] = tourList.filter(
    (data) => data.id === params.id
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "30px 0px",
          padding: "0 140px",
        }}
      >
        <Box
          sx={{
            background: "url(/logo.png)",
            width: "110px",
            height: "30px",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box sx={{ gap: "5px", display: "flex" }}>
          <Button
            sx={{ textTransform: "none", fontSize: "16px", width: "90px" }}
          >
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
      <Box sx={{ margin: "0 280px" }}>
        <Box sx={{ display: "flex",gap:"25px",margin:"0 auto" }}>
          <ImageSelector data={tour} />
          <Box
            sx={{ width: "430px", display: "flex", flexDirection: "column",justifyContent:"space-between" }}
          >
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "500",
                color: theme.custom.darkMain,
              }}
            >
              {tour.name}
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: theme.custom.gray,
                }}
              >
                {tour.description}
              </Typography>
            </Box>
            <Box
              sx={{
                color: theme.custom.gray,
                fontSize: "17px",
                fontWeight: "500",
              }}
            >
              <FaMapMarkerAlt style={{ marginRight: "4px" }} />
              {tour.location}
            </Box>
            <TourActionSection />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
