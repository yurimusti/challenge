import React, { useState } from 'react'
import { Box, Text, Image, Flex } from '@chakra-ui/react'

import list from './options'

const Carousel = () => {
  const [index, setIndex] = useState({ previous: 0, current: 1, next: 2 })

  const _onChange = (type) => {
    let newIndex = 0
    if (type === 'next')
      newIndex = index.current === list.length - 1 ? 0 : index.current + 1

    if (type === 'previous')
      newIndex = index.current === 0 ? list.length - 1 : index.current - 1

    setIndex({
      previous: newIndex === 0 ? list.length - 1 : newIndex - 1,
      current: newIndex,
      next: newIndex === list.length - 1 ? 0 : newIndex + 1,
    })
  }

  return (
    <Flex
      flexDirection='row'
      marginTop={{ base: '16rem', m: '32rem' }}
      marginBottom={{ base: '16rem', m: '32rem' }}
    >
      <Box flex={1}>
        <Flex
          position='relative'
          justifyContent='center'
          alignItems='center'
          height='100%'
        >
          <Image
            zIndex={3}
            position='absolute'
            width='100%'
            src={list[index.previous].imageUrl}
            opacity={0.5}
            left='-5%'
          />
          <Image
            zIndex={4}
            position='absolute'
            width='60rem'
            top='38%'
            src='/assets/images/carrousel/left.png'
            onClick={() => _onChange('previous')}
            cursor='pointer'
            right='10%'
          />
        </Flex>
      </Box>
      <Box flex={1}>
        <Image src={list[index.current].imageUrl} />
      </Box>
      <Box flex={1}>
        <Flex
          justifyContent='center'
          alignItems='center'
          height='100%'
          position='relative'
        >
          <Image
            zIndex={3}
            position='absolute'
            width='100%'
            src={list[index.next].imageUrl}
            opacity={0.5}
            right='-5%'
          />
          <Image
            zIndex={4}
            position='absolute'
            width='60rem'
            top='38%'
            src='/assets/images/carrousel/right.png'
            onClick={() => _onChange('next')}
            cursor='pointer'
            left='10%'
          />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Carousel
