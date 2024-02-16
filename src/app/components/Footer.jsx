import { Text, Heading, Button, VStack, HStack, Link } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <VStack bg="gray.700" py={20} paddingBottom={0}>
      <Text fontWeight={500} color="gray.500" align="center">WANT TO WORK?</Text>
      <Heading fontWeight={200} align="center" size="2xl" my={5}>Let&apos;s make a wonderful <br /> website together!</Heading>
      <Button variant="outline" fontWeight={200} fontSize="sm">Get in touch!</Button>

      <HStack
        w="60%"
        bg="gray.800"
        justify="space-between"
        p={10}
        borderRadius="1rem 1rem 0 0"
        marginTop={20}
        color="orange.300"
      >
        <VStack align="start">
          <HStack fontWeight={700}>
            <Text>Facebook</Text>
            <Text>Twitter</Text>
            <Text>Instagram</Text>
          </HStack>
          <Text fontSize="xs" color="white">©Copyright, Kyle Vasquez</Text>
        </VStack>

        <VStack align="end">
          <HStack fontWeight={700}>
            <Text>About</Text>
            <Text>Service</Text>
            <Text>Projects</Text>
          </HStack>
          <Text fontSize="xs" color="white">Contact me <Link fontWeight={700}>kyle.xircus@gmail.com</Link></Text>
        </VStack>

      </HStack>
    </VStack>
  )
}

export default Footer