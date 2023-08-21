import React from "react";
import { Img, Box, Container, Heading, Stack ,Text,} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firstimg from "../image/landing1.jpeg";
import secondimg from "../image/landing2.jpeg";
import thirdimg from "../image/landing3.jpeg";
import circleimg from "../image/circleimg.jpeg";
const Home = () => {
  return (
    <Box m={'0'}>
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={"1000"}
      
        >
        <Box w={"full"} maxH={"90vh"} >
          <img src={firstimg} alt="imag" />
        </Box>
        <Box w={"full"} maxH={"90vh"}>
          <img src={secondimg} alt="imag" />
        </Box>
        <Box w={"full"} maxH={"90vh"}>
          <img src={thirdimg} alt="imag" />
        </Box>
      </Carousel>
      <Container mt={'8'} maxW={'container.xl'} h={'fit-content'}>
        
        <Heading w={'fit-content'}  margin={'auto'} borderBottom={'2px'} >
          MyGym
        </Heading>
        <Stack padding={20} flexDirection={['column','row']}>
        <Img h={'fit-content'} src={circleimg} ></Img>
        <Text p={['5','15']} textAlign={'center'} fontSize={['14','16']} fontFamily={'cursive'} letterSpacing={'wider'} lineHeight={['','8']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        deserunt atque et dolorum aut labore, distinctio molestiae, officia
        magni voluptate nisi impedit, nulla tempore ex sapiente corrupti ullam
        totam. Eum incidunt quas quia Lorem, ipsum dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut dolores quisquam accusamus. Perspiciatis nostrum reiciendis atque corporis similique natus esse vel sunt magni at recusandae beatae quam repudiandae vitae labore enim dolorem, laboriosam eaque explicabo odio nam tempore tempora. Esse officiis quod at recusandae quos?
        </Text>
        </Stack>
      </Container>
    </Box>
    
  );
};

export default Home;
