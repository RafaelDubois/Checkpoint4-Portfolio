import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../navbar'
import VoxelPc from '../voxel-pc'
import { noSSR } from 'next/dynamic'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rafael Dubois - Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <VoxelPc />

        {children}
      </Container>
    </Box>
  )
}

export default Main
