import React from "react";
import { Box, HStack, Heading, Button } from "@chakra-ui/react";

const Navbar = () => {
  const NAVLINKS = ["About", "Services", "Projects"]
  const heading = "</kv>"

  return (
    <Box py={4}>
      <HStack direction="row" justify="space-evenly">
        <Heading>{heading}</Heading>

        <HStack direction="row">
          {NAVLINKS.map((link, index) => (
            <Button variant="ghost" key={index} fontWeight={400} >
              {link}
            </Button>
          ))}
        </HStack>

        <HStack>
          <Button variant="outline" fontWeight={400} fontSize="sm">Contact</Button>
        </HStack>
      </HStack>
    </Box>
  )
}

export default Navbar;