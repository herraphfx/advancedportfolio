import { Box, Container, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon } from '@chakra-ui/react';
import Navbar from '../components/layout/navbar';
import Section from '../components/layout/section'
import Paragraph from '../components/layout/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Biosection, BioYear } from '../components/layout/bio'
import NextLink from 'next/link'
import VoxelDog from '../components/layout/voxel-dog';
import NoSsr from '../components/layout/no-ssr';
import { IoLogoTwitter , IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5'

function Page() {
  return (
    <div>
      <Navbar/>
      
    <Container maxW="container.md" pt={14}>
      <NoSsr>
      <VoxelDog/> 
      </NoSsr>
   
        <Box borderRadius="lg" 
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
        mb={6} 
        p={3} 
        align="center">
        Hello, I&apos;m a Full Stack Developer. 
        </Box>
        <Box display={{md: 'flex'}}>
        <Box flexgrow={1}>
        <Heading as="h2" variant="page-title">
          Henry Oko
        </Heading>
        <p>Digital Smith (Developer / Engineer)</p>
    </Box>
    <Box 
    flexShrink={0}
    mt={{base: 4, md:0}} 
    ml={{md: 370}} 
    align="center"
    >
      <Image 
      borderColor="whiteAlpha.800" 
      borderWidth={2} 
      borderStyle="solid" 
      maxWidth="100px" 
      display="inline-block" 
      borderRadius="full" 
      src="/images/My_Pic.jpg"
      alt='Profile Image'
      />
    </Box>
    </Box>
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title" textDecoration="underline" lineHeight={1.8}>
        About.
      </Heading>
      <Paragraph>
        Henry is a Full Stack Developer with passion for building world class digital products
        He is interested in planning, designing, building all the way to solving real-life problems
        with code. I like playing video Games and taking pictures. 
      </Paragraph>
      <Box align="center" my={4}>
        <Link href="/works" rel="noopener">
         <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">Portfolio</Button>
         
        </Link>
        
      </Box>
    </Section>
    <Section delay={0.2}>
        <Heading as="h3" variant="section-title" textDecoration="underline" lineHeight={1.8}>
          Bio.
        </Heading>
        
        <Biosection>
        <BioYear>2009</BioYear>
          Senior School Certificate Examination
        </Biosection>
        <Biosection>
          <BioYear>2015</BioYear>
          Completed my Bachelor in Engineering Degree from {' '}
          <NextLink href="https://futminna.edu.ng/" >
            <Link href="https://futminna.edu.ng/" target="_blank" rel="noreferrer">Federal University of Technology, Minna. Nigeria</Link>
          </NextLink>
        </Biosection>
        <Biosection>
          <BioYear>2015</BioYear>
          Worked at  {' '}
          <NextLink href="https://teacherswithoutborders.org/" >
            <Link href="https://teacherswithoutborders.org/" target="_blank" rel="noreferrer">Teachers Without Borders</Link>
          </NextLink>
        </Biosection>
        <Biosection>
          <BioYear>2017</BioYear>
          Worked at  {' '}
          <NextLink href="https://stableshield.com/" >
            <Link href="https://stableshield.com/" target="_blank" rel="noreferrer">Stable Shield Solutions</Link>
          </NextLink>
        </Biosection>
        <Biosection>
          <BioYear>2019</BioYear>
          Worked at { ' '}
          <NextLink href="https://www.upgradedera.com/" >
            <Link href='https://www.upgradedera.com/' target="_blank" rel="noreferrer">Upgraded Era Solutions </Link>
          </NextLink>
        </Biosection>
        <Biosection>
          <BioYear>2022</BioYear>
          Masters Program in Software Project Management{ ' '}
          <NextLink href="https://www.uom.ac.mu/" target="_blank" rel="noreferrer">
            <Link href="https://www.uom.ac.mu/" target="_blank" rel="noreferrer">University of Mauritius</Link> 
          </NextLink>
        </Biosection>
    </Section>
    <Section delay={0.2}>
      <Heading as="h3" variant="section-title"  textDecoration="underline" lineHeight={1.8}>
        Core Competencies.
      </Heading>
      <Paragraph>
        Team Work, Problem-Solving, Team and People Management, Analytical and Critical Thinking, Client and Time Management, Effective Communication, Research and Documentation.
      </Paragraph>
    </Section>
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title"  textDecoration="underline" lineHeight={1.8}>
        Technical Skills.
      </Heading>
      <Paragraph>
        ReactJS, NextJS, Javascript, ThreeJS, HTML5, Tailwind CSS, CSS3, Redux, JQuery, GitHub
      </Paragraph>
    </Section>
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title"  textDecoration="underline" lineHeight={1.8}>
        I ♥.
      </Heading>
      <Paragraph>
        Art, Blogging, Coding, Music, Swimming, Board Games.
      </Paragraph>
    </Section>
    <Section delay={0.3}>
      <Heading as="h3" variant="section-title" textDecoration="underline" lineHeight={1.8}>
        On the Web.
      </Heading>
      <List>
        <ListItem>
          <Link href='https://github.com/herraphfx' target='_blank'>
            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
              @herraphfx
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href='https://www.linkedin.com/in/henry-oko/' target='_blank'>
            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
              @henry-oko
            </Button>
          </Link>
        </ListItem>
      </List>
    </Section>
    </Container>
    </div>
  )
}

export default Page