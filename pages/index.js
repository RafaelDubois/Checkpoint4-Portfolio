import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="purple" p={4} mb={6}  align="center" mt={8}>
        Hello, I&apos;m a front-end developper based in France ! 
        Salut, je suis un développeur front-end basé en France !
      </Box>
      <Box diplay={{ md: 'flex' }}>
        <Box flexGrow={1}>
            <Heading as="h2" variant = "page-title">
                Rafael Dubois
            </Heading>
            <p>Digital Carftzman ( Developpeur / Artiste )</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
