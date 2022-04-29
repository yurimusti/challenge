import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'

import Button from '@components/button'
import Accordion from '@components/accordion'

const development = () => {
  return (
    <Flex flexDirection='column' bgColor='darkBackground' minHeight='100vh'>
      <Button type='primary'>Join now</Button>
      <Button type='secondary'>download klooma</Button>
      <Button type='alt'>Example here</Button>
      <Accordion />
    </Flex>
  )
}

export default development
