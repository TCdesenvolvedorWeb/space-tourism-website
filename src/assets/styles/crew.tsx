import styled from "styled-components";
import background from "@assets/crew/background-crew-desktop.jpg";

const CrewMain = styled.main`
  height: 620px;
  background-image: url(${background});
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const YourCrew = styled.h2`
  text-align: left;
  align-self: flex-start;
  margin-left: 187px;
  font-size: 2rem;
  font-family: "Barlow", sans serif;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;
  margin-top: 60px;

  strong {
    color: gray;
  }
`;

const AboutUs = styled.section`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const About = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 10px;
  position: relative;

  li {
    list-style: none;
    font-family: "Barlow", sans serif;
    width: 400px;
  }

  li:first-child {
    font-size: 2.4rem;
    text-transform: uppercase;
    color: gray;
  }

  .description {
    font-size: 1.7rem;
    color: #d0d6f9;
  }

  li:last-child {
    position: absolute;
    bottom: -100px;
  }
`;

const MyName = styled.h1`
  font-size: 6rem;
  font-family: "Bellefair", sans serif;
  font-weight: 400;
`;

const Buttons = styled.button`
  border: none;
  border-radius: 50%;
  margin-right: 20px;
  padding: 7px;
  background-color: gray;
  cursor: pointer;

  &:hover {
    background-color: rgb(185, 182, 182);
  }

  &:active {
    background-color: #fff;
  }
`;

const MyPhoto = styled.img`
  width: 300px;
  -webkit-mask-image: linear-gradient(
    to bottom,
    #000,
    #000,
    #000,
    #000,
    rgba(0, 0, 0, 0.1)
  );
  -webkit-mask-repeat: no repeat;
  -webkit-mask-size: cover;
`;

export { CrewMain , YourCrew , AboutUs , About , MyName , Buttons , MyPhoto };