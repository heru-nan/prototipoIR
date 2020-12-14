import {Center, Input, InputGroup, InputLeftElement, VStack, Box, Heading, Text,  } from '@chakra-ui/react';
import React, {useState} from 'react';

import {SearchIcon} from '@chakra-ui/icons'

import {Link} from 'react-router-dom';

import listRamos from '../listRamos.json';

export default function Home(){

    const [ramos] = useState(listRamos);
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        let strIn = e.target.value;
        setInput(strIn.toLowerCase());
        console.log(input);
    }

    const filterStrategy = (e) => {
        let el = (e.nombre).toLowerCase();
        if(input && el.includes(input)) {
            return true;
        }
        else return false;        
    }



    return (
        <>
        <Center >
            <InputGroup m={6}>
                <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
                />
                <Input type="phone" placeholder="Asignaturas" onChange={handleInput}  />
            </InputGroup>
        </Center>
        <Center>
            <VStack>
                {
                    ramos.filter(filterStrategy).map(e => (
                        <Feature as={Link} to={"/ramos/" + e.id} key={e.id} title={e.nombre} 
                        desc={e.detalles} />
                    ))
                }
            </VStack>
        </Center>
        </>
    )
}

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} width="100%" shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  