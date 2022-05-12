import Head from 'next/head'
import React, { useRef, useEffect } from 'react'

import { Flex, Box } from '@chakra-ui/react'

import BannerContainer from '../container/Banner'
import InformationContainer from '../container/Information'
import RarityContainer from '../container/RarityLevels'
import FaqsContainer from '../container/Faqs'
import RoadmapContainer from '../container/Roadmap'
import WhitelistContainer from '../container/Whitelist'
import FooterContainer from '../container/Footer'

const Home = ({}) => {
  const videoRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 5000)
  }, [videoRef])

  return (
    <>
      <Head>
        <title>Klooma NFT</title>
      </Head>
      <Box
        backgroundImage={{
          base: '/assets/images/background/bgMobile.png',
          m: '/assets/images/background/bg.png',
        }}
        backgroundSize='100% 100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='top center'
      >
        <BannerContainer />
        <Flex flexDirection='column'>
          <InformationContainer />
          <RarityContainer />
          <FaqsContainer />
          <RoadmapContainer />
          <WhitelistContainer />
        </Flex>
        <Box position='relative'>
          <FooterContainer onClickSocial={(type) => {}} />
          <video
            aria-hidden='true'
            playsinline=''
            autoplay=''
            muted=''
            loop=''

            ref={videoRef}
          >
            <source src='/assets/images/background/bg.webm' type='video/webm' />
          </video>
        </Box>
      </Box>
    </>
  )
}

export default Home
