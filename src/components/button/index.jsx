import React, { useState, useEffect } from 'react'
import * as Styled from './style'

const Button = ({ type = 'primary', onClick = () => {}, children }) => {
  const _renderType = () => {
    switch (type) {
      case 'primary':
        return <Styled.ButtonPrimary>{children}</Styled.ButtonPrimary>

      case 'secondary':
        return <Styled.ButtonSecondary>{children}</Styled.ButtonSecondary>

      case 'alt':
        return <Styled.ButtonAlt>{children}</Styled.ButtonAlt>
      default:
        break
    }
  }

  return _renderType()
}

export default Button
