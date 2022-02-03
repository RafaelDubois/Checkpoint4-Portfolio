import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  useColorModeValue,
  Link,
  Button,
  FormLabel,
  Textarea,
  Input
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'

const Contact = () => {
  const [status, setStatus] = useState('Submit')
  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('Sending...')
    const { name, email, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      message: message.value
    }
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(details)
    })
    setStatus('Submit')
    let result = await response.json()
    alert(result.status)
  }
  return (
    <Layout>
      <Container delay={5}>
        <form onSubmit={handleSubmit}>
          <Box
          
            borderRadius="lg"
            mt={2}
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            
              <FormLabel htmlFor="name" mt={2} ml={2}>Name:</FormLabel>
              <Input type="text" id="name" required />
            
            
              <FormLabel htmlFor="email" mt={2} ml={2}>Email:</FormLabel>
              <Input type="email" id="email" required />
            
            
              <FormLabel htmlFor="message" mt={2} ml={2}>Message:</FormLabel>
              <Textarea id="message" required />
            
            <Button type="submit"mt={6} mb={2}>{status}</Button>
          </Box>
        </form>
      </Container>
    </Layout>
  )
}

export default Contact
