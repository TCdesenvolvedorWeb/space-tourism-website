import { Header } from "@components/Header";
import background from "@assets/destination/background-destination-desktop.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SatelliteInfos } from "@utils/Satellites";
import { useState } from "react";

const Destination = ({ color = "#fff" }) => {
  const [selected, setSelected] = useState(Number);

  return (
    <>
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Header />
        <Hero>
          <PickDestination>
            <strong>01</strong> PICK YOUR DESTINATION
          </PickDestination>
          <Sections>
            {SatelliteInfos.map((e, index) => {
              return (
                index === selected && (
                  <>
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    >
                      <Satellite src={e.img} alt="Moon" />
                    </motion.div>

                    <Info>
                      <SatelliteList>
                        <li
                          onClick={() => setSelected(0)}
                          style={selected === 0 ? { color: color } : undefined}
                          className={selected === 0 ? "active" : ""}
                        >
                          MOON
                        </li>
                        <li
                          onClick={() => setSelected(1)}
                          style={selected === 1 ? { color: color } : undefined}
                          className={selected === 1 ? "active" : ""}
                        >
                          MARS
                        </li>
                        <li
                          onClick={() => setSelected(2)}
                          style={selected === 2 ? { color: color } : undefined}
                          className={selected === 2 ? "active" : ""}
                        >
                          EUROPA
                        </li>
                        <li
                          onClick={() => setSelected(3)}
                          style={selected === 3 ? { color: color } : undefined}
                          className={selected === 3 ? "active" : ""}
                        >
                          TITAN
                        </li>
                      </SatelliteList>

                      <Name> {e.name} </Name>
                      <p>{e.description}</p>
                      <hr />
                      <Footer>
                        <div>
                          <p>avg. distance</p>
                          <p className="distance">{e.avg}</p>
                        </div>
                        <div>
                          <p>est. travel time</p>
                          <p className="distance">{e.est}</p>
                        </div>
                      </Footer>
                    </Info>
                  </>
                )
              );
            })}
          </Sections>
        </Hero>
      </motion.div>
    </>
  );
};

const Hero = styled.main`
  background-image: url(${background});
  background-size: 100%;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: 1s ease-in-out;
`;

const PickDestination = styled.p`
  text-align: left;
  width: 70vw;
  font-size: 1.7rem;
  font-family: "Barlow", sans serif;
  letter-spacing: 3px;

  strong {
    color: gray;
  }
`;

const Sections = styled.section`
  display: flex;
  align-items: center;
  width: 70vw;
  height: 480px;
  gap: 20px;

  hr {
    border: solid 1px gray;
  }
`;

const Satellite = styled.img`
  width: 350px;
`;

const Info = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 47px;
  width: 400px;
  font-size: 1.7rem;
  color: #d0d6f9;
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
`;

export { Destination };
