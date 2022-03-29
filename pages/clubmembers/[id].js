import { useEffect, useState, useCallback } from "react";
import withAuth from "../../utils/withAuth.js";
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Text, Flex, Box, Button, } from '@chakra-ui/react'
import cogoToast from 'cogo-toast'

const ClubMembers = () => {
    const router = useRouter()
    const { id } = router.query

    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)
    const removeMember = useCallback(async (memberId) => {
        const token = localStorage.getItem('token')
        try {
            setLoading(true)
            let clubs = await axios({
                method: "GET",
                url: `https://clubmanagementapi.herokuapp.com/club/remove/user/${memberId}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const { hide, hideAfter } = cogoToast.success(`Removal successful`, {
                onClick: () => {
                    hide();
                },
                hideAfter: 3
            });
            if (clubs) {
                setClubs(clubs.data.user)
            }
        } catch (error) {
            console.log(error)
            const { hide, hideAfter } = cogoToast.success(`Error while processing your request`, {
                onClick: () => {
                    hide();
                },
                hideAfter: 3
            });
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }, [])


    useEffect(() => {
        async function fetchMembers() {
            const token = localStorage.getItem('token')
            try {
                setLoading(true)
                let members = await axios({
                    method: "GET",
                    url: `https://clubmanagementapi.herokuapp.com/club/members/${id}`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                if (members) {
                    setMembers(members.data)
                }
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        fetchMembers()
    }, [id])


    return (
        <>

            {members.length > 0 ?
                members.map((member) => {
                    return (
                        <Box key={member.id}>
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
                : <Text
                    mx="2rem"
                    fontSize="1.5rem" >
                    No members has joined your club yet
                </Text>}

        </>
    );
};

export default withAuth(ClubMembers);