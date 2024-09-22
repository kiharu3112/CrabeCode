import { Box, Text, Image } from '@chakra-ui/react';
export const Header = () => {
  return (
    <Box as="b" w={'100%'} mb={"1rem"} color="black" display="flex" alignItems="center" >
      <Image src="/crabe.png" alt="crabe" h={"2rem"} objectFit={"cover"} />
      <Text fontSize={'3xl'}>Crabe Code</Text>
    </Box>
  );
};
