import styled from "styled-components";
import backgroundDesktop from "@assets/crew/background-crew-desktop.jpg";
import backgroundTablet from "@assets/crew/background-crew-tablet.jpg";
import backgroundMobile from "@assets/crew/background-crew-mobile.jpg";

const CrewMain = styled.main`
  min-height: 630px;
  background-image: url(${backgroundDesktop});
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 875px) {
    min-height: 120vh;
    background-image: url(${backgroundTablet});
    }
    
  @media (max-width: 475px) {
    background-image: url(${backgroundMobile});
    padding: 0 20px;
  }

  @media (max-width: 375px) {
    min-height: 1100px;
  }
`;

const YourCrew = styled.h2`
  align-self: flex-start;
  margin-left: 187px;
  font-size: 2rem;
  font-family: "Barlow", sans serif;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 3px;

  strong {
    color: gray;
  }

  @media (max-width: 875px) {
    margin-top: 10px;
    margin-bottom: 50px;
  }

  @media (max-height: 700px) {
    margin-top: 100px;
  }

  @media (max-width: 475px) {
    font-size: 1.7rem;
    margin: auto;
  }

`;

const AboutUs = styled.section`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 875px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    li:first-child {
      font-size: 2rem;
    }

    li:last-child {
      position: relative;
      bottom: 0;
      margin-top: 20px;
    }

    .description{
      font-size: 1.4rem;
      text-align: center;
    }
  }

  @media (max-width: 475px) {
    width: 300px;

    li{
      width: 300px;
    }
  }

  
`;

const MyName = styled.h1`
  font-size: 6rem;
  font-family: "Bellefair", sans serif;
  font-weight: 400;
  text-transform: uppercase;

  @media (max-width: 875px) {
    font-size: 3rem;
  }
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

export { CrewMain, YourCrew, AboutUs, About, MyName, Buttons, MyPhoto };
