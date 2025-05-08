"use client";
import React from "react";
import styled from "styled-components";

const ResponsiveImg = styled.img`
  width: 750px;

  @media (max-width: 1200px) {
    width: 620px;
  }
  @media (max-width: 900px) {
    width: 510px;
  }
  @media (max-width: 600px) {
    width: 350px;
  }
`;
export default function HeroImage() {
  return <ResponsiveImg src="homeHero.png" alt="hero" className="heroImg" />;
}
