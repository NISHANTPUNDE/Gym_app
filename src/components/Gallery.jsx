import React from "react";
import { Box, Image} from "@chakra-ui/react";
import banner from "../image/banner.jpg";
import {data} from "../imagelink/images";
const Gallery = () => {
  return (
    <Box h={"100vh"}>
      <Box>
        <Image maxH={"40vh"} w={"full"} src={banner}></Image>
      </Box>
      
       { data.map(({imglink}) =>
            <Box>
              <img src={imglink} />
            </Box> 
        )
  }

    </Box>
  );
}
export default Gallery

