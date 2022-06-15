import '../styles/globals.css'
import  { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
  <ChakraProvider theme={theme}>
    <AnimatePresence exitBeforeEnter initial={true}>
    <Component {...pageProps} key={router.route} />
    </AnimatePresence>
    
    </ChakraProvider>
  )
}

export default MyApp
