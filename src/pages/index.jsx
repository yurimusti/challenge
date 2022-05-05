import Head from 'next/head'

import { Flex, Box } from '@chakra-ui/react'

import BannerContainer from '../container/Banner'
import InformationContainer from '../container/Information'
import RarityContainer from '../container/RarityLevels'
import FaqsContainer from '../container/Faqs'
import RoadmapContainer from '../container/Roadmap'
import FooterContainer from '../container/Footer'

const Home = ({}) => {
  return (
    <>
      <Head>
        <title>Klooma NFT</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        ></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@600&family=Orbitron:wght@400;500&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Box
        backgroundImage={{
          base: '/assets/images/background/bgMobile.png',
          m: '/assets/images/background/bg.png',
        }}
        backgroundSize='cover'
      >
        <Flex
          height='100vh'
          paddingLeft='10rem'
          paddingRight='10rem'
          flexDirection='column'
          position='relative'
        >
          <BannerContainer />
        </Flex>
        <Flex minHeight='400vh' flexDirection='column'>
          <InformationContainer />
          <RarityContainer />
          <FaqsContainer />
          <RoadmapContainer />
        </Flex>
        <Box>
          <FooterContainer onClickSocial={(type) => {}} />
        </Box>
      </Box>
    </>
  )
}

export default Home
