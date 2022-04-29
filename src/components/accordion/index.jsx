import React from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from './style'

const AccordionComponent = ({
  data = [{ title: 'Example Title', text: 'Example Text' }],
  ...rest
}) => {
  return (
    <Accordion {...rest}>
      {data.map((e, i) => (
        <AccordionItem key={`${i}_${e.title}`}>
          <h2>
            <AccordionButton
              _expanded={{
                borderTopWidth: '0',
                borderBottomWidth: '0',
                border: '1px solid red',
                color: 'white',
              }}
            >
              <Box flex='1' textAlign='left'>
                {e.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{e.text}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionComponent
