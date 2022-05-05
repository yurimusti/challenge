import React, { useState, useEffect } from 'react'
import * as Styled from './style'

const Button = ({
  type = 'primary',
  onClick = () => {},
  children,
  ...rest
}) => {
  const _renderType = () => {
    switch (type) {
      case 'primary':
        return <Styled.ButtonPrimary {...rest}>{children}</Styled.ButtonPrimary>

      case 'secondary':
        return (
          <Styled.ButtonSecondary {...rest}>{children}</Styled.ButtonSecondary>
        )

      case 'alt':
        return <Styled.ButtonAlt {...rest}>{children}</Styled.ButtonAlt>
      default:
        break
    }
  }

  return _renderType()
}

export default Button
