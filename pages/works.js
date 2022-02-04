import { Container, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFives from '../public/images/works/Captureprojet1.PNG'
import thumbStraffic from '../public/images/works/Captureprojet2.PNG'
import thumbDrbonvoyage from '../public/images/works/Captureprojet3test.png'


const Works = () => (
  
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={4} textUnderlineOffset="3px"
          textDecorationLine="underline "
          text-decoration-color={useColorModeValue(
            'whiteAlpha.500',
            'whiteAlpha.200'
          )}>
        Projects / Collaborations
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        
        <Section>
          <WorkGridItem
            id="Straffic"
            title="Straffic"
            thumbnail={thumbStraffic}
            height={200}
          >
           A responsive website coded in React.js, using the API of the strasbourg company of transport (CTS) to help people getting informations about transportation in Strasbourg and/or other useful informations like parkings location or tickets point of sales, in an easily usable and fast way
          </WorkGridItem>
        </Section>

        <Section delay={0.1} >
          <WorkGridItem
            id="Dr. BonVoyage"
            title="Dr. BonVoyage"
            thumbnail={thumbDrbonvoyage}

          >
            <Text text-align='start'>
            An app coded in React Native with a real customer, API AWS serverless for the back, this app was made to help people travelling across the world with useful medical informations of many sorts
            </Text>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="Fives" title="FIVES" thumbnail={thumbFives}>
            A Static html/css site first project after just 3 weeks of studying
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
    </Container>
)

export default Works

