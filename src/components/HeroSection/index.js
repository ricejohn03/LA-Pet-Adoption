import React, { useState } from "react";
/*import CatVideo from "../../videos/video.mp4";*/
import DogVideo from "../../videos/video-dog.mp4";
import CatVideo from "../../videos/video-old.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  LineBrk,
  HeroP,
  Input,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={DogVideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Adopt A Local Pet Today</HeroH1>
        <LineBrk />
        <HeroP>enter in you zip code to view local adoptable pets.</HeroP>
        <HeroBtnWrapper>
          <Input placeholder="Enter Zip Here" />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
