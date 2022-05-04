import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import Accordion from '@components/accordion'

const FaqContainer = ({}) => {
  return (
    <Flex paddingTop='0rem' flexDirection='column'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image
          src='/assets/images/title/faqs.png'
          width={{ base: '95%', m: '20%' }}
        />
      </Flex>
      <Box
        display={{ base: 'grid', m: 'flex' }}
        paddingLeft={{ base: '80rem', m: '80rem' }}
        paddingRight={{ base: '80rem', m: '80rem' }}
        justifyContent='center'
        alignItems='center'
      >
        <Accordion
          flex='1'
          data={[
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
          ]}
        />

        <Accordion
          flex='1'
          marginLeft={{ base: '0rem', m: '32rem' }}
          data={[
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
          ]}
        />
      </Box>
    </Flex>
  )
}

export default FaqContainer
