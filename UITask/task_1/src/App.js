import "./App.css";

import HeroComponent from "./components/HeroComponent";
import BottomComponent from "./components/BottomComponent";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box mb="5rem">
      <HeroComponent />
      <BottomComponent />
    </Box>
  );
}

export default App;
