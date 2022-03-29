import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router'

let token = jwtDecode(localStorage.getItem('token'))
//Check for expired token
const currentTime = Date.now() / 1000;
if (token.exp < currentTime) {
  localStorage.clear()
  router.push('/login')
}

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider resetCSS>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
