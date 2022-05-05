import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/animationText01.json'
import Carousel from '@components/carousel'

const BannerContainer = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }
  return (
    <Flex paddingTop='0rem' flexDirection='column'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image
          src='/assets/images/title/rarityLevel.png'
          width={{ base: '95%', m: '20%' }}
        />
      </Flex>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        marginTop='48rem'
        paddingLeft={{ base: '24rem', m: '260rem' }}
        paddingRight={{ base: '24rem', m: '260rem' }}
      >
        <Text
          letterSpacing='0.1em'
          lineHeight={{ base: '180%', m: '190%' }}
          fontSize={{ base: '14rem', m: '16rem' }}
          fontWeight='300'
          textAlign='center'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          ante et felis varius dapibus non sit amet massa. Nam posuere lacus
          tempor, sollicitudin elit sit
        </Text>
      </Flex>
      <Box marginTop='5rem' paddingLeft='0rem' paddingRight='0rem'>
        <Carousel />
      </Box>
      <Box marginTop='5rem'>
        <Lottie options={defaultOptions} height='120px' />
      </Box>
    </Flex>
  )
}

export default BannerContainer
