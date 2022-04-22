import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Testing</title>
      </Head>
      <Box bgColor='darkBackground'>
        <Text>Testing</Text>
      </Box>
    </>
  )
}
