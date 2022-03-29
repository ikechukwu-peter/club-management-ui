import { Flex, Box, Text, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import clubs from '../pages/clubs'

export default function Users({ users, clubs }) {
    console.log(clubs)
    const [loading, setLoading] = useState(false)

    const inviteUser = async (username) => {
        console.log(username, clubs[0].id)
        const token = localStorage.getItem('token')
        const clubId = clubs[0].id
        try {
            setLoading(true)
            let invite = await axios({
                method: "POST",
                url: `https://clubmanagementapi.herokuapp.com/club/invite/${username}/${clubId}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (invite) {
                console.log('DONE')
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }


    }

    return (
        <>
            {

                users.map((user) => {
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
                                    > {user.username}</Text>
                                </Box>
                                <Box
                                    py="2rem"

                                >
                                    <Button
                                        size='md'
                                        colorScheme="teal.800"
                                        bg="teal.500"
                                        onClick={() => inviteUser(user.username)}> Invite </Button>
                                </Box>

                            </Flex>
                        </Box>
                    )
                })

            }

        </>

    )
}