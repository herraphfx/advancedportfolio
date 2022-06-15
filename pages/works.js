import React from 'react';
import { Container, Heading, SimpleGrid, Divider, Box, LinkBox, LinkOverlay, Text} from '@chakra-ui/react'
import Navbar from '../components/layout/navbar'
import Section from '../components/layout/section'
import { WorkGridItem } from '../components/layout/grid-items'
import Image from 'next/image'
import NextLink from 'next/link'
import VoxelDog from '../components/layout/voxel-dog';
import NoSsr from '../components/layout/no-ssr';
import thumbPacman from '../public/images/work/puckman.png'
import thumbNadimiel from '../public/images/work/nadimiel.jpg'
import thumbHomepage from '../public/images/work/homepage1.png'
import thumbHomepage1 from '../public/images/work/homepage2.png'




const Works = () => {
    return(
      <div>
        <Navbar/>
         <Container maxW="container.md" pt={14}>
         <NoSsr>
      <VoxelDog/> 
      </NoSsr>
            <Heading as="h3" fontSize={20} mb={4} >
            Work
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>

              <Section>
                <Box w="100%" textAlign="center">
                  <NextLink href="/works/puckman" scroll={false}>
                  <LinkBox cursor="pointer">
                  <Image 
                     id='puckman'
                    src={thumbPacman}
                    placeholder='blur'
                    loading='lazy'
                    height={1200}
                    alt="puckman"
                    />
                    <LinkOverlay href='/works/puckman'>
                        <Text mt={2} fontSize={20}>
                            Puckman Returns
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>A Modern Pacman Game </Text>
                  </LinkBox>
                  </NextLink>
                </Box>
              
                <WorkGridItem
                id="puckman"
                title="Pacman"
                thumbnail={thumbPacman}
                >
                  A Pacman Modern Game
                </WorkGridItem>
              </Section>


              <Section>
                <Box w="100%" textAlign="center">
                  <NextLink href="/works/nadimiel" scroll={false}>
                  <LinkBox cursor="pointer">
                  <Image 
                     id='nadimiel'
                    src={thumbNadimiel}
                    placeholder='blur'
                    loading='lazy'
                    height={1200}
                    alt="nadimiel"
                    />
                    <LinkOverlay href='/works/nadimiel'>
                        <Text mt={2} fontSize={20}>
                            Nadimiel Charamel
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>An SME website for a Restaurant Based in Mauritius Island. </Text>
                  </LinkBox>
                  </NextLink>
                </Box>
              </Section>

              <Section>
                <Box w="100%" textAlign="center">
                  <NextLink href="/works/homepage1" scroll={false}>
                  <LinkBox cursor="pointer">
                  <Image 
                     id='homepage1'
                    src={thumbHomepage}
                    placeholder='blur'
                    loading='lazy'
                    height={1200}
                    alt="homepage1"
                    />
                    <LinkOverlay href='/works/homepage1'>
                        <Text mt={2} fontSize={20}>
                            Henry Profile Page (previous)
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>My homepage desgined with bootstrap featuring past activities </Text>
                  </LinkBox>
                  </NextLink>
                </Box>
              </Section>

              <Section>
                <Box w="100%" textAlign="center">
                  <NextLink href="/works/homepage2" scroll={false}>
                  <LinkBox cursor="pointer">
                  <Image 
                     id='homepage2'
                    src={thumbHomepage1}
                    placeholder='blur'
                    loading='lazy'
                    height={1200}
                    alt="homepage2"
                    />
                    <LinkOverlay href='/works/homepage2'>
                        <Text mt={2} fontSize={20}>
                            Henry Profile Page (new)
                        </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>My homepage desgined with React, NextJS, ThreeJS, Chakra UI, Framer Motion </Text>
                  </LinkBox>
                  </NextLink>
                </Box>
              </Section>

            </SimpleGrid>
        </Container>
      </div>
       
    )
}

export default Works