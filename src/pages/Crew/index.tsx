import { Header } from "@components/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import { FlightCrew } from "@utils/crew";
import { CrewMain, YourCrew, AboutUs, About, MyName, Buttons, MyPhoto } from "@assets/styles/crew";

const Crew = ( {background = "#fff"}) => {
  const [selected, setSelected] = useState(Number);

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
                          <Buttons 
                            onClick={() => setSelected(0)}
                            style={ selected === 0 ? { backgroundColor: background } : undefined }>
                          </Buttons>
                          <Buttons 
                            onClick={() => setSelected(1)}
                            style={ selected === 1 ? { backgroundColor: background } : undefined }>
                          </Buttons>
                          <Buttons 
                            onClick={() => setSelected(2)}
                            style={ selected === 2 ? { backgroundColor: background } : undefined }>
                          </Buttons>
                          <Buttons
                            onClick={() => setSelected(3)}
                            style={ selected === 3 ? { backgroundColor: background } : undefined }>
                          </Buttons>
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

export { Crew };