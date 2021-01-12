import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

import {
  FooterContainer,
  FooterLogo,
  FooterIcons,
  FooterCopy,
} from "./FooterElements";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo>LA Pets</FooterLogo>
        <FooterCopy>LA Pets 2021</FooterCopy>
        <FooterIcons>
          <FaEnvelope />
          <FaInstagram />
          <FaFacebook />
        </FooterIcons>
      </FooterContainer>
    </>
  );
};

export default Footer;
