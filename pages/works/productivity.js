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
                   Productivity App  <Badge>2022</Badge>
                </Title>
                <P>
                  A productivity application used to manage daily activities and other work related activities 
                </P>
                <List ml={4} my={10}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://simple-productivity.vercel.app/">
                          Productivity App <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/herraphfx/simple_productivity">
                            Source Code <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Javascript, HTML, Tailwind CSS, Bootstrap, React</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/work/productivity_a.png"/>
                <WorkImage src="/images/work/productivity_b.png"/>
                <WorkImage src="/images/work/productivity_c.png"/>
                <WorkImage src="/images/work/productivity_d.png"/>
            </Container>
        
        </div>
    )
}

export default Work

