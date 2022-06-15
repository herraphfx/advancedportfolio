import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/layout/workdetails"
import P from '../../components/layout/paragraph'
import Layout from '../../components/layout/article'
import Navbar from "../../components/layout/navbar";

const Work = () => {
    return (
        <div>
        <Navbar/>
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    Puckman Returns <Badge>2022</Badge>
                </Title>
                <P>
                    A Modern pacman game with new User Interface and Simple Grid. Built for entertainment and the code is available for improvement.
                </P>
            </Container>
        </Layout>
        </div>
    )
}

export default Work

