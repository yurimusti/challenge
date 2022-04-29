import React, { useState } from 'react'
import { Box, Text, Image, Flex } from '@chakra-ui/react'

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const [list, setList] = useState([
    {
      imageUrl: '/assets/images/carrousel/1.png',
      rarityLevel: 'Rare',
    },
    {
      imageUrl: '/assets/images/carrousel/2.png',
      rarityLevel: 'Rare 2',
    },
    {
      imageUrl: '/assets/images/carrousel/2.png',
      rarityLevel: 'Rare 3',
    },
    {
      imageUrl: '/assets/images/carrousel/2.png',
      rarityLevel: 'Rare 4',
    },
  ])

  return (
    <Flex flexDirection='row'>
      <Box flex={1}>
        {/* Previous button */}
        <Flex
          backgroundRepeat='no-repeat'
          backgroundSize='contain'
          backgroundImage='/assets/images/carrousel/active.png'
          position='relative'
        >
          <Image
            src='/assets/images/carrousel/left.png'
            position='absolute'
            width='5%'
          />
          <Text>Rare</Text>
        </Flex>
      </Box>
      {/* <Flex flexDirection='column'>
        <Image />
        <Text>
          {index === 0
            ? list[list.length - 1].rarityLevel
            : list[index - 1].rarityLevel}
        </Text>
      </Flex>
      <Box>
        <Image src='/assets/images/carrousel/right.png' />
      </Box> */}
    </Flex>
  )
}

export default Carousel
