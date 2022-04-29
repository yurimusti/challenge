import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import Button from '@components/button'
import Input from '@components/input'

const RoadmapContainer = ({}) => {
  return (
    <Flex paddingTop='5rem' flexDirection='column' paddingBottom='10rem'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image src='/assets/images/title/roadmap.png' width='20%' />
      </Flex>
      <Flex marginTop='5rem' paddingLeft='5rem' paddingRight='5rem' mt='10rem'>
        <Box
          backgroundImage='/assets/images/whitelist.png'
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          width='100%'
          height='50rem'
          position='relative'
        >
          <Box top='7rem' left='9rem' position='absolute'>
            <Text fontSize='2.4rem'>Join the whitelist</Text>
          </Box>
          <Flex
            top='8rem'
            left='9rem'
            position='absolute'
            flexDirection='column'
            marginTop='3rem'
          >
            <Text letterSpacing='0.14em' lineHeight='190%'>
              Duis dapibus eleifend dolor, at placerat est interdum id. Maecenas
              at velit lectus. Fusce{' '}
            </Text>
            <Text letterSpacing='0.14em' lineHeight='190%'>
              consectetu Duis dapibus eleifend dolor, at placerat est interdum
              id. Maecenas at velit{' '}
            </Text>
          </Flex>
          <Flex width='70%' top='17rem' left='9rem' position='absolute'>
            <Input placeholder='Enter your email' style={{ marginRight: 8 }} />
            <Button>Join now</Button>
          </Flex>
        </Box>
      </Flex>
      <Box
        backgroundImage='/assets/images/background/waves.png'
        backgroundSize='contain'
        backgroundRepeat='no-repeat'
      >
        <Box>
          <Image src='/assets/images/marquee.png' width='100%' />
        </Box>
      </Box>
    </Flex>
  )
}

export default RoadmapContainer
