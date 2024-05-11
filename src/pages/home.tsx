import { Box, Button, Flex, Image, Stack } from '@chakra-ui/react';
import '../App.css';
import { AceRubyEditor } from '../components/editor';
import { useState } from 'react';
import sendIcon from '/send-2.png';
export const Home = () => {
  const [code, setCode] = useState<string>(`
def sample
  puts "サンプルです"
end
`);
  return (
    <>
      <Box w={'100%'} h={'100%'}>
        <Stack m={'0.5rem'}>
          <Flex align={"center"}>
            <Button colorScheme='teal' size={'sm'}>
              書き込む
              <Image w={'1rem'} src={sendIcon} alt='送信' color={'white'} />
            </Button>
          </Flex>
        </Stack>
        <AceRubyEditor code={code} setCode={setCode} />
      </Box>
    </>
  );
};
