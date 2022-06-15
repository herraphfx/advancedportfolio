import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items:center;
height: 20px;
line-height: 20px;
padding: 10px

&:hover img{
    transform: rotot
}
`
function Logo() {
   const footPrintImg = `/images/footprint${useColorModeValue('-dark','-dark')}.png`
   
  return (
    <Link href='/' passHref>
        <a href="/">
            <LogoBox>
                <Image src={footPrintImg} width={20} height={20} alt="logo"/>
                <Text color={useColorModeValue('gray.800', 'whiteAplha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                >
                    Henry Oko
                </Text>
            </LogoBox>
        </a>
    </Link>
  )
}

export default Logo