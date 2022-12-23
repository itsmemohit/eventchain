import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
const link = "https://www.nftickets.io";
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
                        alignItems="start"
                        columns={{ base: 1, md: 2 }}
                        mb={24}
                        spacingY={{ base: 10, md: 32 }}
                        spacingX={{ base: 10, md: 24 }}
                    >
                        <Box>
                            <chakra.h2
                                mb={4}
                                fontSize={{ base: "2xl", md: "4xl" }}
                                fontWeight="bold"
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
                                href={link}
                                target="_blank"
                            >
                                Learn More
                            </Button>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                            py={48}
                            bg="gray.200"
                            _dark={{ bg: "gray.700" }}
                        ><img src="/event-tickets.png" width="110"
                            height="50" alt="Nature" class="responsive" />
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
                                href={link}
                                target="_blank"
                            >
                                Learn More
                            </Button>
                        </Box>
                        <Box
                            w="full"
                            h="full"
                            py={48}
                            bg="gray.200"
                            _dark={{ bg: "gray.700" }}
                        ></Box>
                    </SimpleGrid>
                </Box>
            </Flex>
        </>
    );
};
