"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinLine } from "react-icons/ri";
import Link from "next/link";
export default function ContactBtn() {

  return (
    <Box sx={{ display: "flex", marginTop: "10px", gap: "7px" }}>
      <Link
        target="_blank"
        href={"https://wa.me/8926576160?text=Hello%20Rajib%2C%20"}
      >
        <Button
          sx={{
            minWidth: "0px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid",
            color: theme.custom.gray,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.custom.darkMain,
            },
          }}
        >
          <FaWhatsapp fontSize={"24px"} />
        </Button>
      </Link>
      <Link target="_blank" href={"https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=rajibroy89265@gmail.com"}>
        <Button
          sx={{
            minWidth: "0px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid",
            color: theme.custom.gray,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.custom.darkMain,
            },
          }}
        >
          <MdOutlineEmail fontSize={"24px"} />
        </Button>
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/rajib-roy-888087304/"}
      >
        <Button
          sx={{
            width: "36px",
            height: "36px",
            minWidth: "0",
            borderRadius: "50%",
            border: "1px solid",
            color: theme.custom.gray,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "color 0.3s ease",
            "&:hover": {
              color: theme.custom.darkMain,
            },
          }}
        >
          <RiLinkedinLine fontSize={"24px"} />
        </Button>
      </Link>
    </Box>
  );
}
