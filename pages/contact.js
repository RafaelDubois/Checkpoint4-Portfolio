import React, { useState } from 'react'
import {
  Box,
  Container,
  useColorModeValue,
  Button,
  FormLabel,
  Textarea,
  Input
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useAlert } from 'react-alert'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const alert = useAlert()
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name,
      email,
      message
    }
    fetch('/api/contactapi', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      console.log('Response received')
      if (res.status === 200) {
        alert.show('Message successfully sent')
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
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
            <FormLabel htmlFor="name" mt={2} ml={2}>
              Name:
            </FormLabel>
            <Input
              type="text"
              id="name"
              required
              placeholder="Name.."
              onChange={e => {
                setName(e.target.value)
              }}
            />

            <FormLabel htmlFor="email" mt={2} ml={2}>
              Email:
            </FormLabel>
            <Input
              type="email"
              id="email"
              required
              placeholder="Email.."
              onChange={e => {
                setEmail(e.target.value)
              }}
            />

            <FormLabel htmlFor="message" mt={2} ml={2}>
              Message:
            </FormLabel>
            <Textarea
              id="message"
              required
              onChange={e => {
                setMessage(e.target.value)
              }}
            />

            <Button type="submit"  mt={6} mb={2} onClick={(e)=>{handleSubmit(e)}}>
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </Layout>
  )
}

export default Contact
