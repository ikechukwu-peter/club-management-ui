import { useCallback, useEffect, useState } from "react";
import {
    Flex,
    Box,
    Heading,
    Button,
    Input,
    FormControl,
    FormLabel,
    Spinner
} from '@chakra-ui/react'
import withAuth from "../utils/withAuth.js";
import axios from 'axios'
import { useRouter } from 'next/router'



const createClub = () => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter()


    const createNewClub = async (e) => {
        e.preventDefault()

        const token = localStorage.getItem('token')
        try {
            setLoading(true)
            let newClub = await axios({
                method: "POST",
                url: `https://clubmanagementapi.herokuapp.com/club/create/club`,
                data: {
                    name,
                    description
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(newClub)
            const { hide, hideAfter } = cogoToast.success(`Club created`, {
                onClick: () => {
                    hide();
                },
                hideAfter: 3
            });
            if (newClub) {
                router.push(`/clubmembers/${newClub.data.newClub.id}`)
            }
        } catch (error) {
            console.log(error)
            const { hide, hideAfter } = cogoToast.error(`${error ? error.data.error : 'Please check your network'}`, {
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
    }
    return (
        <Box
            id="#contact"
        >
            <Flex fontFamily="Source Sans Pro"
                justifyContent="space-around"
                alignItems="center"
                width={["100%", "100%", "100%", "90%"]}
                flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
                py="2rem"
                px="2rem"
                m="auto"
                color="teal.300"
            >
                <Box d="flex"
                    justifyContent="center"
                    flexDir="column"
                    w={["100%", "100%", "90%", "50%"]}
                    textAlign="center"
                    ml="4rem"
                    m="auto"

                >
                    <Heading
                        fontWeight={600}
                        fontSize="3rem"
                        mb="1rem"
                        color="teal.200"
                    >
                        Create Club
                    </Heading>
                    <form
                        onSubmit={(e) => createNewClub(e)}
                    >

                        <FormControl
                            isRequired
                            w={["100%", "100%", "100%", "80%"]}
                        >


                            <FormLabel
                                fontSize={["1rem", "1.1rem", "1.4rem", "1.6rem"]}
                                htmlFor='name'
                                mt="2rem"
                            >Club Name</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.3rem", "1.3rem"]}
                                id='name' type='text' placeholder='Club name'
                                _focus={
                                    {
                                        borderColor: "teal.200",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />


                            <FormLabel

                                fontSize={["1rem", "1.1rem", "1.4rem", "1.6rem"]}
                                htmlFor='description'>Club description</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                                id='description' type='text' placeholder='Short description of your club'
                                _focus={
                                    {
                                        borderColor: "teal.200",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <Button
                                size="lg"
                                w="100%"
                                mt="2rem"
                                color="whiteAlpha.900"
                                bg={"teal.700"}
                                _hover={{
                                    bg: 'teal.800',
                                }}

                                type="submit"
                                _focus={
                                    {
                                        borderColor: "teal.500"
                                    }
                                }
                                _active={
                                    {
                                        borderColor: "teal.500"
                                    }
                                }
                            >
                                {loading ? <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='whiteAlpha.500'
                                    size='md'
                                /> : "Create"}
                            </Button>

                        </FormControl>

                    </form>

                </Box>
            </Flex>

        </Box>

    );
};

export default withAuth(createClub);