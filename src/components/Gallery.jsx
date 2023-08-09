import React from "react";
import { Box, Text, Image, Stack, Heading } from "@chakra-ui/react";
import banner from "../image/banner.jpg";
import { data } from "../imagelink/images";
const Gallery = () => {
  return (
    <Box>
      <Box>
        <Image maxH={"40vh"} w={"full"} src={banner}></Image>
      </Box>
      <Heading textAlign={'center'} marginTop={['2','5']} >Gallery</Heading>
      <Stack flexWrap={'wrap'} marginY={['5','10']} alignItems={'center'} justifyContent={'center'} flexDirection={["column", "row"]}>
        {data.map(({ imglink }) => (
          <Image
            H={["30vh", "30vh"]}
            W={["70vh", "30vh"]}
            objectFit="cover"
            objectPosition="center"
            m={{ base: "2", md: "4" }}
            src={imglink}
          />
        ))}
      </Stack>
    </Box>
  );
};
export default Gallery;
