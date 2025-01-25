import { Header } from "@components/Header";
import { Explore, Hero, Info, Main } from "./style";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{  opacity: 0.9 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut'}}      
      >
        <Header />
        <Main>
          <Hero>
            <Info>
              <p>SO, YOU WANT TO TRAVEL TO</p>
              <h1>SPACE</h1>
              <p className="info">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </Info>
            <Link to={"/destination"}><Explore>EXPLORE</Explore></Link>
          </Hero>
        </Main>
      </motion.div>
    </>
  );
};

export { Home };
