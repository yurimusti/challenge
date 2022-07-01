import { Box, Text, Button } from '@chakra-ui/react'

const BoxComponent = ({ onClick = () => {}, data = {}, loading = false }) => {
  return (
    <Box minW='600rem' m='12rem' borderWidth='1rem' borderRadius='12rem'>
      <Box p='6' borderBottomWidth='1rem'>
        <Text
          fontSize='16rem'
          fontWeight='bold'
          textAlign='center'
          color='black'
        >
          Timezone
        </Text>
        <Text fontSize='16rem' textAlign='center' color='black'>
          {data?.timezone}
        </Text>
      </Box>
      <Box p={6} borderBottomWidth='1rem' textAlign='center'>
        <Text
          fontSize='16rem'
          fontWeight='bold'
          textAlign='center'
          color='black'
        >
          Weather
        </Text>
        <Text fontSize='12rem' color='#000'>
          {data?.current.weather[0].main}
        </Text>
        <Text fontSize='11rem' color='#000'>
          {data?.current.weather[0].description}
        </Text>
      </Box>
      <Box p={6} borderBottomWidth='1rem' textAlign='center'>
        <Text
          fontSize='16rem'
          fontWeight='bold'
          textAlign='center'
          color='black'
        >
          Location
        </Text>
        <Text fontSize='12rem' color='#000'>
          Latitude: {data?.lat}
        </Text>
        <Text fontSize='12rem' color='#000'>
          Longitude: {data?.lon}
        </Text>
      </Box>
      <Box p={6} borderBottomWidth='1rem' textAlign='center'>
        <Text
          fontSize='16rem'
          fontWeight='bold'
          textAlign='center'
          color='black'
        >
          Others Information
        </Text>
        <Text fontSize='12rem' color='#000'>
          Clouds: {data?.current.clouds}
        </Text>
        <Text fontSize='12rem' color='#000'>
          Humidity: {data?.current.humidity}
        </Text>
        <Text fontSize='12rem' color='#000'>
          Pressure: {data?.current.pressure}
        </Text>
        <Text fontSize='12rem' color='#000'>
          Temp: {data?.current.temp}
        </Text>
        <Text fontSize='12rem' color='#000'>
          Wind Speed: {data?.current.wind_speed}
        </Text>
      </Box>
      <Box display='flex' justifyContent='center' mt={6} mb={6}>
        <Button
          isLoading={loading}
          colorScheme='green'
          onClick={onClick}
          variant='solid'
        >
          Refresh
        </Button>
      </Box>
    </Box>
  )
}

export default BoxComponent
