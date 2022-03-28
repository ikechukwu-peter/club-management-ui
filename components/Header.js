import Head from 'next/head'
import { useRouter } from "next/router";
import NextLink from 'next/link'
import { useState } from 'react'
import {
    Flex,
    Box,
    Heading,
    Link,
    IconButton,
    useColorMode,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    SmallCloseIcon
} from "@chakra-ui/icons"
// const router = useRouter()

export default function Header() {
    const router = useRouter()
    const [display, changeDisplay] = useState("none")

    return (
        <>
            <Head>
                <title>Ikechukwu Peter Portfolio</title>
                <meta name="description" content="Ikechukwu Peter Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Flex maxW="auto"
                bg="teal.200"
                minH={"6rem"}
                h={["4rem", "4rem", "5rem"]}
                justifyContent="space-around"
                alignItems="center"
                fontFamily="Source Sans Pro"
                fontWeight="600"
            >
                <Heading
                    _hover={{ cursor: "pointer" }}
                    fontSize={["1rem", "1.2rem"]}
                    ml={["1rem", "1rem", "1rem", "3rem"]}
                    w="50%"
                >
                    Club X
                </Heading>
                <Box>
                    <NextLink href={'/login'} passHref>
                        <Link
                            textDecor="none"
                            _hover={
                                {
                                    textDecor: "none"
                                }
                            }
                            padding='10rem'
                        >
                            Login
                        </Link>
                    </NextLink>
                    <NextLink href={'/register'} passHref>
                        <Link
                            textDecor="none"
                            _hover={
                                {
                                    textDecor: "none"
                                }
                            }
                            padding='5rem'
                        >
                            Sign Up
                        </Link>
                    </NextLink>
                </Box>
            </Flex>


        </>
    )
}
