import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

const Layout = ({ customWidth, customHeight, customMinimumSize }) => {
  const [currentWidth, setCurrentWidth] = useState(customWidth);
  const [currentHeight, setCurrentHeight] = useState(customHeight);

  let originalMouseX = 0;
  let originalMouseY = 0;
  let minimumSize = customMinimumSize;

  const handleMouseDown = (e) => {
    let draggable = e.target.id;

    originalMouseX = e.pageX;
    originalMouseY = e.pageY;

    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);

    function resize(e) {
      // top
      if (draggable === "top") {
        const height = +currentHeight - (e.pageY - originalMouseY);
        if (height > minimumSize) {
          setCurrentHeight(height);
        }
      }
      //   right
      else if (draggable === "right") {
        const width = +currentWidth + (e.pageX - originalMouseX);
        if (width > minimumSize) {
          setCurrentWidth(width);
        }
      }
      //   bottom
      else if (draggable === "bottom") {
        const height = +currentHeight + (e.pageY - originalMouseY);
        if (height > minimumSize) {
          setCurrentHeight(height);
        }
      }
      //   left
      else if (draggable === "left") {
        const width = +currentWidth - (e.pageX - originalMouseX);
        if (width > minimumSize) {
          setCurrentWidth(width);
        }
      }
    }

    function stopResize() {
      window.removeEventListener("mousemove", resize);
    }
  };
  // console.log(currentHeight);
  return (
    <Box
      id="container"
      boxShadow="base"
      //   m="auto"
      minH={`${currentHeight}px`}
      w={`${currentWidth}px`}
      position="relative"
      boxSizing="border-box"
      top="0px"
      left="0px"
    >
      {/* resizers */}
      <Box
        id="top"
        h="5px"
        bg="blackAlpha.500"
        position={"absolute"}
        top={0}
        w="100%"
        cursor="n-resize"
        onMouseDown={handleMouseDown}
      ></Box>

      <Box
        id="right"
        w="5px"
        bg="blackAlpha.500"
        position={"absolute"}
        right={0}
        h="100%"
        cursor="e-resize"
        onMouseDown={handleMouseDown}
      ></Box>

      <Box
        id="bottom"
        h="5px"
        bg="blackAlpha.500"
        position={"absolute"}
        bottom={0}
        w="100%"
        cursor="n-resize"
        onMouseDown={handleMouseDown}
      ></Box>

      <Box
        id="left"
        w="5px"
        bg="blackAlpha.500"
        position={"absolute"}
        left={0}
        h="100%"
        cursor="e-resize"
        onMouseDown={handleMouseDown}
      ></Box>
    </Box>
  );
};

export default Layout;
