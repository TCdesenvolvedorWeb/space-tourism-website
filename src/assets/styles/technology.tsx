import styled from "styled-components";
import background from "@assets/technology/background-technology-desktop.jpg";

const TechnologyMain = styled.main`
  background-image: url(${background});
  background-size: cover;
  height: 632px;
  color: #fff;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;
`;

const SpaceLaunch = styled.h2`
  align-self: flex-start;
  margin-left: 187px;
  font-size: 1.7rem;
  font-family: "Barlow", sans serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 400;

  strong {
    color: gray;
  }
`;

const Sections = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 800px;
  height: 500px;
`;

const Numbers = styled.ol`
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  li {
    padding: 20px 10px;
    text-align: center;
    border: solid 1px gray;
    border-radius: 50%;
    font-size: 2rem;
    transition: 0.5s ease-in-out;
  }

  li:hover {
    background-color: #fff;
    color: #000;
  }
`;

const LauntchInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;

  li {
    font-size: 1.7rem;
    font-family: "Barlow", sans serif;
    color: #d0d6f9;

    h1 {
      font-family: "Bellefair", sans serif;
      font-size: 5rem;
      font-weight: 400;
      text-transform: uppercase;
      color: #fff;
    }
  }

  li:first-child {
    font-size: 2.4rem;
    text-transform: uppercase;
    color: gray;
    font-family: "Bellefair", sans serif;
  }

  li:last-child {
    width: 500px;
  }
`;

const Launtch = styled.img`
  width: 400px;
`;

export { TechnologyMain, SpaceLaunch, Sections, Numbers, Launtch , LauntchInfo };
