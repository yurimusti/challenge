import { Box, Text, Flex } from '@chakra-ui/react'
import React from 'react'

import Button from '@components/button'

const development = () => {
  return (
    <Flex
      justifyContent='space-around'
      bgColor='darkBackground'
      minHeight='100vh'
    >
      <Button type='primary'>Join now</Button>
      <Button type='secondary'>download klooma</Button>
      <Button type='alt'>Example here</Button>
    </Flex>
  )
}

export default development
