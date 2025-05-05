import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "./../../theme/theme";
import ContactBtn from "./ContactBtn";
import Logo from "./Logo";
export default function Footer() {
  return (
    <div>
      {" "}
      <div id="contact">
        <Box
          sx={{
            height: "420px",
            background: "url(contactBg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: { md: "50px", xs: "20px" },
            margin: "100px 0 20px",
            padding: "50px 0 0",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { md: "42px", sm: "35px", xs: "28px" },
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
          // justifyContent: "space-between",
          margin: "100px 0",
        }}
      >
        <Box>
          <Logo />
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
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flex: "1",
            justifyContent: "space-around",
            flexDirection: { sm: "row", xs: "column" },
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "space-around", flex: "1" }}
          >
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
          </Box>
          <Box
            sx={{ display: "flex", flex: "1", justifyContent: "space-around" }}
          >
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
              {["Google Play Store", "App Store", "Other Stores"].map(
                (data) => (
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
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
