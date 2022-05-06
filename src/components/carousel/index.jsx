import React, { useState } from 'react'
import {
  Box,
  Text,
  Image,
  Flex,
  SlideFade,
  useBreakpointValue,
  useDisclosure,
  Slide,
} from '@chakra-ui/react'

import list from './options'

const Carousel = () => {
  const [index, setIndex] = useState({ previous: 0, current: 1, next: 2 })

  // const { isOpen, onToggle } = useDisclosure()

  const isMobile = useBreakpointValue({
    base: true,
    m: false,
  })

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
    // onToggle()
    // onToggle()
  }

  return (
    <Flex
      flexDirection='column'
      w={{ base: 'auto', m: '100%' }}
      maxW={{ base: 'none', m: '1075rem' }}
      backgroundImage={{
        base: '/assets/images/mobile/shapeCarousel.png',
        m: '/assets/images/shapeCarousel.png',
      }}
      backgroundRepeat='round'
      backgroundSize='cover'
      padding={{ base: '32rem', m: '64rem' }}
      margin={{ base: '7rem', m: '50rem auto' }}
    >
      <Flex flexDirection='row'>
        {isMobile === false && (
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
                width='80%'
                src={list[index.previous].imageUrl}
                opacity={0.5}
              />

              <Image
                zIndex={4}
                position='absolute'
                width='20%'
                top='40%'
                src='/assets/images/carrousel/left.png'
                onClick={() => _onChange('previous')}
                cursor='pointer'
              />
            </Flex>
          </Box>
        )}
        <Box flex={1}>
          <Image src={list[index.current].imageUrl} width='100%' />
        </Box>

        {isMobile === false && (
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
                width='80%'
                src={list[index.next].imageUrl}
                opacity={0.5}
              />
              <Image
                zIndex={4}
                position='absolute'
                width='20%'
                top={{ base: '150%', m: '38%' }}
                src='/assets/images/carrousel/right.png'
                onClick={() => _onChange('next')}
                cursor='pointer'
              />
            </Flex>
          </Box>
        )}
      </Flex>
      <Flex justifyContent='center' alignItems='center'>
        <Text
          letterSpacing='0.1em'
          fontWeight='300'
          lineHeight={{ base: '140%', m: '180%' }}
          fontSize='14rem'
          px={{ base: '38rem', m: '300rem' }}
          textAlign={{ base: 'center', m: 'justify' }}
        >
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit
        </Text>
      </Flex>
      {isMobile === true && (
        <Flex flexDirection='row' justifyContent='center' marginTop='24rem'>
          <Image
            width='12%'
            src='/assets/images/carrousel/left.png'
            onClick={() => _onChange('previous')}
            cursor='pointer'
          />
          <Image
            width='12%'
            marginLeft='17rem'
            src='/assets/images/carrousel/right.png'
            onClick={() => _onChange('next')}
            cursor='pointer'
          />
        </Flex>
      )}
    </Flex>
  )
}

export default Carousel
