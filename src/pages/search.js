import React, { useState, useEffect } from "react";
import DogImg from "../images/dog.jpg";
import InfoCard from "../components/InfoCard";
import { FeatureContainer, FlexContainer } from "./searchElements";
import { ShowButton, BtnWrapper } from "../components/ButtonElement";
import axios from "axios";
import { FaCaretDown } from "react-icons/fa";

const Search = () => {
  const [animals, updateAnimals] = useState([]);
  const [pagecount, updatePageCount] = useState(6);
  const [query, updateQuery] = useState("90066");

  const api = `/v2/animals?location=${query}&limit=100`;
  const token = "";

  const token_config = {
    grant_type: "client_credentials",
    client_id: "",
    client_secret: "",
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const newAnimals = request.data.animals.filter(function (item) {
        return (
          item.primary_photo_cropped != null &&
          (item.species === "Dog" || item.species === "Cat")
        );
      });
      console.log(request.data.animals);
      updateAnimals(newAnimals);
    }

    fetchData();
  }, []);

  const handleClick = () => {
    updatePageCount(pagecount + 6);
    console.log(pagecount);
  };

  const animalComponent = animals.slice(0, pagecount).map((animal) => {
    return (
      <InfoCard
        key={animal.id}
        name={animal.name}
        breed={animal.breeds.primary}
        imgLink={
          animal.primary_photo_cropped == null
            ? DogImg
            : animal.primary_photo_cropped.full
        }
      />
    );
  });

  return (
    <>
      <FlexContainer>
        <FeatureContainer> {animalComponent}</FeatureContainer>
      </FlexContainer>

      <BtnWrapper>
        <ShowButton
          big="true"
          fontBig="true"
          type="button"
          onClick={handleClick}
        >
          See more <FaCaretDown />
        </ShowButton>
      </BtnWrapper>
    </>
  );
};

export default Search;
