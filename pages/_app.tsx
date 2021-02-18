import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from 'components/Layout';
import { Chakra } from 'components/Chakra';


const App = ({ Component, pageProps }: AppProps, cookies: any) => {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
};

export { getServerSideProps } from 'components/Chakra';
export default App;
