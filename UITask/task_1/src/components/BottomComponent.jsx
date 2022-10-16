import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";

const BottomComponent = () => {
  return (
    <Box m="2rem" boxSizing="border-box">
      <Layout
        customWidth={"1200"}
        customHeight={"600"}
        customMinimumSize={100}
      />
    </Box>
  );
};

export default BottomComponent;
