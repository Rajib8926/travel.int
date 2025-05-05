"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function Logo() {
  const route = useRouter();
  return (
    <Box
      onClick={() => route.push("/")}
      sx={{
        background: "url(/logo.png)",
        width: "110px",
        height: "30px",
        cursor: "pointer",
        backgroundSize: "cover",
      }}
    ></Box>
  );
}
