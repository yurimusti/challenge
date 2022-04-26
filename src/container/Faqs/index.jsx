import React from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'

const FaqContainer = ({}) => {
  return (
    <Flex paddingTop='0rem' flexDirection='column'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image src='/assets/images/title/faqs.png' width='20%' />
      </Flex>
    </Flex>
  )
}

export default FaqContainer
