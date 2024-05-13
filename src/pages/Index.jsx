import { Container, VStack, Heading, Text, Button, Box, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8} centerContent>
      <VStack spacing={8} align="center">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Image" />
          <Heading fontSize="2xl" mt={4}>John Doe</Heading>
          <Text mt={4}>Software Engineer | Web Developer | Tech Enthusiast</Text>
        </Box>
        <Text fontSize="xl" textAlign="center">
          Welcome to my personal website! I am a passionate software engineer with expertise in web development and a keen interest in the latest technology trends.
        </Text>
        <VStack spacing={4}>
          <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
            GitHub
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            LinkedIn
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="red" variant="solid">
            Email Me
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;