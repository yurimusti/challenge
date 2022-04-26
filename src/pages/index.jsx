import { useState } from 'react'
import Head from 'next/head'

import { Flex, Text, Image, Box } from '@chakra-ui/react'

import BannerContainer from '../container/Banner'
import InformationContainer from '../container/Information'
import RarityContainer from '../container/RarityLevels'
import FaqsContainer from '../container/Faqs'
import RoadmapContainer from '../container/Roadmap'

const Home = ({}) => {
  const [value, setValue] = useState('')

  return (
    <>
      <Head>
        <title>Klooma NFT</title>
      </Head>
      <Flex
        bgColor='darkBackground'
        backgroundImage='/assets/images/background/bg01.jpg'
        backgroundSize='cover'
        height='100vh'
        paddingLeft='10rem'
        paddingRight='10rem'
        flexDirection='column'
        position='relative'
      >
        <BannerContainer />
      </Flex>
      <Flex
        backgroundImage='/assets/images/background/bg02.jpg'
        minHeight='400vh'
        backgroundSize='cover'
        flexDirection='column'
      >
        <InformationContainer />
        <RarityContainer />
        <FaqsContainer />
        <RoadmapContainer />
      </Flex>
    </>
  )
}

export default Home
