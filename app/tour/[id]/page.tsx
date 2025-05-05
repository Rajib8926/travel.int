import ImageSelector from "@/app/components/ImageSelector";
import { tourDataType, tourList } from "@/data/tourList";
import { Box, Button, Grid, Typography } from "@mui/material";
import theme from "../../../theme/theme";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import TourActionSection from "@/app/components/TourActionSection";
import TourCard from "@/app/components/TourCard";
import Footer from "@/app/components/Footer";
import Logo from "@/app/components/Logo";
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
          padding: { lg: "0 140px", sm: "0 50px", xs: "0 20px" },
        }}
      >
        <Logo />
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
      <Box
        sx={{
          margin: {
            xxl: "0 280px",
            lg: "0 100px",
            md: "0 10px",
            sm: "0 5rem",
            xs: "0 10px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { lg: "30px", xs: "15px" },
            justifyContent: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <ImageSelector data={tour} />
          <Box
            sx={{
              maxWidth: { xl: "430px", md: "340px", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: { xs: "30px", md: "0" },
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "35px", xs: "26px" },
                fontWeight: "500",
                color: theme.custom.darkMain,
              }}
            >
              {tour.name}
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: { lg: "16px", xs: "14px" },
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
        <Box sx={{ marginTop: "90px" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              color: theme.custom.darkMain,
            }}
          >
            Recent Viewed
          </Typography>
          <Grid
            container
            sx={{ margin: "50px 0", justifyContent: "center" }}
            spacing={4}
          >
            {tourList.map((data, index) => (
              <Grid key={index} sx={{ justifyItems: "center" }}>
                <TourCard tourData={data} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ marginTop: "90px" }}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              color: theme.custom.darkMain,
            }}
          >
            Recommendation
          </Typography>
          <Grid container sx={{ margin: "50px 0", justifyContent: "center" }} spacing={4}>
            {tourList.map((data, index) => (
              <Grid key={index} sx={{ justifyItems: "center" }}>
                <TourCard tourData={data} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
