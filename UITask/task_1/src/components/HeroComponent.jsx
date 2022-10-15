import { Flex } from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";

const HeroComponent = () => {
  return (
    <Flex mt="2rem" justify="space-around" p="0 2rem" gap={5}>
      {/* 1st box  */}
      <Layout customWidth={"300"} customHeight={"500"} customMinimumSize={50} />
      {/* 2nd box */}
      <Layout
        customWidth={"800"}
        customHeight={"500"}
        customMinimumSize={100}
      />
    </Flex>
  );
};

export default HeroComponent;
