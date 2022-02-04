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
  useColorModeValue,
  GridItem,
  Text
} from '@chakra-ui/react'
import React from 'react'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'

import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={7}
          p={3}
          mt={5}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a front-end developper based in France !
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
              borderColor={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="50%"
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
            Rafael is a front-end developer based in Reunion island with a
            passion for building good-looking digital websites and other stuff.
            He has a knack for a lot of things, from planning and designing all
            the way to solving real-life problems with code. When not working,
            he loves searching and exploring the internet in search of new
            inspiration and knowledge. Currently, he is searching for an
            internship / first real work experience.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mt={7}>
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
            <BioYear>2021 to now</BioYear>
            Studied at WildCodeSchool, a private web development school based in
            Strasbourg, France
          </BioSection>
        </Section>
        <Section delay={0.3}>
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
            What I ♥
          </Heading>
          <Paragraph >
            Art,{' '}
            <Link
              href="https://www.youtube.com/playlist?list=PL46IFNQW_l3go3wKwe4Hh4sSUwdMj_3Ff/"
              target="_blank"
            >
              Music,{' '}
            </Link>
            Watching content creators,Playing Piano, Learning on the internet,{' '}
            <Link href="https://deepdreamgenerator.com/" target="_blank">
              Generating Art with AI
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
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
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/RafaelDubois" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @RafaelDubois
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/rafa%C3%ABl-dubois/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @RafaelDubois
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @rafael_delockslay
                </Button>
              </Link>
            </ListItem>
          </List>
          <Heading as="h3" variant="section-title" mb={5} mt={5}>
            Tools used to build this website :
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem textAlign="center">
              <a href="https://nextjs.org/" target="blank">
                <Image
                  src="./images/imageReactNext.jpg"
                  height={140}
                  width={240}
                  borderRadius={25}
                />
              </a>
              <Text fontWeight="bold" mt={4} mb={1}>
                ReactJs and Next.js
              </Text>
              An open-source front-end JavaScript library, and a popular
              framework.
            </GridItem>
            <GridItem textAlign="center">
              <a href="https://threejs.org/" target="blank">
                <Image
                  src="./images/imagethree.png"
                  height={140}
                  width={240}
                  borderRadius={25}
                />
              </a>
              <Text fontWeight="bold" mt={4} mb={1}>
                ThreeJs
              </Text>
              A 3D framework for React
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/contact">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mt={2}>
                Contact
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
