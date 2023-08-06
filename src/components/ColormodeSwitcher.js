import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';
import {MoonIcon} from '@chakra-ui/icons';
const ColormodeSwitcher = () => {
    const {toggleColorMode}=useColorMode();
  return (
    <Button position={'absolute'} top={4} right={4} onClick={toggleColorMode}>
      <MoonIcon/>
    </Button>
  )
}

export default ColormodeSwitcher