import { Header } from "@components/Header";
import { motion } from "framer-motion";
import styled from "styled-components";
import background from "../../assets/crew/background-crew-desktop.jpg";
import { useState } from "react";
import { FlightCrew } from "../../utils/crew";

const Crew = () => {
  const [selected, setSelected] = useState(Number);
  console.log(selected);

  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Header />
      <CrewMain>
        <YourCrew>
          <strong>02</strong> meet your crew
        </YourCrew>

        {FlightCrew.map((e, index) => {
          return (
            index === selected && (
              <>
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <AboutUs>
                    <div>
                      <About>
                        <li>{e.position}</li>
                        <li>
                          <MyName>{e.name}</MyName>
                        </li>
                        <li className="description">{e.about}</li>
                        <li>
                          <Buttons onClick={() => setSelected(0)}></Buttons>
                          <Buttons onClick={() => setSelected(1)}></Buttons>
                          <Buttons onClick={() => setSelected(2)}></Buttons>
                          <Buttons onClick={() => setSelected(3)}></Buttons>
                        </li>
                      </About>
                    </div>
                    <MyPhoto src={e.img} alt={e.name + e.position} />
                  </AboutUs>
                </motion.div>
              </>
            )
          );
        })}
      </CrewMain>
    </motion.div>
  );
};

const CrewMain = styled.main`
  width: 100vw;
  min-height: 100vh;
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
  width: 70vw;
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
  width: 70vw;
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

export { Crew };
