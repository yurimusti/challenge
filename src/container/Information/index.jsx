import React from 'react'
import { Flex, Text, Image, Box, useBreakpointValue } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/animationText01.json'
import Button from '@components/button'

const BannerContainer = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  const srcImage = useBreakpointValue({
    base: '/assets/images/mobile/cellphones.png',
    m: '/assets/images/cellphones.png',
  })

  return (
    <Flex paddingTop='4rem' flexDirection='column'>
      <Lottie options={defaultOptions} height='120px' />
      <Flex
        marginTop='64rem'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign={{ base: 'center', m: 'justify' }}
      >
        <Text
          fontSize='32rem'
          fontWeight='700'
          lineHeight='130%'
          textTransform='uppercase'
        >
          The only nft collection that
        </Text>
        <Text
          fontSize='32rem'
          fontWeight='700'
          lineHeight='130%'
          letterSpacing='0.1em'
          textTransform='uppercase'
        >
          gives you acces klooma!
        </Text>
      </Flex>
      <Flex flexDirection={{ base: 'column', m: 'row' }} marginTop='64rem'>
        <Text
          fontSize={{ base: '12rem', m: '16rem' }}
          paddingLeft={{ base: '24rem', m: '160rem' }}
          letterSpacing='0.1em'
          lineHeight='190%'
          textAlign='center'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          ante et felis varius dapibus non sit amet massa. Nam posuere lacus
          tempor, sollicitudin elit sit amet, viverra ante. Nulla tincidunt eu
          quam at posuere. Phasellus neque elit, ornare at faucibus
        </Text>
        <Text
          marginTop={{ base: '24rem', m: '0rem' }}
          fontSize={{ base: '12rem', m: '16rem' }}
          paddingLeft='16rem'
          paddingRight={{ base: '24rem', m: '160rem' }}
          letterSpacing='0.1em'
          lineHeight='190%'
          textAlign='center'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          ante et felis varius dapibus non sit amet massa. Nam posuere lacus
          tempor, sollicitudin elit sit amet, viverra ante. Nulla tincidunt eu
          quam at posuere. Phasellus neque elit, ornare at faucibus
        </Text>
      </Flex>
      <Flex justifyContent='center' alignItems='center' marginTop='64rem'>
        <Button>Download Klooma</Button>
      </Flex>
      <Flex width='100%' justifyContent='center' marginTop='64rem'>
        <Box>
          <Image
            src={srcImage}
            width={{ base: '100%', m: '100%' }}
            height={{ base: '100%', m: '100%' }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default BannerContainer
