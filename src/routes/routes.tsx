import { Home } from "src/pages/Home";
import {
  Route,
  Routes,
  BrowserRouter,
  HashRouter,
  useLocation,
} from "react-router";
import { Destination } from "src/pages/Destination";
import { AnimatePresence } from "framer-motion";
import { Crew } from "src/pages/Crew";
import { Technology } from "src/pages/Technology";

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
