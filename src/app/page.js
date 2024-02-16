import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Education from "./components/Education"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <About />
      <Education />
      <Footer />
    </ ChakraProvider>

  )
}

export default Home
