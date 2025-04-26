import { Box, Button, Grid, Typography } from "@mui/material";
import HomeHero from "./components/HomeHero";
import theme from "./../theme/theme";
import PopularSearch from "./components/PopularSearch";
import CategorySlider from "./components/slider/CategorySlider";
import { BsEmojiSmile } from "react-icons/bs";
import { IoFlagOutline, IoPaperPlaneOutline } from "react-icons/io5";
import TourCard from "./components/TourCard";
import { tourList } from "@/data/tourList";

import ContactBtn from "./components/ContactBtn";

export default function Home() {
  return (
    <Box sx={{}}>
      <HomeHero />
      <PopularSearch />
      <div id="category">
        <CategorySlider />
      </div>
      <div id="aboutUs" style={{ border: "1px solid white" }}>
        <Box
          sx={{
            display: "flex",
            margin: "250px 0 150px",
            justifyContent: "center",
            gap: "200px",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "385px",
                height: "417px",
                borderRadius: "80px",
                background: "#DAE9FF",
                position: "relative",
              }}
            >
              <img
                src="Без имени-2 1.png"
                alt="human"
                style={{ position: "absolute", bottom: "0px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  // alignItems:"center",
                  padding: "12px",
                  width: "180px",
                  height: "80px",
                  background: "#ffffff92",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  borderRadius: "3px 3px 80px 3px",
                  left: "-90px",
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
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "#020202",
                    }}
                  >
                    400+
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#707070ddf" }}>
                    Destinations
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  // alignItems:"center",
                  padding: "12px",
                  width: "180px",
                  height: "80px",
                  background: "#ffffff92",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  borderRadius: "3px 3px 3px 80px",
                  right: "-80px",
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
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "#020202",
                    }}
                  >
                    3300+
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#707070ddf" }}>
                    Customers
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  // alignItems:"center",
                  padding: "12px",
                  width: "180px",
                  height: "80px",
                  background: "#ffffff92",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  borderRadius: "80px 3px 3px 3px",
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
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "#020202",
                    }}
                  >
                    70+
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#707070ddf" }}>
                    Tours
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box width={"400px"}>
            <Typography
              sx={{
                fontSize: "35px",
                marginBottom: "20px",
                fontWeight: "500",
                color: "#313131",
              }}
            >
              Why Choose <span style={{ color: "#1976d2" }}>Travel</span>.int?
            </Typography>
            <Typography sx={{ fontSize: "18px", color: "#AEAEAE" }}>
              There are always undoubted leaders, professionals in their field,
              experts of their product - {"that's"} us! Travel agency
              Verona-tour does not stand still, we work for you! We are
              developing our network, opening new offices, inspecting hotels and
              discovering new countries, and most importantly, we provide our
              tourists with the best service in Ukraine!
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
              fontSize: "42px",
              textAlign: "center",
              color: "#313131",
              fontWeight: "500",
            }}
          >
            Top Tours For You
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
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
            rowSpacing={5}
            columnSpacing={1}
            sx={{ margin: "60px 0" }}
          >
            {tourList.map((data, index) => (
              <Grid
                key={index}
                size={{ xxl: 3, xl: 4, lg: 2 }}
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
      <div id="contact">
        <Box
          sx={{
            height: "420px",
            background: "url(contactBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50px",
            margin: "100px 0 20px",
            padding: "50px 0 0",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "42px",
              fontWeight: "700",
              color: theme.custom.darkMain,
            }}
          >
            Scan QR-code for contact
          </Typography>
          <Box
            sx={{
              width: "150px",
              height: "150px",
              background: "url(linkedinQR.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              margin: "50px auto",
            }}
          ></Box>
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "100px 0",
        }}
      >
        <Box>
          <Box
            sx={{ width: "110px", height: "33px", background: "url(logo.png)" }}
          ></Box>
          <Typography
            sx={{
              fontSize: "19px",
              color: theme.custom.gray,
              marginTop: "10px",
            }}
          >
            Enjoy by triping <br /> with Travelint.
          </Typography>
          <ContactBtn />
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "20px",
              color: theme.custom.darkMain,
              fontWeight: "500",
            }}
          >
            Menu
          </Box>

          {["Home", "Tours", "Category", "About Us"].map((data) => (
            <Box
              key={data}
              sx={{
                color: theme.custom.gray,
                fontSize: "16px",
                fontWeight: "400",
                cursor: "pointer",
                marginTop: "20px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: theme.custom.darkMain,
                },
              }}
            >
              {data}
            </Box>
          ))}
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "20px",
              color: theme.custom.darkMain,
              fontWeight: "500",
            }}
          >
            Booking Plan
          </Box>
          {["Personal Trip", "Group Trip"].map((data) => (
            <Box
              key={data}
              sx={{
                color: theme.custom.gray,
                fontSize: "16px",
                fontWeight: "400",
                cursor: "pointer",
                marginTop: "20px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: theme.custom.darkMain,
                },
              }}
            >
              {data}
            </Box>
          ))}
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "20px",
              color: theme.custom.darkMain,
              fontWeight: "500",
            }}
          >
            Support
          </Box>
          {["FAQ", "Terms & Conditions", "Privacy Policy"].map((data) => (
            <Box
              key={data}
              sx={{
                color: theme.custom.gray,
                fontSize: "16px",
                fontWeight: "400",
                cursor: "pointer",
                marginTop: "20px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: theme.custom.darkMain,
                },
              }}
            >
              {data}
            </Box>
          ))}
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "20px",
              color: theme.custom.darkMain,
              fontWeight: "500",
            }}
          >
            Get App
          </Box>
          {["Google Play Store", "App Store", "Other Stores"].map((data) => (
            <Box
              key={data}
              sx={{
                color: theme.custom.gray,
                fontSize: "16px",
                fontWeight: "400",
                cursor: "pointer",
                marginTop: "20px",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: theme.custom.darkMain,
                },
              }}
            >
              {data}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
