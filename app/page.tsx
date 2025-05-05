import { Box, Button, Grid, Typography } from "@mui/material";
import HomeHero from "./components/HomeHero";

import PopularSearch from "./components/PopularSearch";
import CategorySlider from "./components/slider/CategorySlider";
import { BsEmojiSmile } from "react-icons/bs";
import { IoFlagOutline, IoPaperPlaneOutline } from "react-icons/io5";
import TourCard from "./components/TourCard";
import { tourList } from "@/data/tourList";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPhoto from "./components/AboutPhoto";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          margin: { xxl: "0 280px", lg: "0 110px", sm: "0 30px", xs: "0 5px" },
        }}
      >
        <HomeHero />
        <PopularSearch />
        <div id="category">
          <CategorySlider />
        </div>
        <div id="aboutUs" style={{ border: "1px solid white" }}>
          <Box
            sx={{
              display: "flex",

              flexDirection: { lg: "row", xs: "column" },
              alignItems: { lg: "start", xs: "center" },
              margin: { md: "250px 0 150px", xs: "130px 0 50px" },
              justifyContent: "center",
              gap: { lg: "200px", xs: "50px" },
            }}
          >
            <Box>
              <Box
                sx={{
                  width: { sm: "385px", xs: "300px" },
                  height: { sm: "417px", xs: "330px" },
                  borderRadius: { sm: "80px", xs: "65px" },
                  background: "#DAE9FF",
                  position: "relative",
                }}
              >
                {/* <img
                  src="Без имени-2 1.png"
                  alt="human"
                  style={{ position: "absolute", bottom: "0px" }}
                /> */}
                <AboutPhoto />
                <Box
                  sx={{
                    position: "absolute",
                    // alignItems:"center",
                    padding: "12px",
                    width: { sm: "180px", xs: "140px" },
                    height: { sm: "80px", xs: "60px" },
                    background: "#ffffff92",
                    display: "flex",
                    gap: { sm: "20px", xs: "10px" },
                    justifyContent: "center",
                    borderRadius: {
                      sm: "3px 3px 80px 3px",
                      xs: "3px 3px 45px 3px",
                    },
                    left: { sm: "-90px", xs: "-60px" },
                    top: "50%",
                    transform: "translateY(-50%)",
                    boxShadow: "-1px 2px 8px #9b9b9b",
                    backdropFilter: "blur(7px)",
                  }}
                >
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      background: "#e0d4ff",
                      display: "flex",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IoPaperPlaneOutline color="#5e23ff" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { sm: "24px", xs: "18px" },
                        fontWeight: "500",
                        color: "#020202",
                      }}
                    >
                      400+
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: "12px", xs: "10px" },
                        color: "#707070ddf",
                      }}
                    >
                      Destinations
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    // alignItems:"center",
                    padding: "12px",
                    width: { sm: "180px", xs: "140px" },
                    height: { sm: "80px", xs: "60px" },
                    background: "#ffffff92",
                    display: "flex",
                    gap: { sm: "20px", xs: "10px" },
                    justifyContent: "center",
                    borderRadius: {
                      sm: "3px 3px 3px 80px",
                      xs: "3px 3px 3px 50px",
                    },
                    right: { sm: "-80px",xs:"-40px" },
                    top: "45px",
                    boxShadow: "-1px 2px 8px #9b9b9b",
                    backdropFilter: "blur(7px)",
                  }}
                >
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      background: "#e0d4ff",
                      display: "flex",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BsEmojiSmile color="#5e23ff" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { sm: "24px", sx: "18px" },
                        fontWeight: "500",
                        color: "#020202",
                      }}
                    >
                      3300+
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: "12px", xs: "10px" },
                        color: "#707070ddf",
                      }}
                    >
                      Customers
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    // alignItems:"center",
                    padding: "12px",
                    width: { sm: "180px", xs: "140px" },
                    height: { sm: "80px", xs: "60px" },
                    background: "#ffffff92",
                    display: "flex",
                    gap: { sm: "20px", xs: "10px" },
                    justifyContent: "center",
                    borderRadius: {
                      sm: "80px 3px 3px 3px",
                      xs: "50px 3px 3px 3px",
                    },
                    right: "-40px",
                    bottom: "-10px",
                    boxShadow: "-1px 2px 8px #9b9b9b",
                    backdropFilter: "blur(7px)",
                  }}
                >
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      background: "#e0d4ff",
                      display: "flex",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IoFlagOutline color="#5e23ff" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { sm: "24px", xs: "18px" },
                        fontWeight: "500",
                        color: "#020202",
                      }}
                    >
                      70+
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { sm: "12px", xs: "10px" },
                        color: "#707070ddf",
                      }}
                    >
                      Tours
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box width={{ lg: "400px", md: "70%", xs: "90%" }}>
              <Typography
                sx={{
                  fontSize: { md: "35px", xs: "25px" },
                  marginBottom: "20px",
                  fontWeight: { md: "500", xs: "600" },
                  color: "#313131",
                }}
              >
                Why Choose <span style={{ color: "#1976d2" }}>Travel</span>.int?
              </Typography>
              <Typography
                sx={{ fontSize: { md: "18px", xs: "15px" }, color: "#AEAEAE" }}
              >
                There are always undoubted leaders, professionals in their
                field, experts of their product - {"that's"} us! Travel agency
                Verona-tour does not stand still, we work for you! We are
                developing our network, opening new offices, inspecting hotels
                and discovering new countries, and most importantly, we provide
                our tourists with the best service in Ukraine!
              </Typography>
            </Box>
          </Box>
        </div>
        <div id="tours">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "42px", xs: "33px" },
                textAlign: "center",
                color: "#313131",
                fontWeight: "500",
              }}
            >
              Top Tours For You
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "15px", xs: "13px" },
                textAlign: "center",
                color: "#AEAEAE",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              Much places for your vibes from the world
            </Typography>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={4}
              sx={{
                margin: "60px 0",

                justifyContent: "center",
              }}
            >
              {tourList.map((data, index) => (
                <Grid
                  key={index}
                  // size={{ xl: 3, lg: 4, }}
                  sx={{ justifyItems: "center" }}
                >
                  <TourCard tourData={data} />
                </Grid>
              ))}
            </Grid>
            <Button
              variant="contained"
              sx={{ fontSize: "17px", padding: "10px 40px", fontWeight: "400" }}
            >
              View All Tours
            </Button>
          </Box>
        </div>

        <Footer />
      </Box>
    </Box>
  );
}
