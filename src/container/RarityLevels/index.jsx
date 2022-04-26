import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/animationText01.json'

const BannerContainer = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }
  return (
    <Flex paddingTop='0rem' flexDirection='column'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image src='/assets/images/title/rarityLevel.png' width='20%' />
      </Flex>
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        marginTop='3rem'
      >
        <Text letterSpacing='0.1em' lineHeight='190%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          ante et felis
        </Text>
        <Text marginTop='0.6rem' letterSpacing='0.1em' lineHeight='190%'>
          varius dapibus non sit amet massa. Nam posuere lacus tempor,
          sollicitudin elit sit
        </Text>
      </Flex>
      <Box marginTop='5rem' paddingLeft='10rem' paddingRight='10rem'>
        <Image src='/assets/images/shapeCarousel.png' />
      </Box>
      <Box marginTop='5rem'>
        <Lottie options={defaultOptions} height='120px' />
      </Box>
    </Flex>
  )
}

export default BannerContainer
