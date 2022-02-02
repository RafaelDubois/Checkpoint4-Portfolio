import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weigth: bold;
font-size:20px;
display:inline-flex;
align-items:center
height: 30px;
line-height:40px;
padding: 10px;
&:hover img {
    tranform: rotate(20deg); 
}`

const Logo = () => {
     const logoImg = `/images/logo${useColorModeValue('', '-dark')}.png`
     return (
         <Link href="/">
             <a>
                 <LogoBox>
                     <Image src={logoImg} width={52} height={40} alt='logo'/>
                     <Text color={useColorModeValue('gray.820', 'whiteAlpha.950')}
                     fontFamily='M PLUS Rounded 1c'
                     fontWeight="bold"
                     ml={3}>
                         Rafaël Dubois
                     </Text>
                 </LogoBox>
             </a>

         </Link>
     )
}

export default Logo