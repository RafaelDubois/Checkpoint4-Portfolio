import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Layout from "../components/layouts/main"
import theme from '../lib/theme'
import Fonts from "../components/fonts"
import { AnimatePresence } from 'framer-motion'
import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


const Website = ({ Component, pageProps, router}) => {
    return (
            <ChakraProvider theme={theme}>
              <Fonts/>
              <Layout router={router}>
              <AnimatePresence exitBeforeEnter initial={true}>
              <AlertProvider template={AlertTemplate} {...options}>
            <Component {...pageProps} key={router.route} />
            </AlertProvider>
            </AnimatePresence>
              </Layout>
            </ChakraProvider>
        
    );
};

export default Website;