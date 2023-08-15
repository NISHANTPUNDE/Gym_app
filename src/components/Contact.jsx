import { Button, HStack, Input, Select, VStack,Text, FormControl } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
 
  return (
        <HStack p={'5'}>
          <FormControl>
          <Select  m={'3'} placeholder='SELECT A DEPARTMENT'>
            <option value="CORPORATE SALES">CORPORATE SALES</option>
            <option value="INTERESTING IN FRANCHISE">INTERESTING IN FRANCHISE</option>
            <option value="CUSTOMER CARE">CUSTOMER CARE</option>
            <option value="ADVERTISE WITH GOLD GYM">ADVERTISE WITH GOLD GYM</option>
          </Select>
          <Input focusBorderColor='white' m={'3'} placeholder='ENTER NAME'></Input>
          <Input m={'3'} placeholder='ENTER EMAIL'></Input>
          <Input m={'3'} placeholder='ENTER CONTACT NO'></Input>
          <Input m={'3'} placeholder='ENTER SUBJECT'></Input>
          <Input m={'3'} placeholder='ENTER LOCATION'></Input>
          <Button colorScheme='yellow'>SUBMIT</Button>
          </FormControl>          
          <Text w={['','50%']}>lndljn</Text>        
        </HStack>

  )
}

export default Contact