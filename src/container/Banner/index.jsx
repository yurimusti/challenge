import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import Button from '@components/button'
import Input from '@components/input'

const BannerContainer = ({}) => {
  return (
    <>
      <Box
        backgroundImage='/assets/images/logo.png'
        height='5rem'
        width='100%'
        backgroundRepeat='no-repeat'
        marginTop='2rem'
      />
      <Image
        src='/assets/images/robotInitial.png'
        maxWidth='21rem'
        maxHeight='46rem'
        position='absolute'
        marginRight='10rem'
        top='0'
        right='0'
      />
      <Flex
        backgroundImage='/assets/images/shapeInitial.png'
        backgroundRepeat='no-repeat'
        height='70%'
        width='100%'
        backgroundSize='contain'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        paddingTop='4rem'
        paddingRight='16rem'
      >
        <Image src='/assets/images/welcomeText.png' width='40rem' />
      </Flex>
      <Flex flex={1} paddingBottom='2rem' marginLeft='1rem' marginRight='3rem'>
        <Flex flex={2} justifyContent='center' alignItems='center'>
          <Text fontSize='1.2rem'>JOIN THE WHITELIST</Text>
        </Flex>
        <Flex flex={3} justifyContent='center' alignItems='center'>
          <Input placeholder='Enter your email' />
        </Flex>
        <Flex flex={1} justifyContent='center' alignItems='center'>
          <Button>JOIN NOW</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default BannerContainer
