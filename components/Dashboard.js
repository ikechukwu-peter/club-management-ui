import { ButtonGroup, Container, IconButton, Stack, Flex, Box, Text,FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
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

            const { hide, hideAfter } = cogoToast.success(`You have joined successfully`, {
                onClick: () => {
                    hide();
                },
                hideAfter: 3
            });

        } catch (error) {
            console.log(error)
            const { hide, hideAfter } = cogoToast.error(`Error while processing your request`, {
                onClick: () => {
                    hide();
                },
                hideAfter: 3
            });
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
            const { hide, hideAfter } = cogoToast.success(`Rejection successful`, {
                onClick: () => {
                    hide();
                },
                hideAfter: 3
            });

        } catch (error) {
            console.log(error)
            const { hide, hideAfter } = cogoToast.error(`Error while processing your request`, {
                onClick: () => {
                    hide();
                },
                hideAfter: 3
            });
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
                {clubs.length > 0 ? clubs.map((club) => {
                    return (
                        <Box key={club.id}>
                            <Flex
                                flexDir={{ base: 'column', md: 'row' }}
                                justifyContent={{ base: 'space-between' }}
                                alignItems={{ base: 'center' }}
                                w="50%"
                                ml="2rem"
                            >
                                <Box
                                    py="2rem"
                                >
                                    <Text as='h2'
                                        color='teal.600'
                                        fontSize="1.5rem"
                                    > You have been invited to join  {club.name} club</Text>
                                </Box>
                                <Box
                                    py="2rem"
                                 d="flex"
                                 flexDir="row"
                                 justifyContents="space-between"
                                 alignItems="center"

                                >
                                    <Button
                                        size='md'
                                        colorScheme="teal.800"
                                        bg="teal.500"
                                        mx="1rem"
   
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
                }) : null}

            </Box>
        </Flex>
    )
}
