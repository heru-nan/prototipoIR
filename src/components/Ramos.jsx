import React,{useEffect, useState} from 'react';
import { Text, UnorderedList, ListItem, Table, Heading, Thead, Tbody, Tr, Th, Td, TableCaption, Center, Stack } from "@chakra-ui/react"
import ramos from '../ramos.json';
import listRamos from '../listRamos.json';


export default function Ramos(props) {
    const [ state, setState ] = useState({
        ramo: null
    });

    useEffect(()=>{
        const { id } = props.match.params
        //const ramo = ramos.filter(r => r.id == match.params.id)[0]
        const ramo = ramos[0];
        ramo.nombre = listRamos[id - 1].nombre;

        setState({ramo});
    }, [])

    if(!state.ramo){return (<Stack className="Ramo">
        <Heading m={6} size="md">Asignatura no encontrada en base de datos</Heading>
    </Stack>)}
    
    const {ramo} = state;
    return (
        <Stack m={6} className="Ramo">
            <Heading >{ramo.nombre}</Heading>
            <div className="Desc">
                <h4 >Descripcion de la asignatura: </h4>
                <Text>{ramo.descripcion}</Text>
                <div>
                        <UnorderedList> 
                        <ListItem>Horas teóricas presenciales: {ramo.horas[0]}</ListItem>
                        <ListItem>Horas prácticas presenciales: {ramo.horas[1]}</ListItem>
                        <ListItem>Horas de trabajo autónomo: {ramo.horas[2]}</ListItem>
                        </UnorderedList>
                </div>
            </div>
            <TablaCom content={ramo.competencias} />
            <TablaReq content={ramo.requisitos} />
            <Comentarios comentarios={ramo.comentarios} />
        </Stack>
    );
   // match.params.id
}



function TablaCom({content}){
    return (
<Table variant="simple" colorScheme="blue" mb={10} >
    <TableCaption fontSize="25px" placement="top">Competencias</TableCaption>
    <Thead>
        <Tr>
        <Th>Código</Th>
        <Th>Descripción</Th>
        <Th>Nivel</Th>
        <Th>El alumno es capaz de..</Th>
        </Tr>
    </Thead>
    <Tbody>
        <Tr>
        <Td>C1</Td>
        <Td>{content[0].descripcion}</Td>
        <Td>Básico</Td>
        <Td>{content[0].capaz}</Td>
        </Tr>
        <Tr>
        <Td>C8</Td>
        <Td>{content[1].descripcion}</Td>
        <Td>Medio</Td>
        <Td>{content[1].capaz}</Td>
        </Tr>
        <Tr>
        <Td>G3</Td>
        <Td>{content[2].descripcion}</Td>
        <Td>Medio</Td>
        <Td>{content[2].capaz}</Td>
        </Tr>
        
    </Tbody>
</Table>
    );
}


function TablaReq({content}){
    if(content.length <= 0){
        return <h1>Error</h1>
    }
    return (
<Table variant="simple" colorScheme="blue" mb={10} mt={15}>
    <Thead>
        <Tr>
        <Th>Asignaturas de requisito</Th>
        </Tr>
    </Thead>
    <Tbody>
        {
            content.map(req => <Tr key={req}><Td>{req}</Td></Tr>)
        }
    </Tbody>
</Table>
    );
}

function Comentarios({comentarios}){
    if(comentarios.length <= 0){
        return <h1>Error</h1>
    }
    return (
<Table variant="simple" colorScheme="blue" mb={15}>
    <Thead>
        <Tr>
        <Th>Comentarios, Sugerencias, Observaciones..</Th>
        </Tr>
    </Thead>
    <Tbody>
        {
            comentarios.map(e => (
             <Tr key={e.nombre}><Td>
                 <CommentFormat nombre={e.nombre} fecha={e.fecha} content={e.contenido}/>
             </Td></Tr>
             
            ))
        }
    </Tbody>
</Table>
    );
}

const CommentFormat = ({nombre, fecha, content}) => {
    return (<>
        <Heading mb={2} size="xs">{nombre} <Text d="inline" position="absolute" right="40px" color="gray.500">{fecha}</Text></Heading>
        <Text>
            {content}
        </Text>
    </>);
}
