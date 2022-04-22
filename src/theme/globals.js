import { createBreakpoints } from '@chakra-ui/theme-tools'
import { remTable } from './remTable'

export const breakpoints = createBreakpoints({
  sm: '320px',
  md: '640px',
  lg: '1440px',
})

export const colors = {
  navyBlue: '#1665db',
  darkBackground: '#000000',
  darkBackground2: '#080D23',
  lightText: '#FFFFFF',
  darkText: '#000000',
  grayText: '#9CA7B8',
  primary: '#1665db',
}

export const fonts = {
  body: 'Orbitron, sans-serif',
  heading: 'Orbitron, sans-serif',
  mono: 'Menlo, monospace',
}

export const fontSizes = remTable

export const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: '110%',
  short: '120%',
  base: '130%',
  tall: '140%',
  taller: '150%',
  ...remTable,
}

export const space = remTable

export const styles = {
  global: {
    body: {
      color: 'lightText',
    },
    mark: {
      color: 'lightText',
      bgColor: 'primary',
    },
  },
}

export const textStyles = {
  hxl: {
    fontWeight: 700,
    fontSize: ['80rem'],
    lineHeight: '110%',
  },
  h1: {
    fontWeight: 700,
    fontSize: ['60rem'],
    lineHeight: '120%',
  },
  h2: {
    fontWeight: 700,
    fontSize: ['52rem'],
    lineHeight: '120%',
  },
  h3: {
    fontSize: ['34rem'],
    lineHeight: '140%',
  },
  h4: {
    fontSize: ['32rem'],
    lineHeight: '140%',
  },
  h5: {
    fontSize: ['30rem'],
    lineHeight: '130%',
  },
  h6: {
    fontSize: ['26rem'],
    lineHeight: '130%',
  },
  pxl: {
    fontSize: ['24rem'],
    lineHeight: '140%',
  },
  plg: {
    fontSize: ['20rem'],
    lineHeight: '140%',
  },
  pmd: {
    fontSize: ['18rem'],
    lineHeight: '140%',
  },
  p: {
    fontSize: ['16rem'],
    lineHeight: '140%',
  },
  psm: {
    fontSize: ['14rem'],
    lineHeight: '150%',
  },
  pxs: {
    fontSize: ['12rem'],
    lineHeight: '145%',
  },
  list: {
    color: 'lightText',
    fontSize: ['16rem'],
    lineHeight: '230%',
  },
}
