import React from 'react'
import {Stack, Box, Text,Card, Image,CardBody,CardHeader,   Heading, Container} from '@chakra-ui/react'

import { useContext } from 'react'

import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import Loader from '../shared/Loader'


const Home = () => {


  const {loading , newsData, cryptoStats, coinResults, mobileMenu, setMobileMenu, currency} = useContext(Context)
  // console.log(cryptoStats)
  // console.log(coinResults)
  // console.log(newsData)
  const coinsCollection = coinResults?.slice(0,20); // array of extracted 9 items from array of 20 items

  const currencySymbol = currency === 'usd' ? '$': currency === 'inr' ? '₹' : currency === 'pkr' ? 'Re' : '€';


  return (
   <>

   <Container maxW={'container.xl'}  h='100vh'  display='flex' direction='row' justifyContent={'center'} alignItems={'center'} border={'1px solid green'} >
    {/* <LeftNav/> */}
    {
      loading ? (<Loader/>) : (
        <Container h='full' maxW='container.lg' flexGrow='grow'  marginLeft='0' position={'fixed'} top={'10vh'} overflowY={'scroll'}>
       <Heading as='h1' size='3xl' color='black' mb='10' mt='4' opacity='0.7'>Our Dynamic Stats</Heading>

        
        <Stack  display='flex' direction={['column', 'row']} alignItems='center' justifyContent={{base: 'center' , md:'start'}} gap='8' wrap='wrap' py='10' px='4' color='#000' >
  
  
            <Box h='140px' w='320px'  bg='white' py='8' px='4' display='flex' flexDirection='column' gap='2' boxShadow={['lg', 'xl']}>
              <Heading as='h1' noOfLines={1} size='xl' >
              Total Coins
              </Heading>
              <Heading as='h5' size='md'>{cryptoStats?.stats?.totalCoins}</Heading>
            </Box>
  
            <Box h='140px' w='320px'  bg='white' py='8' px='4' display='flex' flexDirection='column' gap='2' boxShadow={['lg', 'xl']}>
              <Heading as='h1' noOfLines={1} size='xl' >
              Total Exchanges
              </Heading>
              <Heading as='h5' size='md'>{cryptoStats?.stats?.totalExchanges}</Heading>
            </Box>
  
            <Box h='140px' w='320px'  bg='white' py='8' px='4' display='flex' flexDirection='column' gap='2' boxShadow={['lg', 'xl']}>
              <Heading as='h1' noOfLines={1} size='xl' >
              Total Markets
              </Heading>
              <Heading as='h5' size='md'>{cryptoStats?.stats?.totalMarkets}</Heading>
            </Box>
  
            <Box h='140px' w='320px'  bg='white' py='8' px='4' display='flex' flexDirection='column' gap='2' boxShadow={['lg', 'xl']}>
              <Heading as='h1' noOfLines={1} size='xl' >
              Total MarketCap
              </Heading>
              <Heading as='h5' size='md'>{cryptoStats?.stats?.totalMarketCap}</Heading>
            </Box>
  
            <Box h='140px' w='320px' bg='white' py='8' px='4' display='flex' flexDirection='column' gap='2' boxShadow={['lg', 'xl']}> 
              <Heading as='h1' noOfLines={1} size='xl' >
              Total 24h-Volume
              </Heading>
              <Heading as='h5' size='md'>{cryptoStats.total24hVolume}</Heading>
            </Box>

  
        </Stack>


        <Stack w='full' py='10' px='6' mt='6'>
        <Heading as='h1' size='2xl' color='black' opacity='0.7' mb='10'>Our Standardised Coins</Heading>

        <Box display='flex' alignItems='start' textAlign={{base:'center'}} justifyContent={{base:'center', md:'center'}} flexWrap='wrap' flexDirection={{base:'column', md:'row'}} gap='10'>
          
          {
            loading ? (<Loader/>) : 
            coinsCollection?.map((coin)=>{
              return(
                <Card  w={['300px', '140px']} display='flex' alignItems='center' justifyContent='center' >
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
              )
            })
          }

          </Box>
        </Stack>
      </Container>
      )
    }
   
   </Container>
   </>
  )
}

export default Home