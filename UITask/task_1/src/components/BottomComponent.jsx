import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";

const BottomComponent = () => {
  return (
    <Box p="2rem">
      <Layout
        customWidth={"1400"}
        customHeight={"600"}
        customMinimumSize={100}
      />
    </Box>
  );
};

export default BottomComponent;
