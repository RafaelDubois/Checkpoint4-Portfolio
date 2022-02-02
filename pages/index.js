import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={7}
        p={3}
        mt={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a front-end developper based in Reunion Island (France)
        !
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" mb={1} ml={2}>
            Rafaël Dubois
          </Heading>
          <p>Digital Craftsman ( Developpeur / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/rafael.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading
          as="h3"
          variant="section-title"
          textUnderlineOffset="3px"
          textDecorationLine="underline "
          text-decoration-color={useColorModeValue(
            'whiteAlpha.500',
            'whiteAlpha.200'
          )}
        >
          Work
        </Heading>
        <Paragraph>
          Rafael is a front-end developer based in Reunion island with a passion
          for building good-looking digital websites and other stuff. He has a
          knack for a lot of things, from planning and designing all the way to
          solving real-life problems with code. When not working, he loves
          searching and exploring the internet in search of new inspiration and
          knowledge. Currently, he is searching for an internship / first real
          work experience.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading
          as="h3"
          variant="section-title"
          textUnderlineOffset="3px"
          textDecorationLine="underline "
          text-decoration-color={useColorModeValue(
            'whiteAlpha.500',
            'whiteAlpha.200'
          )}
        >
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Saint-Martin d'Hères, France.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Completed high school diploma
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Studied Psychology at University in Strasbourg, France
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Studied at WildCodeSchool, a private web-development school based in
          Strasbourg, France
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" textUnderlineOffset="3px"
          textDecorationLine="underline "
          text-decoration-color={useColorModeValue(
            'whiteAlpha.500',
            'whiteAlpha.200'
          )}>
          What I ♥
        </Heading>
        <Paragraph>
          Art, {' '}
          <Link href="https://www.youtube.com/playlist?list=PL46IFNQW_l3go3wKwe4Hh4sSUwdMj_3Ff/" target="_blank">
          Music
          </Link>
          , Playing Piano, Learning with the web,{' '}
          <Link href="https://deepdreamgenerator.com/" target="_blank">
            Generating Art with AI
          </Link>
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
