import styled from 'styled-components'
import { Input as InputChakra } from '@chakra-ui/react'

export const Input = styled(InputChakra)`
  border: 1.40037px solid #ffffff;
  padding: 1.8rem;
  color: #fff;
  background: #00000077;

  &:focus {
    border: 1.40037px solid #ffffff;
    box-shadow: none;
  }
`
