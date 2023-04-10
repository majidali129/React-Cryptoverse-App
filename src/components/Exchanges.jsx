import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import { Box, Card, CardBody, CardHeader, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Loader from '../shared/Loader'
import { Context } from '../context/contextApi'
import { Link } from 'react-router-dom'
const Exchanges = () => {

  const {loading, coinResults} = useContext(Context)


  return (
    <>
    <Container  h='90vh' maxW='container.lg' display='flex' direction='row' >
    {
      loading ? (<Loader/>) : (
        <Box h='full' width='100%' flexGrow='grow'  marginLeft='0' position={'fixed'} top={'10vh'} overflowY={'scroll'}>
        {<Stack w='full' py='10' px='6' mt='6'>

        <Box display='flex' alignItems='start' textAlign={{base:'center'}} justifyContent={{base:'center', md:'center'}} flexWrap='wrap' flexDirection={{base:'column', md:'row'}} gap='10'>
          
          {
            loading ? (<Loader/>) : 
            coinResults?.map((exchange)=>{
              return(
                <Link to={`coin/${exchange?.id}`} key={exchange?.id}>
                <Card   w={['300px', '140px']} display='flex' alignItems='center' justifyContent='center' >
                  <CardHeader>
                    <Stack as='figure' w={['35px', '50px']} h={['35px', '50px']} rounded='full'>
                      <Image
                      src = {`${exchange?.image}`}
                      mb='1px'
                      w='100%'
                      h='100%'
                       rounded='full' />
                    </Stack>
                  </CardHeader>
                  <CardBody sx={{textAlign:'center'}} display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                    <Heading as='h3' size='lg' mt='-8px'noOfLines={1}>
                      {exchange?.name}
                    </Heading>
                    <Text as='span' fontSize='1.5rem' >
                      {exchange?.year_established}
                    </Text>
                    <Text as='span' fontSize='1.2rem'>
                      {exchange?.trust_score}
                    </Text>
                  </CardBody>
                </Card>
                </Link>
              )
            })
          }

          </Box>
        </Stack>}



      </Box>

      )
    }
   

    
   </Container>
    </>
  )
}

export default Exchanges