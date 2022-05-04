import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react'

const AccordionComponent = ({
  data = [{ title: 'Example Title', text: 'Example Text' }],
  ...rest
}) => {
  return (
    <Accordion padding={{ base: '4rem', m: '4rem' }} {...rest}>
      {data.map((e, i) => (
        <AccordionItem
          key={`${i}_${e.title}`}
          borderTopWidth={{ base: '0rem !important', m: '0rem !important' }}
          borderBottomWidth={{ base: '0rem !important', m: '0rem !important' }}
          marginTop={{ base: '32rem', m: '32rem' }}
          width='100%'
        >
          <AccordionButton
            border='1rem solid #fff'
            borderRadius='200rem'
            padding={{ base: '12rem', m: '16rem' }}
            paddingLeft={{ base: '32rem', m: '32rem' }}
            _expanded={{
              borderTopWidth: '0',
              borderBottomWidth: '0',
              border: '1px solid red',
              color: 'white',
            }}
            _focus={{ boxShadow: 'none' }}
            width='100%'
          >
            <Box
              flex='1'
              textAlign='left'
              fontWeight='800'
              letterSpacing='0.16em'
            >
              <Text
                fontSize={{ base: '10rem', m: '12rem' }}
                fontWeight='600'
                lineHeight='130%'
                letterSpacing='0.12em'
                fontStyle='normal'
              >
                {' '}
                {e.title}{' '}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel
            marginTop={{ base: '16rem', m: '16rem' }}
            paddingLeft={{ base: '32rem', m: '32rem' }}
            minHeight='32rem'
          >
            <Text
              fontSize={{ base: '12rem', m: '14rem' }}
              fontWeight='600'
              lineHeight='200%'
              letterSpacing='0.12em'
              fontStyle='normal'
            >
              {e.text}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionComponent
