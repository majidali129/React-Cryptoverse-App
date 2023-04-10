import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <Stack
      height="90vh"
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
        <ScaleLoader 
        color="#36d7b7" 
        cssOverride={{}} 
        height={53} 
        width={5} 
        />
        </Stack>
    // <span class="loader"></span>
  );
};

export default Loader;
