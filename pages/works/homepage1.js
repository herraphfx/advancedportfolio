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
                    Homepage(previous)  <Badge>2022</Badge>
                </Title>
                <P>
                   A Homepage profile formerly used by me. 
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://herraphfx.github.io/">
                           Homepage(previous) <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/herraphfx/herraphfx.github.io">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, HTML, CSS, Astro Library</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/work/homepage1.png"/>
            </Container>
        
        </div>
    )
}

export default Work

