import React from 'react'
import { Button, Flex, Text, Image, Input, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import {
  animationFadeRight,
  animationFloat,
  animationFadeIn,
} from '@utils/animation'

const BannerContainer = ({}) => {
  return (
    <Flex direction='column' maxW='1200rem' mx={{ base: '0', m: 'auto' }}>
      <Box
        backgroundImage='/assets/images/logo.png'
        height='50rem'
        width='198rem'
        backgroundRepeat='no-repeat'
        backgroundSize='contain'
        mt={{ base: '27rem', m: '59rem' }}
        mx={{ base: 'auto', m: '0' }}
      />

      <Flex
        as={motion.div}
        animation={animationFloat}
        backgroundImage='/assets/images/shapeInitial.png'
        backgroundRepeat='no-repeat'
        w='100%'
        h='458rem'
        backgroundSize='100% 100%'
        backgroundPosition='center'
        direction={{ base: 'column', m: 'row' }}
        alignItems='center'
        justifyContent='center'
        pl={{ base: '0', m: '100rem' }}
        mt='70rem'
      >
        <Image
          as={motion.img}
          animation={animationFadeIn}
          order={{ base: '1', m: '0' }}
          src='/assets/images/welcomeText.png'
          width={{ base: '260rem', m: '696rem' }}
        />

        <Image
          as={motion.img}
          animation={animationFadeRight}
          src='/assets/images/robotInitial.png'
          h={{ base: '335rem', m: '640rem' }}
          position={{ base: 'static', m: 'relative' }}
          bottom='90rem'
          mt={{ base: '-85rem', m: '0' }}
        />
      </Flex>
      <Flex
        direction={{ base: 'column', m: 'row' }}
        justify={{ base: 'center', m: 'space-between' }}
        align='center'
        px={{ base: '8.5rem', m: '30rem' }}
        mt={{ base: '37rem', m: '46rem' }}
        paddingInlineEnd={{base: '', m: '120rem'}}
      >
        <Flex>
          <Text fontWeight={800} letterSpacing='2rem' fontSize='18rem'>
            JOIN THE WHITELIST
          </Text>
        </Flex>
        <Flex
          direction={{ base: 'column', m: 'row' }}
          w={{ base: '100%', m: '780rem' }}
          gap={{ base: '25rem', m: '4rem' }}
          mt={{ base: '19rem', m: '0' }}
        >
          <Input
            w='100%'
            maxW={{ base: 'none', m: '645rem' }}
            h='60rem'
            placeholder='Enter your email'
            fontSize={{ base: '12rem', m: '14rem' }}
          />
          <Button
            w={{ base: '100%', m: '264rem' }}
            h='60rem'
            fontSize={{ base: '16rem' }}
          >
            JOIN NOW
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default BannerContainer
