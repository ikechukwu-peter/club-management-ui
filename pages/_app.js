import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import jwtDecode from 'jwt-decode'



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
