import React, { useRef } from 'react'
import { Flex, Image, Box } from '@chakra-ui/react'
import Accordion from '@components/accordion'
import { animationClose, animationZoomOut } from '@utils/animation'
import { useInViewport } from 'react-in-viewport'

const FaqContainer = ({}) => {
  const ref = useRef(null)

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: '-50px' },
    { disconnectOnLeave: true },
    {}
  )
  return (
    <Flex paddingTop='40rem' flexDirection='column'>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Image
          src='/assets/images/title/faqs.png'
          width={{ base: '95%', m: '20%' }}
        />
      </Flex>
      <Box
        marginTop={{base: '30rem', m: '48rem'}}
        ref={ref}
        display={{ base: 'grid', m: 'flex' }}
        px={{ base: '8rem', m: '80rem' }}
        justifyContent='center'
        alignItems='center'
        animation={inViewport ? animationZoomOut : animationClose}
      >
        <Accordion
          flex='1'
          data={[
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
          ]}
        />

        <Accordion
          flex='1'
          marginLeft={{ base: '0rem', m: '32rem' }}
          data={[
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
            {
              title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet nulla in odio vestibulum porta.',
            },
          ]}
        />
      </Box>
    </Flex>
  )
}

export default FaqContainer
