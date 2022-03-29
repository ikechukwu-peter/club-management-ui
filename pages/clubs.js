import { useEffect, useState } from "react";
import withAuth from "../utils/withAuth.js";
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import NextLink from 'next/link'

const Clubs = () => {
    const [clubs, setClubs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        const token = localStorage.getItem('token')
        try {
            console.log(token, userId)
            setLoading(true)
            let clubs = await axios({
                method: "GET",
                url: `https://clubmanagementapi.herokuapp.com/club/clubs`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (clubs) {
                setClubs(clubs.data.user)
            }
            console.log(user)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }, [])


    return (
        <>
            <Header />
            {clubs.length > 0 ?
                clubs.map((club) => {
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
                                    <NextLink href={`${clubmembers / club.id}`} passHref>
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
            <Footer />
        </>
    );
};

export default withAuth(Clubs);