import { ButtonGroup, Container, IconButton, Stack, Flex, Box, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function DashboardPage({ user }) {
    return (
        <Flex>
            <Box>
                <Text
                    fontSize={{ base: '2rem', md: '3rem' }}
                >  Welcome {user.username} </Text>
            </Box>
        </Flex>
        //<h2>{user.firstname}</h2>
    )
}