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
                    Tesla Clone <Badge>2022</Badge>
                </Title>
                <P>
                   Building a Tesla clone bulding with React, Tailwind CSS, Material UI.
                </P>
                <List ml={4} my={10}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://tesla-clone-coral-delta.vercel.app/">
                           Tesla Front-End  <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/herraphfx/tesla-clone-2">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, React, Material UI, TailwindCSS</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/work/tesla.jpg"/>
            </Container>
        
        </div>
    )
}

export default Work

