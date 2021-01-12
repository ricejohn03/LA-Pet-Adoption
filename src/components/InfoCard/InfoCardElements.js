import styled from "styled-components";

export const InfoCardContainer = styled.div`
  background-color: #000;
  display: grid;
  padding: 20px;
  margin: 35px 15px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  -webkit-box-shadow: 2px 2px 3px 4px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 3px 3px 5px 6px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 2px 2px 3px 4px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    curspr: pointer;
  }
`;

export const InfoCardImage = styled.div`
  align-items: center;
  justify-items: center;
  background-size: cover;
`;

export const InfoName = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;

  padding: 5px;
  color: #01bf71;
  font-family: "Roboto", sans-serif;
`;

export const Infobreed = styled.div`
  font-size: 15px;
  padding: 5px;
  color: #fff;
`;

export const Img = styled.img`
  width: 350px;
  height: 400px;
  display: grid;
  justify-content: center;
  align-items: center;
  object-fit: cover;

  @media screen and (max-width: 900px) {
    width: 300px;
    height: 400px;
  }
`;
