import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-size: 21px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height:20px;
  padding: 10px;
  margin-top:9px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(-30deg);
  }
`

const Logo = () => {
     const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`
     return (
         <Link href="/">
             <a>
                 <LogoBox>
                     <Image src={logoImg} width={40} height={30} alt='logo' />
                     <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                     fontFamily='M PLUS Rounded 1c'
                     
                     ml={1} mb={1}>
                         Rafael Dubois
                     </Text>
                 </LogoBox>
             </a>

         </Link>
     )
}

export default Logo