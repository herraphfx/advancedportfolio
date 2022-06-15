import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/layout/section";
import { GridItem } from "../components/layout/grid-items";
import thumbThink from '../public/images/work/puckman.png'
import Navbar from "../components/layout/navbar";
import NoSsr from "../components/layout/no-ssr";
import VoxelDog from "../components/layout/voxel-dog";
 
const Posts = () => {
    return (
            <div>
        <Navbar/>
    <Container>
    <NoSsr>
      <VoxelDog/> 
      </NoSsr>
        <Heading as="h4" fontSize={20} mb={4}>
            Popular Posts
        </Heading>
        
        <Section delay={0.1}>
            <SimpleGrid columns={[1,2,2]} gap={6}>
                <SimpleGrid 
                title="Think Like a Programmer" 
                thumbnail={thumbThink}
                href="https://dev.to/coloene/getting-initiated-into-algorithmic-thinking-how-to-think-like-a-programmer-for-newbies-like-myself-4dai"
                />
                     <SimpleGrid 
                title="Think Like a Programmer" 
                href="https://dev.to/coloene/getting-initiated-into-algorithmic-thinking-how-to-think-like-a-programmer-for-newbies-like-myself-4dai"
                />
            </SimpleGrid>
        </Section>
    </Container>
    </div>
    )

}

export default Posts