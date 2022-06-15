import NextLink from 'next/link'
import { Box, Heading, Container, Text, Divider, Button, } from '@chakra-ui/react'
import Navbar from '../components/layout/navbar'
import NoSsr from '../components/layout/no-ssr'
import VoxelDog from '../components/layout/voxel-dog'

const NotFound= ()=> {
    return(
        <div>
        <Navbar/>
        <Container>
        <NoSsr>
      <VoxelDog/> 
      </NoSsr>
           <Heading as="h1">Not Found</Heading>
            <Text>The Page you&apos;re looking for was not Found</Text>
            <Divider my={6}/>

            <Box my={6} align="center">
                <NextLink href="/">
                <Button colorScheme="teal">Return to home</Button>
                </NextLink>
                
            </Box>
        </Container>
        </div>
    )
}

export default NotFound