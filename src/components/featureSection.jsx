import React from "react";
import { Image, Link } from '@chakra-ui/react'
import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
const platformLink = "https://eventchain.vercel.app/";
export default function Feature() {
    return (
        <>
            <Flex
                bg="#edf3f8"
                _dark={{ bg: "#3e3e3e" }}
                p={20}
                w="full"
                justifyContent="center"
                alignItems="center"
                style={{
                    width: "auto",
                    "@media (max-width: 640px)": {
                        width: "100%",
                    },
                }}
            >
                <Box
                    shadow="xl"
                    bg="white"
                    _dark={{ bg: "gray.800" }}
                    px={8}
                    py={20}
                    mx="auto"
                >
                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, md: 2 }}
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                letterSpacing="tight"
                                textAlign={{ base: "center", md: "left" }}
                                color="gray.900"
                                _dark={{ color: "gray.400" }}
                                lineHeight={{ md: "shorter" }}
                            >
                                Token gate your events
                                {/* <Text
                                    bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                                    bgClip='text'
                                    fontSize={{ base: "2xl", md: "4xl" }}
                                    fontWeight='bold'
                                >
                                    your events
                                </Text> */}
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color="gray.600"
                                _dark={{ color: "gray.400" }}
                                fontSize={{ md: "lg" }}
                            >
                                create and sell NFT Tickets in less than 1 minute and token gate your events with
                                and prevent fake tickets with the power of NFTs.
                            </chakra.p>
                            <Button
                                w={{ base: "full", sm: "auto" }}
                                size="lg"
                                colorScheme='linkedin'
                                href={platformLink}
                                target="_blank"
                            >
                                <Link href={platformLink} isExternal>
                                    Learn More
                                </Link>
                            </Button>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                            _dark={{ bg: "gray.700" }}
                        >
                            <Image src="https://i.ibb.co/k9BJsXR/token-gated-events.png" alt="token gate events" size="80%" />
                        </Box>
                    </SimpleGrid>
                    <SimpleGrid
                        alignItems="center"
                        columns={{ base: 1, md: 2 }}
                        flexDirection="column-reverse"
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box order={{ base: "initial", md: 2 }}>
                            <chakra.h2
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="extrabold"
                                letterSpacing="tight"
                                textAlign={{ base: "center", md: "left" }}
                                color="gray.900"
                                _dark={{ color: "gray.400" }}
                                lineHeight={{ md: "shorter" }}
                            >
                                Trustworthy Ticketing for Every Event
                            </chakra.h2>
                            <chakra.p
                                mb={5}
                                textAlign={{ base: "center", sm: "left" }}
                                color="gray.600"
                                _dark={{ color: "gray.400" }}
                                fontSize={{ md: "lg" }}
                            >
                                Every ticket is secure and verified.
                                you can buy tickets with confidence, knowing that you are
                                getting a legitimate ticket to the event you want to attend.
                                With our platform, you'll never have to worry about fake tickets again.
                            </chakra.p>
                            <Button
                                w={{ base: "full", sm: "auto" }}
                                size="lg"
                                colorScheme='linkedin'
                                target="_blank"
                            >
                                <Link href={platformLink} isExternal>
                                    Learn More
                                </Link>

                            </Button>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                            py={18}

                            _dark={{ bg: "gray.700" }}
                        >
                            <Image src="https://i.ibb.co/W0pYgFR/tickets.png" alt="event events" size="90%" />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
        </>
    );
};
