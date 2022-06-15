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
                    Nadimiel <Badge>2022</Badge>
                </Title>
                <P>
                   Nadimiel Website for SME to automate the processes of daily business activities.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://nadimiel-chamarel.herokuapp.com/">
                            Nadimiel  <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/WayneA330/NadiMiel-Chamarel-Website">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, HTML, CSS, NodeJs</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/work/nadimiel.jpg"/>
            </Container>
        
        </div>
    )
}

export default Work

