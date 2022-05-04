import styled from 'styled-components'
import {
  Accordion as AccordionChakra,
  AccordionButton as AccordionButtonChakra,
  AccordionIcon as AccordionIconChakra,
  AccordionItem as AccordionItemChakra,
  AccordionPanel as AccordionPanelChakra,
  Box as BoxChakra,
} from '@chakra-ui/react'

export const Accordion = styled(AccordionChakra)`
  padding: 4rem !important;
`
export const AccordionButton = styled(AccordionButtonChakra)`
  border: 1px solid #fff;
  border-radius: 200px;
  padding: 12px !important;
  padding-left: 32px !important;

  &:focus {
    box-shadow: none;
  }
`
export const AccordionIcon = styled(AccordionIconChakra)``
export const AccordionItem = styled(AccordionItemChakra)`
  border-top-width: 0px !important;
  border-bottom-width: 0px !important;
  margin-top: 2rem;
`
export const AccordionPanel = styled(AccordionPanelChakra)`
  margin-top: 1rem;
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 130%;
  letter-spacing: 0.16em;
  padding-left: 32px;
`

export const Box = styled(BoxChakra)`
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 130%;
  letter-spacing: 0.16em;
`
