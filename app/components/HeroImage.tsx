"use client";
import React from "react";
import styled from "styled-components";

const ResponsiveImg = styled.img`
  width: 800px;

  @media (max-width: 1200px) {
    width: 670px;
  }
  @media (max-width: 900px) {
    width: 550px;
  }
  @media (max-width: 600px) {
    width: 400px;
  }
`;
export default function HeroImage() {
  return <ResponsiveImg src="homeHero.png" alt="hero" className="heroImg" />;
}
