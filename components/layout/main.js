import React from 'react';
import {Box,  Container } from '@chakra-ui/react'
import Head from 'next/head';
import Navbar from '../layout/navbar'



function Main({children, router}) {
 
  return (
    <Box as="main" pb={8}>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/> 
            <title>Henry Homepage</title>
        </Head>
        <Navbar path={router.asPath}/>
        <Container maxW="container.md" pt={14}>
            {children}
        </Container>
    </Box>
  )
}

export default Main