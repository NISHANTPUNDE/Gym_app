import React from "react";
import { Box, Image } from "@chakra-ui/react";
import banner from "../image/banner.jpg";
const Gallery = () => {
  return (
    <Box>
      <Box >
        <Image maxH={'40vh'} w={"full"} src={banner} ></Image>
      </Box>
      
      </Box>
  );
};

export default Gallery;
