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
                    Netflix Clone <Badge>2022</Badge>
                </Title>
                <P>
                   Building a Netflix clone and working with API, Axios, React, Tailwind CSS, Firebase. Session handling with React
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://henry-netflixclone.vercel.app/">
                            Henryflix  <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/herraphfx/henryflix">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, React, Axios, Firebase, TailwindCSS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/work/netflixhenry.jpg"/>
            </Container>
        
        </div>
    )
}

export default Work

