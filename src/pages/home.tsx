import { Box, Button, Flex, Image, Stack } from '@chakra-ui/react';
import '../App.css';
import { AceRubyEditor } from '../components/editor';
import { useState } from 'react';
import sendIcon from '/send-2.png';
export const Home = () => {
  const [code, setCode] = useState<string>(`
def sample
  puts "Hello"
end
`);

  const Submit = async() => {
    console.log("Fire🔥")
    const res = await fetch(
      'https://ceres.epi.it.matsue-ct.ac.jp/compile/code',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: btoa(code) }),
      }
    );
    if (!res.ok) {
      alert('アップロードに失敗しました');
      return;
    }
    const json = await res.json();
    // 新しいタブでリンクを開く
    window.open(
      `https://ceres.epi.it.matsue-ct.ac.jp/writer?id=${json.id}`,
      '_blank'
    );
  }

  return (
    <>
      <Box w={'100%'} h={'100%'}>
        <Stack m={'0.5rem'}>
          <Flex align={'center'}>
            <Button colorScheme='teal' size={'sm'} onClick={() => Submit()}>
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
