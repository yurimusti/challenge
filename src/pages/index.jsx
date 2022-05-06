import Head from 'next/head'

import { Flex, Box } from '@chakra-ui/react'

import BannerContainer from '../container/Banner'
import InformationContainer from '../container/Information'
import RarityContainer from '../container/RarityLevels'
import FaqsContainer from '../container/Faqs'
import RoadmapContainer from '../container/Roadmap'
import FooterContainer from '../container/Footer'
import WhitelistContainer from 'container/Whitelist'

const Home = ({}) => {
  return (
    <>
      <Head>
        <title>Klooma NFT</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Manrope:wght@600&family=Orbitron:wght@400;500&display=swap'
          rel='stylesheet'
        />
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
          <RoadmapContainer />
          <FaqsContainer />
          <WhitelistContainer />
        </Flex>
        <Box>
          <FooterContainer onClickSocial={(type) => {}} />
        </Box>
      </Box>
    </>
  )
}

export default Home
