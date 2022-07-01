import React, { useEffect, useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'

const BannerContainer = ({ text = '' }) => {
  return (
    <Flex
      direction='column'
      minW='800rem'
      display='flex'
      justifyContent='center'
      alignItems='center'
      mt='40rem'
    >
      <Text color='#222222 ' fontSize='16rem'>
        {text}
      </Text>
    </Flex>
  )
}

export default BannerContainer
