import { Container, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'


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

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Static html/css site first project after just 3 weeks of studying
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
           A responsive website coded in React.js, using the API of the strasbourg company of transport (CTS) to help people getting informations about transportation in Strasbourg and/or other useful informations like parkings location or tickets point of sales, in an easily usable and fast way
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            An app coded in React Native with a real customer, API AWS serverless for the back, this app was made to help people travelling across the world with useful medical informations of many sorts
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
    </Container>
)

export default Works

