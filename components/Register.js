import { useState } from 'react'
import {
    Flex,
    Box,
    Heading,
    Button,
    Image,
    Input,
    FormControl,
    FormLabel,
    FormHelperText,
    Textarea,
    Spinner,

} from '@chakra-ui/react'
import axios from 'axios'
import { FiSend } from "react-icons/fi"
import cogoToast from 'cogo-toast'

export default function Contact({
    darkTextColor,
}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (
            firstname,
            lastname,
            email,
            username,
            password) {

            try {
                setLoading(true)
                let res = await axios({
                    method: "POST",
                    url: '/api/mail',
                    data: {
                        firstname,
                        lastname,
                        email,
                        username,
                        password

                    }
                })
                console.log(res.data)

                setEmail("")
                setSubject("")
                setName("")
                setMessage("")

                const { hide, hideAfter } = cogoToast.success(`${res.data.success}`, {
                    onClick: () => {
                        hide();
                    },
                    hideAfter: 5
                });
            } catch (error) {
                console.log(error)
                let errorResponse = error.response ? error.response.errorMessage : "Check your internet connection"

                const { hide, hideAfter } = cogoToast.error(`${errorResponse}`, {
                    onClick: () => {
                        hide();
                    },
                    hideAfter: 5
                });

            }
            finally {
                setLoading(false)
            }

        }
        else {
            const { hide, hideAfter } = cogoToast.warn('Fill all the fields.😒', {
                onClick: () => {
                    hide();
                },
                hideAfter: 5
            });
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
                color={darkTextColor}
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
                        Sign up to create a club
                    </Heading>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >

                        <FormControl
                            isRequired
                            w={["100%", "100%", "100%", "80%"]}
                        >
                            <FormLabel
                                fontSize={["1rem", "1.1rem", "1.4rem", "1.6rem"]}
                                htmlFor='email'
                                mt="2rem"
                            >Email address</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.3rem", "1.3rem"]}
                                id='email' type='email' placeholder='Enter your email'
                                _focus={
                                    {
                                        borderColor: "teal.200",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <FormLabel
                                fontSize={["1rem", "1.1rem", "1.4rem", "1.6rem"]}
                                htmlFor='password'
                                mt="2rem"
                            >Password</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                                id='password' type='password' placeholder='**************'
                                _focus={
                                    {
                                        borderColor: "teal.200",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormLabel
                                fontSize={["1rem", "1.1rem", "1.4rem", "1.6rem"]}
                                htmlFor='firstname'
                                mt="2rem"
                            >Firstname</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                                id='firstname' type='text' placeholder='Enter lastname'
                                _focus={
                                    {
                                        borderColor: "teal.200",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <FormLabel
                                fontSize={["1rem", "1.1rem", "1.4rem", "1.6rem"]}
                                htmlFor='lastname'
                                mt="2rem"
                            >Lastname</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                                id='lastname' type='text' placeholder='Enter lastname'
                                _focus={
                                    {
                                        borderColor: "teal.200",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <FormLabel
                                fontSize={["1rem", "1.1rem", "1.4rem", "1.6rem"]}
                                htmlFor='username'
                                mt="2rem"
                            >Username</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                                id='username' type='text' placeholder='Enter Username'
                                _focus={
                                    {
                                        borderColor: "teal.200",
                                        borderWidth: ".15rem"
                                    }
                                }
                                _placeholder={{
                                    // color: "whiteAlpha.800"                              
                                }}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                        borderColor: "teal.200"
                                    }
                                }
                                _active={
                                    {
                                        borderColor: "teal.200"
                                    }
                                }
                            >
                                {loading ? <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='whiteAlpha.500'
                                    size='md'
                                /> : "Submit"}
                            </Button>

                        </FormControl>

                    </form>

                </Box>

            </Flex>

        </Box>

    )

}