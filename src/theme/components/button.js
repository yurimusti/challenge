export const Button = {
  baseStyle: {
    color: '#fff',
    fontWeight: 800,
    fontSize: '16rem',
    textTransform: 'uppercase',
    width: '264rem',
    height: '60rem',
    borderRadius: '4rem',
    borderWidth: '2.5px',
    padding: '10rem',
    transition: 'all 0.3s ease',
    _before: {
      height: '0%',
      width: '2rem',
    },
    _hover: {
      bgColor: '#000',
    },
  },
  defaultProps: {
    size: '',
    variant: 'primary',
  },
  variants: {
    primary: {
      boxShadow:
        '0 5px 20px #ff0000, 0 0 5px #ff0000 inset, 3px 3px 40px 5px #ff0000 inset',
      _hover: {
        boxShadow:
          '0 3px 20px #ff0000, 0 0 60px #d70404 inset, 0 0 50px #ff0000 inset',
      },
    },
    secondary: {
      boxShadow:
        '0 5px 20px #33e9c6, 0 0 5px #33e9c6 inset, 3px 3px 40px 5px #33e9c6 inset',
      _hover: {
        boxShadow:
          '0 3px 20px #33e9c6, 0 0 60px #33e9c6 inset, 0 0 50px #33e9c6 inset',
      },
    },
    alt: {
      boxShadow:
        '0 5px 20px #ffffff, 0 0 5px #ffffff inset, 3px 3px 40px 5px #ffffff inset',
      _hover: {
        boxShadow:
          '0 3px 20px #ffffff, 0 0 60px #ffffff inset, 0 0 50px #ffffff inset',
      },
    },
  },
}
