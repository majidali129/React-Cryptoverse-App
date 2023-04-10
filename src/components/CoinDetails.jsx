import { Badge, Box, Card, CardBody, CardHeader, Container, HStack, Heading, Image, Progress, Stack, Stat, StatArrow, StatGroup, StatHelpText, StatNumber, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchCoinsData } from '../utils/api';
import { Context } from '../context/contextApi';
import Loader from '../shared/Loader'
import Chart from './Chart';

const CoinDetails = () => {

  const {loading, setLoading, currency} = useContext(Context)
  const [CoinDetail, setCoinDetail] = useState(null);
  const [days, setDays] = useState('24h');
  const [chartInfo, setChartInfo] = useState(null);
  // const [currency, setCurrency] = useState('inr')

  const {id} = useParams();


  useEffect(()=>{
    fetchCoinDetails(id)
  },[id])



  const fetchCoinDetails = async (query)=>{
    setLoading(true)
    try {
      await fetchCoinsData(`coins/${query}`).then(res=>{
        setCoinDetail(res);
      });
      await fetchCoinsData(`coins/${query}/market_chart?vs_currency=${currency}&days=${days}`).then(response=>{
        console.log(response?.prices)
        setChartInfo(response?.prices);
      })
      setLoading(false);
    } catch (error) {
      setLoading(false)
    }
  }



  const currencySymbol = currency === 'usd' ? '$': currency === 'inr' ? '₹' : currency === 'pkr' ? 'Re' : '€';


  return (
    <>

    {loading ? <Loader/>  :  <VStack mt='3em'   >
      <Container maxW={'container.md'}  padding='2em' display='flex' alignItems='start' gap={'4'} flexDirection='column' boxShadow={'xl'}>
        <Box width='full' >
        <Chart chartData={chartInfo} day={days} currency={currency} />
        </Box>
      <HStack justifyContent='center' alignItems='center' w='full'>
      <Text  opacity={'0.7'}  fontSize='2xl'>
       Last Update on {Date(`${CoinDetail?.last_updated}`).split('G')[0]}
      </Text>
    </HStack>


        <Box>
             <Image 
             src={`${CoinDetail?.image?.large}`}
             boxSize='100px'
             objectFit='cever'
             borderRadius='full'
             />
            <StatGroup>
              <Stat>
                <StatHelpText>
                {CoinDetail?.name}
                </StatHelpText>
                <StatNumber>
                {"$"}{CoinDetail?.market_data.current_price.aed}
                </StatNumber>
                <StatArrow 
                type={CoinDetail?.market_data?.price_change_percentage_24h > 0 ? 'increase' : 'decrease'
                }
                />
                <StatHelpText>
                  {CoinDetail?.market_data?.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>
            </StatGroup>
            <Badge fontSize='xl' bg='blackAlpha.800' color='#fff'>
             #{CoinDetail?.market_data.market_cap_rank}
            </Badge>
        </Box>

        <VStack mt={'2em'} background={'gray.100'} borderRadius={'sm'} padding='1em 2em' width='100%' spacing={4} >
          <HStack justifyContent='space-between' alignItems='center' width='70%' >
            <Text fontWeight='bold'>Max Supply</Text>
            <Text>{CoinDetail?.market_data.max_supply}</Text>
          </HStack>
          <HStack justifyContent='space-between' alignItems='center' width='70%' >
            <Text fontWeight='bold'>Circulating Supply</Text>
            <Text>{CoinDetail?.market_data.circulating_supply}</Text>
          </HStack>
          <HStack justifyContent='space-between' alignItems='center' width='70%' >
            <Text fontWeight='bold'>Total Supply</Text>
            <Text>{CoinDetail?.market_data.total_supply}</Text>
          </HStack>
          <HStack justifyContent='space-between' alignItems='center' width='70%' >
            <Text fontWeight='bold'>Total Volume</Text>
            <Text>{CoinDetail?.market_data.total_volume.aed}</Text>
          </HStack>
          <HStack justifyContent='space-between' alignItems='center' width='70%' >
            <Text fontWeight='bold'>Developer Score</Text>
            <Text>{CoinDetail?.developer_score}</Text>
          </HStack>
          <HStack justifyContent='space-between' alignItems='center' width='70%' >
            <Text fontWeight='bold'>All Time High</Text>
            <Text>{currencySymbol}{CoinDetail?.market_data.ath.aed}</Text>
          </HStack>
          <HStack justifyContent='space-between' alignItems='center' width='70%' >
            <Text fontWeight='bold'>All Time Low</Text>
            <Text>{currencySymbol}{CoinDetail?.market_data.atl.aed}</Text>
          </HStack>
        </VStack>
      </Container>
    </VStack>}

   

    </>
  )
};

export default CoinDetails