import React from "react";
import {
  InfoCardContainer,
  InfoCardImage,
  Img,
  InfoName,
  Infobreed,
} from "./InfoCardElements";

const InfoCard = ({ imgLink, name, breed }) => {
  return (
    <InfoCardContainer>
      <InfoName>{name}</InfoName>
      <Infobreed>{breed}</Infobreed>
      <InfoCardImage>
        <Img src={imgLink} />
      </InfoCardImage>
    </InfoCardContainer>
  );
};

export default InfoCard;
