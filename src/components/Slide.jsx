import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerHeader,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {FaAngleDoubleRight} from "react-icons/fa"
const Slide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box marginBottom={6}>
        <Button
          position={'fixed'}
          top={"4"}
          left={"4"}
          colorScheme="linkedin"
          onClick={onOpen}
          borderRadius={'full'}
          zIndex={'overlay'}
        >
          <FaAngleDoubleRight/>
        </Button>
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>MyGym</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"unstyled"}>
                <Link to={"/"}>Home </Link>
              </Button>
              <Button onClick={onClose} variant={"unstyled"}><Link to={"/Gallery"}>Gallery</Link></Button>
              <Button onClick={onClose} variant={"unstyled"}><Link to={"/Program"}>Program</Link></Button>
              <Button onClick={onClose} variant={"unstyled"}><Link to={"/Franchise"}>Franchise</Link></Button>
              <Button onClick={onClose} variant={"unstyled"}><Link to={"/Contact"}>Contact</Link></Button>
              <Button onClick={onClose} variant={"unstyled"}>About Us</Button>
            </VStack>
            <HStack
              position={"absolute"}
              width={"full"}
              bottom={"6"}
              left={"0"}
              justifyContent={"space-around"}
            >
              <Button variant={"solid"} colorScheme="linkedin">
                log in
              </Button>
              <Button variant={"solid"} colorScheme="linkedin">
                sign up
              </Button>
            </HStack>
          </DrawerBody>
          <DrawerCloseButton></DrawerCloseButton>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Slide;
