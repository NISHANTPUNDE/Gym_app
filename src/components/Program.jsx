import React from 'react';
import {Box, Container, Heading, Text} from "@chakra-ui/react";
const Program = () => {
  return (
    <Box>
      <Container  centerContent maxW={'container.lg'}>
      <Heading _hover={{
        color: "white",
        }} bgColor={'ActiveBorder'} p={'5'} fontSize={[20,32]}>
        Personal training program
      </Heading>      
      <Text bgColor={'Background'} p={'10'} marginY={['10','20']} letterSpacing={'wider'} lineHeight={['','tall']} fontFamily={'cursive'} fontSize={[16,20]}>The Gold’s Gym Fitness Institute GGFI is India’s first International Fitness Management Institute that offers Fitness Training Program. It offers certificate courses in Fitness Management, Personal Training and Spinning Instructing. It covers a range of subjects to comprehensively address and ensure the best international brand practices in India. The 3 month courses are monitored by qualified personnel of Gold’s Gym, and also hosts guest lectures by the biggest names in the international fitness training industry with guaranteed internships and a firsthand opportunity to experience fitness training from the world leaders in it. The GGFI offers the most exciting and up-to-date education pathway to gain industry leading qualifications as well as ongoing training in all aspects of the fitness industry.</Text>
      </Container>
    </Box>
  )
}

export default Program