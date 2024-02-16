import React from 'react'
import { Box, Text, Heading, Link } from '@chakra-ui/react'

const About = () => {
  return (
    <Box w="100%" my={20} >
      <Text fontWeight={500} color="gray.500" align="center">I'M KYLE</Text>
      <Heading fontWeight={200} align="center" size="2xl" my={5}>About Me</Heading>

      <Box bg="gray.700" my={20} py={10}>
        <Heading fontWeight={200} size="lg" align="center" py={10}>Biography</Heading>
        <Text fontWeight={200} fontSize="sm" mx="20%" letterSpacing={1} textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ullam. Consectetur vero nobis et, placeat optio assumenda voluptatum facere dolorum illum sunt totam necessitatibus dolores minus quis cum reiciendis veritatis.
          Beatae voluptatum obcaecati cupiditate officiis laudantium quasi nostrum, esse veritatis est ea iusto et tempore ad, repudiandae quam. Ipsum cumque ipsa totam incidunt quo doloremque deserunt vitae eligendi sit magni!
        </Text>
        <Text align="center" py={10} color="orange.300" fontWeight={500} fontSize="sm">
          <Link >Download Resume</Link>
        </Text>
      </Box>
    </Box >
  )
}

export default About