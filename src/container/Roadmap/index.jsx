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
      <Flex marginTop={{ base: '64rem', m: '64rem' }} width='100%'>
        <CarouselTips />
      </Flex>
      <Flex marginTop='120rem' px={{ base: '8rem', m: '90rem' }}>
        <Box
          backgroundImage={{
            base: '/assets/images/mobile/whitelist.png',
            m: '/assets/images/whitelist.png',
          }}
          backgroundPosition='center'
          backgroundSize='100%'
          backgroundRepeat='no-repeat'
          width='100%'
          height='625rem'
          position='relative'
        >
          <Box
            top={{ base: '130rem', m: '205rem' }}
            left={{ base: '48rem', m: '144rem' }}
            position='absolute'
          >
            <Text
              fontSize={{ base: '18rem', m: '28rem' }}
              fontWeight='800'
              lineHeight='170%'
              letterSpacing='0.1em'
              textTransform='uppercase'
            >
              Join the whitelist
            </Text>
          </Box>
          <Flex
            top={{ base: '180rem', m: '276rem' }}
            left={{ base: '0rem', m: '144rem' }}
            paddingLeft={{ base: '42rem', m: '0rem' }}
            paddingRight={{ base: '42rem', m: '64rem' }}
            position='absolute'
            flexDirection='column'
            marginTop='3rem'
          >
            <Text
              letterSpacing='0.14em'
              lineHeight='140%'
              fontWeight='400'
              fontSize={{ base: '14rem', m: '16rem' }}
              textAlign={{ base: 'center', m: 'initial' }}
            >
              Duis dapibus eleifend dolor, at placerat est interdum id. Maecenas
              at velit lectus. Fusce consectetu Duis dapibus eleifend dolor, at
              placerat est interdum id. Maecenas at velit
            </Text>
          </Flex>
          <Flex
            flexDirection={{ base: 'column', m: 'row' }}
            width={{ base: '100%', m: '70%' }}
            top={{ base: '335rem', m: '372rem' }}
            left={{ base: '', m: '144rem' }}
            position='absolute'
            paddingLeft={{ base: '16rem', m: '0' }}
            paddingRight={{ base: '16rem', m: '0' }}
          >
            <Input
              bgColor='transparent'
              h={{ base: '58rem', m: '60rem' }}
              placeholder='Enter your email'
              style={{ marginRight: 8 }}
              mt={{ base: '10rem', m: '0' }}
              marginBottom={{ base: '8rem', m: '0' }}
              fontSize={{ base: '14rem', m: '16rem' }}
            />
            <Button
              width={{ base: '100%', m: '364rem' }}
              h={{ base: '58rem', m: '60rem' }}
            >
              Join now
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Box paddingTop='90rem'>
        <Image src='/assets/images/marquee.png' width='100%' />
      </Box>
    </Flex>
  )
}

export default RoadmapContainer
