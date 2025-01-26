import styled from "styled-components";
import backgroundDesktop from "@assets/destination/background-destination-desktop.jpg";
import backgroundTablet from "@assets/destination/background-destination-tablet.jpg";
import backgroundMobile from "@assets/destination/background-destination-mobile.jpg";

const Hero = styled.main`
  background-image: url(${backgroundDesktop});
  background-size: cover;
  background-position: center;
  height: 620px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: 1s ease-in-out;

  @media (max-width: 875px) {
    background-image: url(${backgroundTablet});
    min-height: 100vh;
    justify-content: center;
    gap: 50px;
  }

  @media (max-width: 475px) {
    background-image: url(${backgroundMobile});
    gap: 10px;
  }

  @media (max-width: 375px) {
    min-height: 1050px;
  }
`;

const PickDestination = styled.p`
  align-self: flex-start;
  margin-left: 187px;
  font-size: 1.7rem;
  font-family: "Barlow", sans serif;
  letter-spacing: 3px;

  strong {
    color: gray;
  }

  @media (max-width: 475px) {
    font-size: 1.3rem;
    margin: auto;
  }
`;

const Sections = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;

  hr {
    border: solid 1px gray;
  }

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Satellite = styled.img`
  width: 350px;

  @media (max-width: 875px) {
    width: 250px;
  }
`;

const Info = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 47px;
  width: 400px;
  font-size: 1.7rem;
  color: #d0d6f9;

  hr {
    width: 100%;
  }

  @media (max-width: 875px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`;

const SatelliteList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  font-family: "Barlow", sans serif;
  font-size: 1.4rem;

  li:after {
    content: "";
    position: absolute;
    left: 0;
    border: none;
    bottom: -8px;
    height: 2px;
    width: 100%;
    transition: 0.5s ease-in-out;
    border-bottom: solid 2px transparent;
  }

  li:hover {
    color: #fff;
    position: relative;
    cursor: pointer;

    &:after {
      border-bottom: solid 2px gray;
    }
  }

  li.active {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -8px;
      height: 2px;
      width: 100%;
      border-bottom: solid 2px #fff;
    }
  }
`;

const Name = styled.h1`
  font-size: 10rem;
  font-family: "Bellefair", sans serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
`;

const Footer = styled.footer`
  display: flex;
  gap: 70px;
  font-family: "Barlow", sans serif;

  .distance {
    margin-top: 10px;
    font-size: 2.5rem;
    color: #fff;
    font-family: "Bellefair", sans serif;
  }

  @media (max-width: 375px){
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
  }
`;

export {
  Hero,
  PickDestination,
  Sections,
  Satellite,
  Info,
  SatelliteList,
  Name,
  Footer,
};
