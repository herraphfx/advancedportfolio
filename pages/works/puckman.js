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
                    Puckman Returns <Badge>2022</Badge>
                </Title>
                <P>
                    A Modern pacman game with new User Interface and Simple Grid. Built for entertainment and the code is available for improvement.
                </P>
                <List ml={4} my={10}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://puckman-returns.netlify.app/">
                            Puckman Game <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/WayneA330/Hackathon_1">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, HTML, CSS, Mathematics :D</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/work/puckman.png"/>
            </Container>
        
        </div>
    )
}

export default Work

