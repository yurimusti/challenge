import React, { useEffect, useState } from 'react'
import { Flex, Box, useToast } from '@chakra-ui/react'
import axios from 'axios'

import BoxComponent from '@components/Box'
import Empty from '@components/Empty'

const BannerContainer = ({}) => {
  const toast = useToast()
  const [available, setAvailable] = useState(false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const [refreshing, setRefreshing] = useState(true)
  const [message, setMessage] = useState(
    'You need to allow your location to continue ;)'
  )

  const status = async (type, { coords }) => {
    if (type === 'success') {
      setMessage('Waiting... we are searching your information here...')
      await axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=2007ea45adcd0f1d7bab2bfae9799b31`
        )
        .then(({ data }) => {
          setData(data)
        })
        .catch((err) => {
          setAvailable(false)
        })
    }

    toast({
      title:
        type === 'success' ? `Location granted.` : `Location don't granted.`,
      description: "Don't worry, your location is secret ;).",
      status: type === 'success' ? type : 'warning',
      position: 'top-left',
      duration: 4000,
      isClosable: true,
      containerStyle: { fontSize: '12rem' },
    })

    if (type === 'error') {
    }
  }

  useEffect(() => {
    if (refreshing === true) {
      if (navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            status('success', position)
          },
          () => {
            setMessage(
              'This application only works with location. Try again ;)'
            )
            status('error', { coords: {} })
          }
        )
      }
      setRefreshing(false)
    }
  }, [refreshing])

  useEffect(() => {
    if (data !== null) {
      setAvailable(true)
    } else {
      setAvailable(false)
    }
  }, [data])

  return (
    <Flex
      direction='column'
      minW='1200rem'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Box>
        {available && data !== null ? (
          <BoxComponent
            data={data}
            onClick={() => {
              setAvailable(false)
              setData(null)
              setRefreshing(true)
            }}
            loading={loading}
          />
        ) : (
          <Empty text={message} />
        )}
      </Box>
    </Flex>
  )
}

export default BannerContainer
