import React from 'react'
import { Flex, Text, Image, Input, Box, Button } from '@chakra-ui/react'
import CarouselTips from '@components/carouselTips'

const RoadmapContainer = ({}) => {
  return (
    <Flex paddingTop='64rem' flexDirection='column' paddingBottom='10rem'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image
          src='/assets/images/title/roadmap.png'
          width={{ base: '95%', m: '20%' }}
        />
      </Flex>
      <Flex marginTop={{ base: '48rem', m: '64rem' }} width='100%'>
        <CarouselTips />
      </Flex>
    </Flex>
  )
}

export default RoadmapContainer
