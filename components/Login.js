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
import cogoToast from 'cogo-toast'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email, password) {

            try {
                setLoading(true)
                let res = await axios({
                    method: "POST",
                    url: '/api/mail',
                    data: {
                        email,
                        password

                    }
                })
                console.log(res.data)

                setEmail("")
                setPassword("")


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
                        Log in
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
                                htmlFor='password'>Enter Password</FormLabel>
                            <Input
                                fontSize={["1.1rem", "1.1rem", "1.2rem", "1.3rem"]}
                                id='password' type='password' placeholder='************'
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
                                        borderColor: "purple.500"
                                    }
                                }
                                _active={
                                    {
                                        borderColor: "purple.500"
                                    }
                                }
                            >
                                {loading ? <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='whiteAlpha.500'
                                    size='md'
                                /> : "Login"}
                            </Button>

                        </FormControl>

                    </form>

                </Box>
            </Flex>

        </Box>

    )

}