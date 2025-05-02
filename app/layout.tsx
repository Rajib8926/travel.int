"use client";
import "../global.css";
import { Roboto } from "next/font/google";
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
          <Box>{children}</Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
