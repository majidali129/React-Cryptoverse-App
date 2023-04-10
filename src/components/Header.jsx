import { Flex, Icon, Text, Link, Box } from '@chakra-ui/react'
import { FaBitcoin } from "react-icons/fa"
import LeftNav from './LeftNav'


const Header = () => {

  return (
    <>
  

     
  <Link to='/' >
    <Flex 
    as='header' 
    position='fixed' 
    top={'0'}
    left={'0'}
    w='100%'
    bg='cyan.900'
    height={'10vh'}
    px={10}
    color='#fff'
    justify='space-between'
    alignItems={'center'}
    >

    <Text fontSize='3xl' noOfLines={1} as='i' display='flex' alignItems='center'  gap={2}>
        <Icon as={FaBitcoin} boxSize={10}/>
    CryptoHub
    </Text>

    <Box>
      <LeftNav/>
    </Box>

    </Flex>
    </Link>
     
    
    </>
  )
}

export default Header