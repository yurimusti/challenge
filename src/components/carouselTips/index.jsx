import React, { useState } from 'react'
import { Box, Image, Flex, useBreakpointValue } from '@chakra-ui/react'

import { desktop, mobile } from './options'

const Carousel = () => {
  const [index, setIndex] = useState({
    previous: desktop.length - 1,
    current: 0,
    next: 1,
  })

  const isMobile = useBreakpointValue({
    base: true,
    m: false,
  })

  const srcCurrent = useBreakpointValue({
    base: mobile[index.current].imageUrl,
    m: desktop[index.current].imageUrl,
  })

  const _onChange = (type) => {
    let newIndex = 0
    if (type === 'next')
      newIndex = index.current === desktop.length - 1 ? 0 : index.current + 1

    if (type === 'previous')
      newIndex = index.current === 0 ? desktop.length - 1 : index.current - 1

    setIndex({
      previous: newIndex === 0 ? desktop.length - 1 : newIndex - 1,
      current: newIndex,
      next: newIndex === desktop.length - 1 ? 0 : newIndex + 1,
    })
  }

  return (
    <Flex
      flexDirection={{ base: 'column', m: 'row' }}
      marginTop={{ base: '16rem', m: '32rem' }}
      marginBottom={{ base: '16rem', m: '32rem' }}
      width='100%'
      height={{ base: '100%', m: '100%' }}
    >
      {isMobile === false && (
        <Box flex={1}>
          <Flex
            position='relative'
            justifyContent='center'
            alignItems='center'
            height='100%'
          >
            {index.current !== 0 && (
              <>
                <Box
                  zIndex={3}
                  position='absolute'
                  minWidth='320rem'
                  minHeight='400rem'
                  backgroundImage={{
                    base: mobile[index.previous].imageUrl,
                    m: desktop[index.previous].imageUrl,
                  }}
                  backgroundSize='cover'
                  backgroundRepeat='no-repeat'
                  backgroundPosition='right center'
                  opacity={0.5}
                  left={{ base: '0%', m: '5%' }}
                />

                <Image
                  zIndex={4}
                  position='absolute'
                  width='88rem'
                  src='/assets/images/carrousel/left.png'
                  onClick={() => _onChange('previous')}
                  cursor='pointer'
                  right={{ base: '-170%', m: '15%' }}
                  top={{ base: '110%', m: '40%' }}
                />
              </>
            )}
          </Flex>
        </Box>
      )}
      <Box flex={1}>
        <Image
          src={srcCurrent}
          minWidth={{ base: '349rem', m: '711rem' }}
          minHeight={{ base: '400rem', m: '400rem' }}
        />
      </Box>
      {isMobile === false && (
        <Box flex={1}>
          <Flex
            justifyContent='center'
            alignItems='center'
            height='100%'
            position='relative'
          >
            {index.current !== desktop.length - 1 && (
              <>
                <Box
                  zIndex={3}
                  position='absolute'
                  minWidth='320rem'
                  minHeight='400rem'
                  backgroundImage={{
                    base: mobile[index.next].imageUrl,
                    m: desktop[index.next].imageUrl,
                  }}
                  backgroundSize='cover'
                  backgroundRepeat='no-repeat'
                  backgroundPosition='left center'
                  opacity={0.5}
                  right='5%'
                />

                <Image
                  zIndex={4}
                  position='absolute'
                  width='88rem'
                  src='/assets/images/carrousel/right.png'
                  onClick={() => _onChange('next')}
                  cursor='pointer'
                  left={{ base: '-140%', m: '15%' }}
                  top={{ base: '110%', m: '40%' }}
                />
              </>
            )}
          </Flex>
        </Box>
      )}
      {isMobile === true && (
        <Flex flexDirection='row' justifyContent='center' marginTop='40rem'>
          {index.current !== 0 && (
            <Image
              boxSize='43rem'
              src='/assets/images/carrousel/left.png'
              onClick={() => _onChange('previous')}
              cursor='pointer'
            />
          )}
          {index.current !== desktop.length - 1 && (
            <Image
              marginLeft='17rem'
              boxSize='43rem'
              src='/assets/images/carrousel/right.png'
              onClick={() => _onChange('next')}
              cursor='pointer'
            />
          )}
        </Flex>
      )}
    </Flex>
  )
}

export default Carousel
