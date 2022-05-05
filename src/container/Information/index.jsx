import React from 'react'
import {
  Flex,
  Text,
  Image,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/animationText01.json'
// import Button from '@components/button'

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
    <Flex paddingTop={{ base: '320rem', m: '160rem' }} flexDirection='column'>
      <Lottie options={defaultOptions} height='120px' />
      <Flex
        marginTop='64rem'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign={{ base: 'center', m: 'center' }}
        marginLeft={{ base: '0rem', m: '321rem' }}
        marginRight={{ base: '0rem', m: '321rem' }}
      >
        <Text
          fontSize={{ base: '22rem', m: '32rem' }}
          fontWeight='700'
          lineHeight='130%'
          letterSpacing='0.1em'
          textTransform='uppercase'
        >
          The only nft collection that gives you acces klooma!
        </Text>
      </Flex>
      <Flex flexDirection={{ base: 'column', m: 'row' }} marginTop='64rem'>
        <Text
          fontSize={{ base: '12rem', m: '16rem' }}
          paddingLeft={{ base: '24rem', m: '160rem' }}
          paddingRight={{ base: '24rem', m: '0' }}
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
          paddingLeft={{ base: '24rem', m: '16rem' }}
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
        <Button width={{ base: '92%', m: '376rem' }}>Download Klooma</Button>
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
