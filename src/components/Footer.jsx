import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box minH={"40vh"} color={"white"} p={"16"} bgColor={"blackAlpha.900"}>
      <Stack direction={["column", "row"]}>
        <VStack w={"full"} h={"full"} alignItems={"center"} px={'4'}>
          <Heading size={"md"} color={"white"}>
            Subsribe for get regular updates
          </Heading>
          <HStack>
            <Input
              placeholder={"Enter email here"}
              focusBorderColor="none"
              border={"none"}
              outline={"none"}
            ></Input>
            <Button borderRadius={"0 20px 20px 0"}>
              <ArrowRightIcon />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          alignItems={"center"}
          px={'4'}
          borderLeft={[, "2px solid white"]}
          borderRight={[, "2px solid white"]}

        >
          <Heading>MyGym</Heading> <Text>stay safe stay healthy</Text>
        </VStack>
        <VStack
          w={"full"}
          alignItems={"center"}
          px={'4'}
          justifyItems={"center"}
        >
          <Heading>Follow us</Heading>
          <a href="">youtube</a>
          <a href="">instagram</a>
          <a href="">twitter</a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
