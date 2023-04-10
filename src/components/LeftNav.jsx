import React, { useContext } from "react";
import { Stack, VStack, Text, Button } from "@chakra-ui/react";
import { categories } from "../assets/constants";
import { Context } from "../context/contextApi";
import {  NavLink } from "react-router-dom";

const LeftNav = () => {
    const {setSelectCategories} = useContext(Context)

  return (
    <>
        <ul>
      <Stack
        h="full"
        // w='14vw'
        // minW='180px'
        // bg="cyan.900"
        display={{base:'flex', md:'flex'}}
        direction="row"
        spacing="5"
        py={["8", "14"]}
        px='2'
        // items="left"
        // position={'fixed'}
        // top={'10vh'}
        // left={'0'}
      >
        {categories.map((item, index) => {
          return (
            <li key={index}>
            <NavLink to={`${item.link}`} >
              <Button as='span' rounded='full' w='full' bg="cyan.700" color='#fff'  _hover={{color:'#000', bg:'white', border:'none'}} fontSize='12px' display='flex' alignItems='center' justifyContent='center' cursor='pointer'  gap='4' textTransform='uppercase'
              onClick={(()=>{
                if(item.name === 'coins'){
                  setSelectCategories('coins/markets')
                }else{
                  setSelectCategories(item.name)
                };
              })}
          >
            {item.icon}
            {item.name}
          </Button>
            </NavLink>
            </li>
          )
        })}
      </Stack>
        </ul>
    </>
  );
};

export default LeftNav;
