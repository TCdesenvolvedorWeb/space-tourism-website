import { motion } from "framer-motion";
import { Header } from "@components/Header";
import { Launches } from "@utils/Technology";
import { useState } from "react";
import { Sections } from "@assets/styles/destination";
import { TechnologyMain, SpaceLaunch, Numbers, Launtch } from "@assets/styles/technology";

const Technology = ({ background = "#fff", color = "#000" }) => {
  const [selected, setSelected] = useState(Number);

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
            <li
              onClick={() => setSelected(0)}
              style={
                selected === 0
                  ? { backgroundColor: background, color: color }
                  : undefined
              }
            >
              1
            </li>

            <li
              onClick={() => setSelected(1)}
              style={
                selected === 1
                  ? { backgroundColor: background, color: color }
                  : undefined
              }
            >
              2
            </li>
            <li
              onClick={() => setSelected(2)}
              style={
                selected === 2
                  ? { backgroundColor: background, color: color }
                  : undefined
              }
            >
              3
            </li>
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
                    <li>{e.description}</li>
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

export { Technology };