import { chakra, Stack, useColorModeValue, Container, Box, Button } from '@chakra-ui/react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

const Index = () => {
    return (
        <Container maxW="5xl" p="6">
            <Banner />
        </Container>
    );
};

const Banner = () => {
    return (
        <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={5}
            alignItems={{ base: 'flex-start', md: 'center' }}
            justifyContent="space-between"
            rounded="lg"
            boxShadow="md"
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={{ base: 8, md: 16 }}
        >
            <Box>
                <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
                    Join our Community
                </chakra.h1>
                <chakra.h2
                    fontSize="2xl"
                    lineHeight={1.2}
                    fontWeight="bold"
                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                    bgClip="text"
                >
                    Be a part of something interesting.
                </chakra.h2>
            </Box>
            <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={{ base: 0, sm: 3 }}
                w={{ base: '100%', sm: 'auto' }}
            >
                {/* <Button
                    as={Link}
                    href="#"
                    color="white"
                    variant="solid"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    lineHeight={1}
                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                    _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)' }}
                >
                    Get Started
                </Button> */}
                <Button
                    href="#"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    colorScheme='purple' leftIcon={<FaDiscord />}
                >
                    Discord
                </Button>
                <Button
                    href="#"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    colorScheme='twitter' leftIcon={<FaTwitter />}
                >
                    Twitter
                </Button>
            </Stack>
        </Stack>
    );
};

export default Index;