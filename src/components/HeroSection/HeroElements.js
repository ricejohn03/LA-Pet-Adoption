import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 100%;
    overflow: hidden;
  }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: grid;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const HeroH1 = styled.div`
  color: #000;
  font-size: 55px;
  font-family: "Lobster", cursive;
  text-align: center;

  @media screen and(max-width: 768px) {
    font-size: 40px;
  }
  @media screen and(max-width: 480px) {
    font-size: 32px;
  }
`;

export const LineBrk = styled.div`
  background: black;
  height: 3px;
  width: 180px;
  margin: 15px 0 0 0;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #000;
  font-size: 22px;
  text-align: center;
  max-width: 600px;
  font-family: "Roboto", sans-serif;

  @media screen and(max-width: 768px) {
    font-size: 24px;
  }
  @media screen and(max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Input = styled.input`
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  background-color: #01bf71;
  border: 2px solid black;
  color: white;
  width: 250px;
  height: 40px;
  padding-left: 10px;
  text-align: center;
  font-size: 1.1rem;
  outline: none;

  &::placeholder {
    color: black;
  }
`;
