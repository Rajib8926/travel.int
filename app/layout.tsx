"use client";
import "../global.css";
import { Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

const roboto = Roboto({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Box sx={{ margin: "0 280px" }}>{children}</Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
