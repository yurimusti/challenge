import { Collapse, keyframes } from '@chakra-ui/react'

const fadeRight = keyframes`
from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`

const float = keyframes`
    0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
    }
`

const fadeIn = keyframes`
 0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`
const fadeInUp = keyframes`
    from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    opacity: 0;
    transform: scale(1.1);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }`

const close = keyframes`
from {
opacity: 0;

}

to {
opacity: 0;

}`

const floatMedium = keyframes`
    0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-10px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
    }
`

export const animationFadeRight = `${fadeRight} 2s ease-in-out`

export const animationFloat = `${float} 4s ease-in-out infinite`

export const animationFadeIn = `${fadeIn} 2s ease-in-out`

export const animationZoomOut = `${fadeInUp} 4s ease-in-out`

export const animationClose = `${close} 1s ease-in-out`

export const animationFloatMedium = `${floatMedium} 4s ease-in-out infinite`