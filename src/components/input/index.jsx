import React from 'react'
import * as Styled from './style'

const Input = ({ value, onChange, ...rest }) => {
  return <Styled.Input value={value} onChange={onChange} {...rest} />
}

export default Input
