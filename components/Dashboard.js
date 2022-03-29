import { ButtonGroup, Container, IconButton, Stack, Flex, Box, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function DashboardPage({ user, clubs }) {

    const joinClub = async (memberId) => {
        try {

            let club = await axios({
                method: "POST",
                url: `https://clubmanagementapi.herokuapp.com/club/join/${memberId}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
    const rejectInvitation = async (memberId) => {
        try {

            let club = await axios({
                method: "POST",
                url: `https://clubmanagementapi.herokuapp.com/club/reject/${memberId}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Flex>
            <Box>
                <Text
                    fontSize={{ base: '2rem', md: '3rem' }}
                    mx="1.4rem"
                >
                    Welcome {user.username}
                </Text>
                {/* {clubs.length > 0 ? clubs.map((club) => {
                    return (
                        <Box>
                            <Flex
                                flexDir={{ base: 'column', md: 'row' }}
                                justifyContent={{ base: 'space-between' }}
                                alignItems={{ base: 'center' }}
                                w="20%"
                                ml="2rem"
                            >
                                <Box
                                    py="2rem"
                                >
                                    <Text as='h2'
                                        color='teal.600'
                                        fontSize="1.5rem"
                                    > {club.name}</Text>
                                </Box>
                                <Box
                                    py="2rem"

                                >
                                    <Button
                                        size='md'
                                        colorScheme="teal.800"
                                        bg="teal.500"
                                        onClick={() => joinClub(club.id)}> Accept
                                    </Button>
                                    <Button
                                        size='md'
                                        colorScheme="teal.800"
                                        bg="teal.500"
                                        onClick={() => rejectInvitation(club.id)}> Reject
                                    </Button>
                                </Box>

                            </Flex>
                        </Box>
                    )
                }) : null} */}

            </Box>
        </Flex>
        //<h2>{user.firstname}</h2>
    )
}