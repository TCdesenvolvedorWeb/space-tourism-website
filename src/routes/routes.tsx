import {
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
  useLocation,
} from "react-router";
import { AnimatePresence } from "framer-motion";
import { Home } from "@pages/Home";
import { Destination } from "@pages/Destination";
import { Crew } from "@pages/Crew";
import { Technology } from "@pages/Technology";

const SupportHistory = (): boolean => {
  return !!(window.history && window.history.pushState);
};

const AppRoutes: React.FC = () => {
  const Router = SupportHistory() ? BrowserRouter : HashRouter;

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </AnimatePresence>
  );
};

export { AppRoutes };
