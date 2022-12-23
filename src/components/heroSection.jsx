import * as React from 'react';
import { Container, chakra, Stack, Text, Button } from '@chakra-ui/react';
// Here we have used react-icons package for the icons

const HeroSection = () => {
  return (
    <Container p={{ base: 8, sm: 14 }}>
      <Stack direction="column" spacing={6} alignItems="center">
        {/* <Box py={2} px={3} bg="teal" w="max-content" color="white" rounded="md" fontSize="sm">
          <Stack direction={{ base: 'column', sm: 'row' }}>
            <Text fontWeight="bold">Ready, Set, Build! 🚀</Text>
            <Text>Join the Hackathon!</Text>
          </Stack>
        </Box> */}
        <chakra.h1
          fontSize={{ sm: '4xl', md: '6xl' }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Tokenize your {' '}
          {/* <chakra.span color="teal" bg="linear-gradient(transparent 50%, #83e9e7 50%)">
            Experience
          </chakra.span> */}
          <Text
            bgGradient="linear(to-l, #0ea5e9,#2563eb)"
            bgClip='text'
            fontSize={{ sm: '4xl', md: '6xl' }}
            fontWeight='bold'
          >
            Ticketing Experience
          </Text>
        </chakra.h1>
        <Text maxW="550px" fontSize={{ sm: 'lg', md: 'xl' }} textAlign="center" color="gray.500">
          Eventchain allows you to create events on Polygon and Solana and sell NFT tickets
          so you can token gate your event and also serve proof of attendance.
        </Text>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          w={{ base: '100%', sm: 'auto' }}
          spacing={5}
        >
          <Button
            colorScheme="linkedin"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
          >
            Get Started
          </Button>
          {/* <Button
            leftIcon={<FaGithub />}
            colorScheme="gray"
            variant="outline"
            rounded="md"
            size="lg"
            height="3.5rem"
            fontSize="1.2rem"
          >
            Github
          </Button> */}
        </Stack>
      </Stack>
    </Container>
  );
};

export default HeroSection;

