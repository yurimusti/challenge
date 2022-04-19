export const Button = {
  baseStyle: {
    fontWeight: 700,
    borderRadius: '100rem',
    textTransform: 'uppercase',
    _disabled: {
      bgColor: 'grayText',
      color: '#00000066',
    },
    _hover: {
      _disabled: {
        bgColor: 'grayText',
        color: '#00000066',
      },
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'primary',
  },
  sizes: {
    xs: {
      fontSize: '10rem',
      height: '30rem',
      px: '30rem',
    },
    sm: {
      fontSize: '14rem',
      height: '45rem',
      px: '30rem',
    },
    md: {
      fontSize: '16rem',
      height: '50rem',
      px: '30rem',
    },
    lg: {
      fontSize: '18rem',
      height: '63rem',
      px: '45rem',
    },
    xl: {
      fontSize: '20rem',
      height: '80rem',
      px: '50rem',
    },
  },

  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2rem 2rem #efdfde',
    },

    link: {
      color: 'grayText',
      border: 'none',
      height: 'fit-content',
      _hover: {
        color: 'lightText',
      },
      _active: {
        border: 'none',
        outline: 'none',
      },
      _focus: {
        border: 'none',
        outline: 'none',
      },
    },
    primary: {
      color: 'darkText',
      bgColor: '#FFF',
      _hover: {
        color: 'lightText',
        bgColor: 'primary',
      },
      _active: {
        color: 'lightText',
        outlineWidth: '2rem',
        outlineColor: 'primary',
        bgColor: 'transparent',
        filter: 'drop-shadow(0rem 0rem 10rem rgba(255, 255, 255, 0.9))',
      },
      _focus: {
        color: 'lightText',
        outlineWidth: '2rem',
        outlineColor: 'primary',
        boxShadow: 'none',
        bgColor: 'transparent',
        filter: 'drop-shadow(0rem 0rem 10rem rgba(255, 255, 255, 0.9))',
      },
    },
    alt: {
      color: 'lightText',
      borderWidth: '2rem',
      borderColor: '#FFF',
      bgColor: 'transparent',
      _hover: {
        color: 'lightText',
        borderWidth: '0',
        bgColor: 'primary',
      },
      _active: {
        color: 'lightText',
        borderWidth: '0',
        outlineWidth: '2rem',
        outlineColor: 'primary',
        bgColor: 'transparent',
        filter: 'drop-shadow(0rem 0rem 10rem rgba(255, 255, 255, 0.9))',
      },
      _focus: {
        color: 'lightText',
        borderWidth: '0',
        outlineWidth: '2rem',
        outlineColor: 'primary',
        boxShadow: 'none',
        bgColor: 'transparent',
        filter: 'drop-shadow(0rem 0rem 10rem rgba(255, 255, 255, 0.9))',
      },
    },
    secondary: {
      color: 'lightText',
      bgColor: 'primary',
      _hover: {
        color: 'primary',
        bgColor: '#FFF',
      },
      _active: {
        color: 'lightText',
        bgColor: 'primary',
        filter: 'drop-shadow(0rem 0rem 10rem rgba(255, 255, 255, 0.9))',
      },
      _focus: {
        color: 'lightText',
        boxShadow: 'none',
        bgColor: 'primary',
        filter: 'drop-shadow(0rem 0rem 10rem rgba(255, 255, 255, 0.9))',
      },
    },
  },
}
