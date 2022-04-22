import React, { useState, useEffect } from 'react'
import { Box, Text, Image } from '@chakra-ui/react'

import primary_regular_normal from '@images/buttons/primary_regular_normal.png'
import primary_regular_hover from '@images/buttons/primary_regular_hover.png'

const Button = ({ type = 'primary', onClick = () => {} }) => {
  const [_valueSrc, _setValueSrc] = useState('')
  const [_hover, _setHover] = useState(false)

  useEffect(() => {
    switch (type) {
      case 'primary':
        _setValueSrc(
          _hover ? primary_regular_hover.src : primary_regular_normal.src
        )
        break

      default:
        break
    }
  }, [type, _hover])

  return (
    <Box>
      <Image
        style={{ cursor: 'pointer' }}
        src={_valueSrc}
        onMouseOver={() => _setHover(true)}
        onMouseLeave={() => {
          _setHover(false)
        }}
        onClick={onClick}
      />
    </Box>
  )
}

export default Button
