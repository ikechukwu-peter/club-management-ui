import { useEffect, useState, useCallback } from "react";
import withAuth from "../utils/withAuth.js";
import axios from 'axios'
import NextLink from 'next/link'
import { Text, Box, Flex, Button } from '@chakra-ui/react'

const Clubs = () => {
    const [clubs, setClubs] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = useCallback(async () => {
        const token = localStorage.getItem('token')
        try {
            setLoading(true)
            let clubs = await axios({
                method: "GET",
                url: `https://clubmanagementapi.herokuapp.com/club/clubs`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (clubs) {
                setClubs(clubs.data)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }, [])


    useEffect( () => {
        fetchData()
    }, [fetchData])


    return (
        <>
            {clubs.length > 0 ?
                clubs.map((club) => {
                    return (
                        <Box key={club.id}>
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
                                    <NextLink href={`clubmembers/${club.id}`} passHref>
                                        <Button
                                            size='md'
                                            colorScheme="teal.800"
                                            bg="teal.500"
                                            as='a'
                                        > View </Button>
                                    </NextLink>

                                </Box>

                            </Flex>
                        </Box>
                    )
                })
                : <Text> You have no club created yet </Text>}
        </>
    );
};

export default withAuth(Clubs);