import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";

const HeroComponent = () => {
  return (
    <Flex
      mt="2rem"
      justify="space-around"
      p="0 2rem"
      gap={5}
      boxSizing="border-box"
    >
      {/* 1st box  */}
      <Box>
        <Layout
          customWidth={"300"}
          customHeight={"500"}
          customMinimumSize={50}
        />
      </Box>
      {/* 2nd box */}
      <Box>
        <Layout
          customWidth={"800"}
          customHeight={"500"}
          customMinimumSize={100}
        />
      </Box>
    </Flex>
  );
};

export default HeroComponent;
