import styled from "styled-components";
import backgroundDesktop from "@assets/home/background-home-desktop.jpg";
import backgroundTablet from "@assets/home/background-home-tablet.jpg";
import backgroundMobile from "@assets/home/background-home-mobile.jpg";

const Main = styled.main`
  background-image: url(${backgroundDesktop});
  background-size: cover;
  background-position: center;
  height: 633px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-style: normal;
  transition: 1s ease-in-out;

  @media (max-width: 875px) {
    background-image: url(${backgroundTablet});
    min-height: 100vh;
  }

  @media (max-width: 475px){
    background-image: url(${backgroundMobile});
    min-height: 100vh;
  }
`;

const Hero = styled.article`
  width: 1000px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 150px;

  @media (max-width: 875px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }

  @media (max-width: 475px) {
    gap: 40px;
  }
`;

const Info = styled.div`
  width: 29vw;

  p {
    color: #d0d6f9;
    font-family: "Barlow", sans serif;
    width: 400px;
  }

  h1 {
    color: #fff;
    font-size: 10rem;
    font-family: "Bellefair", sans serif;
    font-weight: 400;
  }

  .info {
    font-size: 1.3rem;
  }

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const Explore = styled.button`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  font-size: 2rem;
  position: relative;
  cursor: pointer;
  font-family: "Bellefair", sans serif;

  &:after {
    content: "";
    height: 200px;
    width: 200px;
    top: 0;
    right: 0;
    border-radius: 50%;
    position: absolute;
    transition: 0.8s ease-in-out;
  }

  &:hover {
    &:after {
      background-color: rgba(1000, 1000, 1000, 15%);
      top: -50px;
      right: -50px;
      height: 300px;
      width: 300px;
    }
  }

  @media(max-width: 375px){
    height: 150px;
    width: 150px;

    &:after{
      top: 0px;
      right: 0px;
      height: 150px;
      width: 150px;
    }

    &:hover:after{
      top: -45px;
      right: -50px;
      height: 250px;
      width: 250px;
    }


  }
`;

export { Explore, Hero, Info, Main };
