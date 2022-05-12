import React from 'react'
import { Flex, Box, Text, Image } from '@chakra-ui/react'

const Footer = ({ onClickSocial = () => {} }) => {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column', m: 'row' }}
        alignItems='center'
        paddingTop='50rem'
        minHeight={{ base: '301rem', m: '271rem' }}
      >
        <Flex flex={1} paddingLeft={{ base: '0rem', m: '78rem' }}>
          <Box
            backgroundImage='/assets/images/logo.png'
            height='50rem'
            width='198rem'
            backgroundRepeat='no-repeat'
            backgroundSize='contain'
          />
        </Flex>
        <Flex flex={1} justifyContent='center' alignItems='center'>
          <Text fontSize={{ base: '16rem', m: '16rem' }} fontFamily='Manrope'>
            ©2022 Klooma. All rights reserved
          </Text>
        </Flex>
        <Flex
          flex={1}
          justifyContent={{ base: 'center', m: 'flex-end' }}
          alignItems='center'
          width='100%'
        >
          <Image
            src='/assets/images/social/facebook.png'
            width='32rem'
            height='32rem'
            cursor='pointer'
            onClick={() => onClickSocial('facebook')}
          />

          <Image
            src='/assets/images/social/instagram.png'
            width='32rem'
            height='32rem'
            marginLeft='22rem'
            marginRight='22rem'
            cursor='pointer'
            onClick={() => onClickSocial('instagram')}
          />

          <Image
            src='/assets/images/social/twitter.png'
            width='32rem'
            height='32rem'
            marginRight={{ base: '0rem', m: '72rem' }}
            cursor='pointer'
            onClick={() => onClickSocial('twitter')}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Footer
