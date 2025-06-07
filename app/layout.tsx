"use client";
import "../global.css";
import { Roboto } from "next/font/google";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import Head from 'next/head';

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
      <head>
        <title>Travel.int - Your Travel Guide</title>
        <link rel="icon" href="/shortLogo.png" />
        <meta name="description" content="Travel.int - Your ultimate travel companion" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Box>{children}</Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
