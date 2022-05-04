import { extendTheme } from '@chakra-ui/react'
import { Button } from './components/button'
import {
  breakpoints,
  colors,
  fontSizes,
  fonts,
  lineHeights,
  space,
  styles,
  textStyles,
} from './globals'

const theme = extendTheme({
  breakpoints,
  colors,
  fonts,
  fontSizes,
  lineHeights,
  space,
  styles,
  textStyles,
  components: {
    Button,
  },
})

export default theme
