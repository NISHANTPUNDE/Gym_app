import React from 'react';
import {Box, Container, Heading} from "@chakra-ui/react";
const Program = () => {
  return (
    <Box h={'100vh'}>
      <Container>
      <Heading _hover={{
        color: "white",
        }}>
        Personal training program
      </Heading>
      </Container>
    </Box>
  )
}

export default Program