import { useEffect, useState, useCallback } from "react";
import withAuth from "../utils/withAuth.js";
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import { useRouter } from 'next/router'

const ClubMembers = () => {
    const router = useRouter()
    const { pid } = router.query

    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)
    const removeMember = useCallback(async (memberId) => {
        const token = localStorage.getItem('token')
        try {
            console.log(token, userId)
            setLoading(true)
            let clubs = await axios({
                method: "GET",
                url: `https://clubmanagementapi.herokuapp.com/club/remove/user/${memberId}`,
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


    useEffect(async () => {
        const token = localStorage.getItem('token')
        try {
            console.log(token, userId)
            setLoading(true)
            let members = await axios({
                method: "GET",
                url: `https://clubmanagementapi.herokuapp.com/club/members/${pid}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (members) {
                setMembers(members.data.data)
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
            {members.length > 0 ?
                members.map((member) => {
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
                                    > {member.username}</Text>
                                </Box>
                                <Box
                                    py="2rem"

                                >
                                    <Button
                                        size='md'
                                        colorScheme="teal.800"
                                        bg="red.500"
                                        as='a'
                                        onClick={() => removeMember(member.id)}
                                    > Remove {member.username} </Button>


                                </Box>

                            </Flex>
                        </Box>
                    )
                })
                : <Text> No members has joined your club yet </Text>}
            <Footer />
        </>
    );
};

export default withAuth(ClubMembers);