import React from "react";
import Icon1 from "../../images/svg-i-1.svg";
import Icon2 from "../../images/svg-i-2.svg";
import Icon3 from "../../images/svg-i-3.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  IconWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> What We Do</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <IconWrapper>
            <ServicesIcon src={Icon1} />
          </IconWrapper>

          <ServicesH2> Interact With Adoption API</ServicesH2>
          <ServicesP>
            We are pashionate about promoting local pets for adoption
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2> Connecting You To Pets</ServicesH2>
          <ServicesP>
            We take pets in your local area and display them
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2> Helping The Helpless</ServicesH2>
          <ServicesP>
            providing easy to navigate options and ways to promote adoption
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
