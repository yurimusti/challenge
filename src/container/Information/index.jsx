import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../assets/lottie/animationText01.json'
import Button from '@components/button'

const BannerContainer = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }
  return (
    <Flex paddingTop='4rem' flexDirection='column'>
      <Lottie options={defaultOptions} height='120px' />
      <Flex
        marginTop='6rem'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Text fontSize='2rem' textTransform='uppercase'>
          The only nft collection that
        </Text>
        <Text fontSize='2rem' marginTop='1rem' textTransform='uppercase'>
          gives you acces klooma!
        </Text>
      </Flex>
      <Flex flexDirection='row' marginTop='5rem'>
        <Text
          fontSize='.8rem'
          fontWeight=''
          paddingLeft='10rem'
          letterSpacing='0.1em'
          lineHeight='190%'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          ante et felis varius dapibus non sit amet massa. Nam posuere lacus
          tempor, sollicitudin elit sit amet, viverra ante. Nulla tincidunt eu
          quam at posuere. Phasellus neque elit, ornare at faucibus
        </Text>
        <Text
          fontSize='.8rem'
          paddingLeft='2rem'
          paddingRight='10rem'
          letterSpacing='0.1em'
          lineHeight='190%'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in
          ante et felis varius dapibus non sit amet massa. Nam posuere lacus
          tempor, sollicitudin elit sit amet, viverra ante. Nulla tincidunt eu
          quam at posuere. Phasellus neque elit, ornare at faucibus
        </Text>
      </Flex>
      <Flex justifyContent='center' alignItems='center' marginTop='4rem'>
        <Button>Download Klooma</Button>
      </Flex>
      <Flex width='100%' justifyContent='center' marginTop='5rem'>
        <Box>
          <Image
            src='/assets/images/cellphones.png'
            width='100%'
            height='100%'
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default BannerContainer
