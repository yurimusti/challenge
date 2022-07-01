import Head from 'next/head'
import React from 'react'

import { Box } from '@chakra-ui/react'

import HomeContainer from '../container/Home'

const Home = ({}) => {
  return (
    <>
      <Head>
        <title>Challenge</title>
      </Head>
      <Box>
        <HomeContainer />
      </Box>
    </>
  )
}

export default Home
