import { Box, Button, Flex, Image, Input, Stack } from '@chakra-ui/react';
import '../App.css';
import { AceRubyEditor } from '../components/editor';
import { useState } from 'react';
import sendIcon from '/send-2.png';
import download from '/cloud-download.png';
export const Home = () => {
  const [code, setCode] = useState<string>(`
puts "Hello, World"
`);
  const [compileId, setCompileId] = useState<string | undefined>(undefined);

  const Submit = async () => {
    console.log('Fire🔥');
    const res = await fetch('https://ceres.epi.it.matsue-ct.ac.jp/compile/code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: btoa(code) }),
    });
    if (!res.ok) {
      alert('アップロードに失敗しました');
      return;
    }
    const json = await res.json();
    // 新しいタブでリンクを開く
    window.open(`https://ceres.epi.it.matsue-ct.ac.jp/writer?id=${json.id}`, '_blank');
  };

  const FetchCode = async () => {
    console.log('Fire🔥');
    const res = await fetch(`https://ceres.epi.it.matsue-ct.ac.jp/compile/code/${compileId}`, {
      method: 'GET',
    });
    if (!res.ok) {
      alert('ないです');
      return;
    }
    const json = await res.json();
    const c = decodeURIComponent(atob(json.code));
    setCode(c);
  };
  return (
    <>
      <Box w={'100%'} h={'100%'}>
        <Stack m={'0.5rem'}>
          <Flex justify={'space-between'} align={'center'}>
            <Button colorScheme="teal" size={'sm'} onClick={() => Submit()}>
              書き込む
              <Image w={'1rem'} src={sendIcon} alt="送信" />
            </Button>
            <Flex align={'center'}>
              <Input
                onChange={(e) => setCompileId(e.target.value)}
                placeholder="コンパイルID"
                size={'sm'}
                borderRadius={'0.5rem 0 0 0.5rem'}
              />
              <Button
                colorScheme="teal"
                size={'sm'}
                w="7rem"
                borderRadius={'0 0.5rem 0.5rem 0'}
                onClick={() => FetchCode()}
              >
                読み込む
                <Image w={'1rem'} src={download} alt="受信" />
              </Button>
            </Flex>
          </Flex>
        </Stack>
        <AceRubyEditor code={code} setCode={setCode} />
      </Box>
    </>
  );
};
