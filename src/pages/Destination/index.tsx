import { Header } from "@components/Header";
import background from "../../assets/destination/background-destination-desktop.jpg";
import styled from "styled-components";
import moon from "../../assets/destination/image-moon.png";
import { motion } from "framer-motion";

const Destination = () => {
  return (
    <>
      <motion.div
        initial={{  opacity: 0.8 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 0.5 , ease: 'easeInOut'}}
      >
      <Header />
        <Hero>
          <PickDestination>
            <strong>01</strong> PICK YOUR DESTINATION
          </PickDestination>
          <Sections>
            <Satellite src={moon} alt="Moon" />

            <Info>
              <SatelliteList>
                <li>MOON</li>
                <li>MARS</li>
                <li>EUROPA</li>
                <li>TITAN</li>
              </SatelliteList>

              <Name> Moon </Name>

              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>

              <hr />

              <Footer>
                <div>
                  <p>avg. distance</p>
                  <p className="distance">384,400 KM</p>
                </div>
                <div>
                  <p>est. travel time</p>
                  <p className="distance">3 DAYS</p>
                </div>
              </Footer>
            </Info>
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

  li:hover {
    color: #fff;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      left: 0;
      bottom: -8px;
      border-bottom: solid 2px gray;
      width: 100%;
      height: 1px;
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
