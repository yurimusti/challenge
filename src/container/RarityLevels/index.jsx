import React from 'react'
import { Flex, Text, Img, Box, useBreakpointValue } from '@chakra-ui/react'
import Carousel from '@components/carousel'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/animationText01.json'

const BannerContainer = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const srcImage = useBreakpointValue({
    base: '/assets/images/robot01-mobile.png',
    m: '/assets/images/robot01.png',
  })

  return (
    <Flex paddingBottom='64rem' flexDirection='column'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Img
          src='/assets/images/title/rarityLevel.png'
          width={{ base: '95%', m: '20%' }}
        />
      </Flex>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        marginTop='48rem'
        paddingLeft={{ base: '32rem', m: '260rem' }}
        paddingRight={{ base: '32rem', m: '260rem' }}
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
      <Carousel />
      <Box marginTop='58rem' position='relative'>
        <Lottie options={defaultOptions} height={120} />
        <Img
          h={{ base: '110rem', m: '260rem' }}
          position='absolute'
          top='50%'
          transform='translateY(-50%)'
          src={srcImage}
        />
      </Box>
    </Flex>
  )
}

export default BannerContainer
