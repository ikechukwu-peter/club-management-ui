import Head from 'next/head'
import NextLink from 'next/link'
import { Flex, Button, Box, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Club Management</title>
        <meta name="description" content="club managemenet ui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          height="80%"
        >
          <Box
            mb="5rem"
          >
            <Text as='h4'
              fontSize="2.2rem"
              py="2rem"
              fontWeight={{ base: "normal", md: "bold" }}
              mx="2rem"

            >
              Welcome to FaRoyale, a place for all kinds of clubs
            </Text>
          </Box>
          <Box
            mb="5rem"
          >
            <NextLink href="/register" passHref>
              <Button
                as='a'
                bg="teal.500"
                color="whiteAlpha.900"
              >
                Create a club
              </Button>
            </NextLink>

          </Box>
        </Flex>
      </main>

    </div>
  )
}
