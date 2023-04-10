import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import { Box, Card, CardBody, CardHeader, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Loader from '../shared/Loader'
import { Context } from '../context/contextApi'
import { Link } from 'react-router-dom'

const Coins = () => {


  const {loading, coinResults, currency} = useContext(Context)

  const currencySymbol = currency === 'usd' ? '$': currency === 'inr' ? '₹' : currency === 'pkr' ? 'Re' : '€';

  
  return (
    <>
    <Container maxW='container.lg'  h='90vh' display='flex' direction='row' >
    {
      loading ? (<Loader/>) : (
        <Container h='full' maxW={'container.lg'}  flexGrow='grow'  marginLeft='0' position={'fixed'} top={'10vh'} overflowY={'scroll'} border={'1px solid green'} >
        {<Box w='full' py='10' px='6' mt='6'>
        <Box display='flex' alignItems='start' textAlign={{base:'center'}} justifyContent={{base:'center', md:'center'}} flexWrap='wrap' flexDirection={{base:'column', md:'row'}} gap='10'>
          
          {
            loading ? (<Loader/>) : 
            coinResults?.map((coin)=>{
              return(
                <Link to={`${coin?.id}`} key={coin?.id}>
                <Card   w={['300px', '140px']} display='flex' alignItems='center' justifyContent='center' >
                  <CardHeader>
                    <Stack as='figure' w={['35px', '50px']} h={['35px', '50px']} rounded='full'>
                      <Image
                      src = {`${coin?.image}`}
                      mb='1px'
                      w='100%'
                      h='100%'
                       rounded='full' />
                    </Stack>
                  </CardHeader>
                  <CardBody sx={{textAlign:'center'}}>
                    <Heading as='h3' size='lg' mt='-8px'noOfLines={1}>
                      {coin?.name}
                    </Heading>
                    <Text as='span' fontSize='1.5rem' >
                      {currencySymbol}
                      {coin?.current_price}
                    </Text>
                  </CardBody>
                </Card>
                </Link>
              )
            })
          }

          </Box>
        </Box>}



      </Container>

      )
    }
   

    
   </Container>
    </>
  )
}

export default Coins