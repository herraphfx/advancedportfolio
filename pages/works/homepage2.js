import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/layout/workdetails"
import P from '../../components/layout/paragraph'
import Navbar from "../../components/layout/navbar";
import NoSsr from "../../components/layout/no-ssr";
import VoxelDog from "../../components/layout/voxel-dog";

const Work = () => {
    return (
        <div>
        <Navbar/>
        <NoSsr>
      <VoxelDog/> 
      </NoSsr>
        
            <Container>
                <Title>
                    Homepage(new)  <Badge>2022</Badge>
                </Title>
                <P>
                   A Homepage Created by Henry using React. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link >
                           Homepage(new) <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/herraphfx/advancedportfolio">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, React, NextJS, ChakraJS, ThreeJS, Framer Motion</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/work/homepage2.png"/>
            </Container>
        
        </div>
    )
}

export default Work

