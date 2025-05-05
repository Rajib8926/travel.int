"use client";
import React from "react";
import styled from "styled-components";

const ResponsiveImg = styled.img`
  @media (max-width: 600px) {
    width: 280px;
  }
`;
export default function AboutPhoto() {
  return (
    <ResponsiveImg
      src="Без имени-2 1.png"
      alt="hero"
      style={{ position: "absolute", bottom: "0px" }}
    />
  );
}
