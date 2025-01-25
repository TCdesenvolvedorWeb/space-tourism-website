import { Header } from "@components/Header";
import { motion } from "framer-motion";
import { SatelliteInfos } from "@utils/Satellites";
import { useState } from "react";
import {
  Footer,
  Hero,
  Info,
  Name,
  PickDestination,
  Satellite,
  SatelliteList,
  Sections,
} from "@assets/styles/destination";

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

export { Destination };
