import {
  Button,
  HStack,
  Input,
  Select,
  Box,
  Text,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <>
    <Heading w={'fit-content'} m={'auto'} >contact us</Heading>
    <HStack mt={'5'} spacing={'10'}>
      
      <FormControl p={'10'} >
        <Box border={'2px'} p={'5'} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
        <Select m={"3"} placeholder="SELECT A DEPARTMENT">
          <option value="CORPORATE SALES">CORPORATE SALES</option>
          <option value="INTERESTING IN FRANCHISE">
            INTERESTING IN FRANCHISE
          </option>
          <option value="CUSTOMER CARE">CUSTOMER CARE</option>
          <option value="ADVERTISE WITH GOLD GYM">
            ADVERTISE WITH GOLD GYM
          </option>
        </Select>
        <Input
          m={"3"}
          placeholder="ENTER NAME"
        ></Input>
        <Input m={"3"} placeholder="ENTER EMAIL"></Input>
        <Input m={"3"} placeholder="ENTER CONTACT NO"></Input>
        <Input m={"3"} placeholder="ENTER SUBJECT"></Input>
        <Input m={"3"} placeholder="ENTER LOCATION"></Input>
        <Button colorScheme="yellow">SUBMIT</Button>
        </Box>
      </FormControl>
      <Text p={'20'} w={["", "50%"]}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia eaque sint veritatis! Non, nulla officia eligendi quos impedit voluptatum illum? Nihil tempore consequuntur accusantium officiis, voluptatem rem earum commodi, sapiente ab sed veniam iste nobis possimus deserunt quasi aspernatur itaque quo ut culpa? Quos, voluptas eaque beatae ab porro repellendus neque suscipit corrupti est molestiae numquam rem facere culpa illum amet odit! Quae sint, excepturi dicta eius officiis voluptatibus laudantium blanditiis nihil earum dignissimos praesentium! Architecto quos molestias, maxime nihil assumenda illum eum amet, alias ab, pariatur laborum! Quibusdam aperiam adipisci qui eaque non illum consequuntur, sunt mollitia?</Text>
    </HStack>
    </>
  );
};

export default Contact;
