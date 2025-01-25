import { motion } from "framer-motion";
import background from "@assets/technology/background-technology-desktop.jpg";
import styled from "styled-components";
import { Header } from "@components/Header";
import { Launches } from "@utils/Technology";
import { useState } from "react";

const Technology = () => {
  const [ selected , setSelected ] = useState(Number);

  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Header />
      <TechnologyMain>
        <SpaceLaunch>
          <strong> 03 </strong> space launch 101
        </SpaceLaunch>
        <Sections>
          <Numbers>
            <li onClick={() => setSelected(0)}>1</li>
            <li onClick={() => setSelected(1)}>2</li>
            <li onClick={() => setSelected(2)}>3</li>
          </Numbers>
          {Launches.map((e, index) => {
            return (
              index === selected && (
                <>
                  <ul>
                    <li>The terminology...</li>
                    <li>
                      <h1>{e.name}</h1>
                    </li>
                    <li>
                      {e.description}
                    </li>
                  </ul>
                  <Launtch src={e.img} alt=" Launch Vehicle" />
                </>
              )
            );
          })}
        </Sections>
      </TechnologyMain>
    </motion.div>
  );
};

const TechnologyMain = styled.main`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  color: #fff;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
`;

const SpaceLaunch = styled.h2`
  text-align: left;
  width: 80vw;
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
  width: 80vw;
  height: 500px;

  ol,
  ul {
    list-style: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 900px;

    li {
      width: 450px;
      font-size: 1.7rem;
      font-family: "Barlow", sans serif;

      h1 {
        font-family: "Bellefair", sans serif;
        font-size: 5rem;
        font-weight: 400;
        text-transform: uppercase;
      }
    }

    li:first-child {
      font-size: 2.4rem;
      text-transform: uppercase;
      color: gray;
      font-family: "Bellefair", sans serif;
    }
  }
`;

const Numbers = styled.ol`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  li {
    padding: 20px 25px;
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

const Launtch = styled.img`
  width: 700px;
  height: 400px;
`;

export { Technology };
