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

  @media (max-width: 1094px) {
    min-height: 1100px;
    overflow-y: auto;
  }
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

  @media (max-width: 875px) {
    margin: auto;
  }
`;

const Sections = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 1094px) {
    flex-direction: column-reverse;
    position: relative;
  }
`;

const Numbers = styled.ol`
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  li {
    padding: 20px 30px;
    text-align: center;
    border: solid 1px gray;
    border-radius: 50%;
    font-size: 2rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  li:hover {
    background-color: #fff;
    color: #000;
  }

  @media (max-width: 1094px) {
    flex-direction: row;
    position: absolute;
    top: -150px;
    left: 23%;

    li {
      padding: 20px 30px;
    }
  }

  @media (max-width: 475px) {
    left: 15%;
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

  @media (max-width: 1094px) {
    text-align: center;

    li:last-child {
      padding-bottom: 30px;
    }
  }

  @media (max-width: 475px) {
    li:first-child {
      font-size: 2rem;
    }

    li:last-child {
      width: 400px;
      font-size: 1.3rem;
    }

    li {
      h1 {
        font-size: 3rem;
      }
    }
  }

  @media(max-width: 375px) {
    li:last-child {
      width: 300px;
    }
  }
`;

const Launtch = styled.img`
  width: 400px;
`;

export { TechnologyMain, SpaceLaunch, Sections, Numbers, Launtch, LauntchInfo };
