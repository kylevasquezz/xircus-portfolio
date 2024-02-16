import React from 'react'
import { HStack, Image, Stack, Heading, Text, Box } from '@chakra-ui/react'

const Education = () => {
  return (
    <HStack mx="20%" spacing={20} my={20} justify="center">
      <Image src="/avatar.jpeg" fallbackSrc="https://via.placeholder.com/300" boxSize="20rem" borderRadius="full" alt='avatar' />
      <Stack spacing={10}>
        <Box>
          <Heading fontWeight={200} size="lg" my={8} borderBottom="2px solid #F6AD55">Education</Heading>
          <Text fontWeight={500} fontSize="xs" color="gray.500">2019 - 2024</Text>
          <Text fontWeight={500} fontSize="md" >BS in Computer Engineering | Cum Laude</Text>
          <Text fontWeight={500} fontSize="xs" color="gray.500">Far Eastern University - Alabang</Text>
        </Box>

        <Box>
          <Heading fontWeight={200} size="lg" my={8} borderBottom="2px solid #F6AD55">Experience</Heading>
          <Text fontWeight={500} fontSize="xs" color="gray.500">Jan 2024 - Present</Text>
          <Text fontWeight={500} fontSize="md" >React Developer</Text>
          <Text fontWeight={500} fontSize="xs" color="gray.500">Xircus</Text>
        </Box>

        <Box>
          <Heading fontWeight={200} size="lg" my={8} borderBottom="2px solid #F6AD55">Competences</Heading>
          <Text fontWeight={500} fontSize="md" >Web Development</Text>
          <Text fontWeight={500} fontSize="md" >UX /UI Design</Text>
          <Text fontWeight={500} fontSize="md" >UX Research</Text>
        </Box>

        <Box>
          <Heading fontWeight={200} size="lg" my={8} borderBottom="2px solid #F6AD55">Tools</Heading>
          <Text fontWeight={500} fontSize="md" >HTML - CSS - Chakra UI</Text>
          <Text fontWeight={500} fontSize="md" >Javascript - React</Text>
          <Text fontWeight={500} fontSize="md" >Figma</Text>
        </Box>
      </Stack>
    </HStack>
  )
}

export default Education