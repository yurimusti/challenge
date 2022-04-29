import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import Accordion from '@components/accordion'

const FaqContainer = ({}) => {
  return (
    <Flex paddingTop='0rem' flexDirection='column'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image src='/assets/images/title/faqs.png' width='20%' />
      </Flex>
      <Flex
        width='100%'
        paddingLeft='5rem'
        paddingRight='5rem'
        justifyContent='center'
        alignItems='center'
      >
        <Accordion
          style={{ flex: 1 }}
          data={[
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
          ]}
        />

        <Accordion
          style={{ flex: 1 }}
          data={[
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
            { title: 'Example Title', text: 'Example Text' },
          ]}
        />
      </Flex>
    </Flex>
  )
}

export default FaqContainer
