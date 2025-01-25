import styled from "styled-components";
import background from "@assets/home/background-home-desktop.jpg";

const Main = styled.main`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-style: normal;
  transition: 1s ease-in-out;
`;

const Hero = styled.article`
  width: 70vw;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 150px;
`;

const Info = styled.div`
  width: 29vw;

  p {
    color: #d0d6f9;
    font-family: "Barlow" , sans serif;
  }

  h1 {
    color: #fff;
    font-size: 10rem;
    font-family: "Bellefair", sans serif;
    font-weight: 400;
  }

  .info{
    font-size: 1.3rem;
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
`;

export { Explore , Hero , Info , Main }