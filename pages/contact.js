import { Container, Heading, SimpleGrid, Form, FormControl, FormLabel, Input, Box, Textarea } from "@chakra-ui/react";
import Section from "../components/layout/section";
import Navbar from "../components/layout/navbar";
import NoSsr from "../components/layout/no-ssr";
import VoxelDog from "../components/layout/voxel-dog";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4g3yccd', 'template_6y2gcj9', form.current, 'MYvXqUStIO5rARBOX')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
            <div>
        <Navbar/>
    <Container>
    <NoSsr>
      <VoxelDog/> 
      </NoSsr>
        <Heading as="h4" fontSize={20} mb={4}>
            Contact
        </Heading>
        
        <Section delay={0.1}>
        <Box>
            <form ref={form} onSubmit={sendEmail}>
                <FormControl>
                    <FormLabel>Your Name</FormLabel>
                    <Input type='text' placeholder="Enter Your Name" background='whiteAlpha.600' name="user_name" required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Your Email</FormLabel>
                    <Input  type='email' placeholder="Enter Your Email" background='whiteAlpha.600' name="user_email" required/>
                </FormControl>
                <FormControl>
                    <FormLabel>Your Message</FormLabel>
                    <Textarea  placeholder="Enter Your Message" background='whiteAlpha.600' name="message" required/>
                </FormControl>
                <Input marginTop={5} colorScheme="teal"  type='submit' value='Send' backgroundColor='teal' color='white'/>
            </form>
        </Box>
        </Section>
    </Container>
    </div>
    )

}

export default Contact